import { useEffect, useRef, useState } from "react"
import { Detect } from "./Detect"
import styles from "./styles/Contain.module.css"
import { Floor } from "./styles/Floor"
import { InputSafe, Object } from "./styles/Objects"
import { Player } from "./styles/Player"
import { Room } from "./styles/Room"
import { Word } from "./styles/Word"
import floorImg from "./images/floor.png"
import { Item, ItemFromContain, ItemsContain, ItemSquare } from "./styles/Items"
import { PuzzleFunctions } from "./puzzles/PuzzleFunctions"

export const Template = (props) => {
    const player = useRef({
        x: 300,
        y: 200,
        width: 220,
        height: 250,
    });
    const vx = useRef(0); // player movement handler
    const [items, setItems] = useState([]) // items: name, image ,useFor
    const roomX = useRef(0); // room x value
    const playerPosition = useRef({
        left: false,
        right: false,
    });
    const [word, setWord] = useState("");
    const [isItemsContain, setIsItemsContain] = useState(-80); // item contain bga eseh
    const [atPuzzle, setAtPuzzle] = useState(-1); // puzzled baigaa eseh
    const [isPuzzle, setisPuzzle] = useState(-1); // puzzle ruu orohod
    const [time, setTime] = useState(0); // active interval

    // main interval (tusda filed orulah ystoi)
    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1);
            if (playerPosition.current.left) {
                vx.current = 8;
            } else if (playerPosition.current.right) {
                vx.current = -8;
            } else {
                vx.current = 0;
            }
            roomX.current += vx.current;
            // console.log(roomX)
            props.objects.map((item, _index) => {
                item.x += vx.current;
            })
            for (let i = 0; i < props.puzzleObjects.length; i++) {
                props.puzzleObjects[i].x += vx.current
                if (Detect(player.current, props.puzzleObjects[i])) {
                    console.log(true)
                    setisPuzzle(i);
                    setWord("Press 'E'");
                    return
                } else {
                    console.log(false)
                    setisPuzzle(-1);
                    setWord("");
                }
            }
            // props.puzzleObjects.forEach((item, index) => {
            //     item.x += vx.current;
            // if (Detect(player.current, item)) {
            //         console.log(true)
            //         setisPuzzle(index);
            //         setWord("Press 'E'");
            // } else {
            //     console.log(false)
            //     setisPuzzle(-1);
            //     setWord("");
            // }
            // })
        }, 30);
    }, [time]);

    onkeydown = ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                playerPosition.current.left = true;
                playerPosition.current.right = false;
                break;
            case 68:
                playerPosition.current.left = false;
                playerPosition.current.right = true;
                break;
            case 69:
                if (isPuzzle >= 0) {
                    setAtPuzzle(isPuzzle);
                }
                if (atPuzzle >= 0) {
                    setAtPuzzle(-1);
                }
                break;
            case 89:
                showItemsContain();
                break;
            default:
            // nothing
        }
    }

    onkeyup = ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                playerPosition.current.left = false;
                break;
            case 68:
                playerPosition.current.right = false;
                break;
            default:
            // nothing
        }
    }

    const showItemsContain = () => {
        if (isItemsContain === 0) {
            setIsItemsContain(-80);
        } else {
            setIsItemsContain(0);
        }
    }

    const takeItem = (item) => {
        setItems([...items, { name: item.name, image: item.image, useFor: item.useFor }]);
        props.usefulItems[atPuzzle].exist = false;
    }

    return (
        <div className={styles.contain}>
            <Room image="https://img.freepik.com/free-vector/volumetric-damask-seamless-pattern-background_1217-3236.jpg?size=626&ext=jpg&ga=GA1.2.180028044.1681210586&semt=ais" size={atPuzzle >= 0 ? 750 : 150} position={roomX.current}>
                    <>
                        {/* <Floor image={floorImg} x={roomX.current} /> */}
                        {props.objects.map((item, index) => {
                            return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} />
                        })}
                        {/* {props.puzzleObjects.map((item, index) => {
                            return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.done ? item.doneImg : item.image} key={index} >
                                {item.done &&
                                    // puzzle duusad dotor n baigaa item
                                    <Item exist={props.usefulItems[index].exist ? "block" : "none"} width={props.usefulItems[index].width} height={props.usefulItems[index].height} image={props.usefulItems[index].image} />
                                }
                            </Object>
                        })} */}
                        <Player x={player.current.x} y={player.current.y} width={player.current.width} height={player.current.height} />
                    </>
                {/* {word && <Word>{word}</Word>}
                <ItemsContain pos={isItemsContain}>
                    <ItemSquare width={80} height={600} top={0} right={0}>
                        {items.map((item, index) => {
                            return <ItemFromContain image={item.image} key={index} />
                        })}
                    </ItemSquare>
                    <ItemSquare width={30} height={50} top={275} right={80} onClick={showItemsContain} />
                </ItemsContain> */}
            </Room>
        </div>
    )
}