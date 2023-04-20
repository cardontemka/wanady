import { useEffect, useRef, useState } from "react"
import { Detect } from "./Detect"
import styles from "./styles/Contain.module.css"
import { Object } from "./styles/Objects"
import { Player } from "./styles/Player"
import { World } from "./styles/World"

export const Template = (props) => {
    const player = useRef({
        x: 400,
        y: 250,
        width: 100,
        height: 100,
        image: "https://www.pngplay.com/wp-content/uploads/12/Clip-Art-Dog-Transparent-File.png"
    });
    const velocity = useRef({
        x: 0,
        y: 0,
    }); // player movement handler
    const mapPosition = useRef({
        x: 100,
        y: 100,
    }); // room x value
    const playerPosition = useRef({
        up: false,
        down: false,
        left: false,
        right: false,
    });
    const [time, setTime] = useState(0); // active interval

    // main interval (tusda filed orulah ystoi)
    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1);
            if (playerPosition.current.left) {
                velocity.current.x = 8;
            } else if (playerPosition.current.right) {
                velocity.current.x = -8;
            } else {
                velocity.current.x = 0;
            }
            if (playerPosition.current.up) {
                velocity.current.y = 8;
            } else if (playerPosition.current.down) {
                velocity.current.y = -8;
            } else {
                velocity.current.y = 0;
            }
            mapPosition.current.x += velocity.current.x;
            mapPosition.current.y += velocity.current.y;
            // console.log(mapPosition)
            props.objects.map((item, _index) => {
                item.x += velocity.current.x;
                item.y += velocity.current.y;
            })
        }, 30);
    }, [time]);

    onkeydown = ({ keyCode }) => {
        console.log(keyCode)
        switch (keyCode) {
            case 65: // left
                playerPosition.current.left = true; //
                playerPosition.current.right = false;
                break;
            case 68: // right
                playerPosition.current.left = false;
                playerPosition.current.right = true; //
                break;
            case 87: // up
                playerPosition.current.up = true; //
                playerPosition.current.down = false;
                break;
            case 83: // down
                playerPosition.current.up = false;
                playerPosition.current.down = true; //
                break;
            default:
            // nothing
        }
    }

    onkeyup = ({ keyCode }) => {
        switch (keyCode) {
            case 65: // left
                playerPosition.current.left = false;
                break;
            case 68: // right
                playerPosition.current.right = false;
                break;
            case 87: // up
                playerPosition.current.up = false;
                break;
            case 83: // down
                playerPosition.current.down = false;
                break;
            default:
            // nothing
        }
    }

    return (
        <div className={styles.contain}>
            <World image="https://img.freepik.com/free-vector/seamless-green-grass-pattern_1284-52275.jpg" size={150} x={mapPosition.current.x} y={mapPosition.current.y}>
                <>
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
                    <Player x={player.current.x} y={player.current.y} width={player.current.width} height={player.current.height} image={player.current.image} />
                </>
            </World>
        </div>
    )
}