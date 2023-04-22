import { useEffect, useRef, useState } from "react"
import { Detect } from "./Detect"
import styles from "./styles/Contain.module.css"
import { Object } from "./styles/Objects"
import { Player } from "./styles/Player"
import { World } from "./styles/World"
import dogImg from "./images/dog.png"
import { WallCollision } from "./WallCollision"

export const Template = (props) => {
    const player = useRef({
        x: 400,
        y: 250,
        width: 100,
        height: 100,
        image: dogImg,
        last: {
            up: false,
            down: false,
            left: false,
            right: false,
        },
        now: {
            up: false,
            down: false,
            left: false,
            right: false,
        }
    });
    const velocity = useRef({
        x: 0,
        y: 0,
    }); // player movement handler
    const mapPosition = useRef({
        x: 100,
        y: 100,
    }); // room x value
    // const playerPosition = useRef({
    //     up: false,
    //     down: false,
    //     left: false,
    //     right: false,
    // });
    const [time, setTime] = useState(0); // active interval

    // main interval (tusda filed orulah ystoi)
    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1);
            for (let i = 0; i < props.objects.length; i++) {
                WallCollision(player.current, props.objects[i])
                // if (Detect(player.current, props.objects[i])) {
                //     break
                // }
            }
            if (player.current.now.left) {
                velocity.current.x = 8;
            } else if (player.current.now.right) {
                velocity.current.x = -8;
            } else {
                velocity.current.x = 0;
            }
            if (player.current.now.up) {
                velocity.current.y = 8;
            } else if (player.current.now.down) {
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
                // WallCollision(player.current, item);
                // if (Detect(player.current, item)) {
                //     if (player.current.last.up) {
                //         player.current.now.up = false
                //     } else if (player.current.last.down) {
                //         player.current.now.down = false
                //     } else if (player.current.last.left) {
                //         player.current.now.left = false
                //     } else if (player.current.last.right) {
                //         player.current.now.right = false
                //     }
                // }
            })
        }, 30);
    }, [time]);

    onkeydown = ({ keyCode }) => {
        // console.log(keyCode)
        switch (keyCode) {
            case 65: // left
                player.current.now.left = true; //
                player.current.last.left = true; //
                player.current.now.right = false;
                player.current.last.right = false;
                break;
            case 68: // right
                player.current.now.left = false;
                player.current.last.left = false;
                player.current.now.right = true; //
                player.current.last.right = true; //
                break;
            case 87: // up
                player.current.now.up = true; //
                player.current.last.up = true; //
                player.current.now.down = false;
                player.current.last.down = false;
                break;
            case 83: // down
                player.current.now.up = false;
                player.current.last.up = false;
                player.current.now.down = true; //
                player.current.last.down = true; //
                break;
            default:
            // nothing
        }
    }

    onkeyup = ({ keyCode }) => {
        switch (keyCode) {
            case 65: // left
                player.current.now.left = false;
                break;
            case 68: // right
                player.current.now.right = false;
                break;
            case 87: // up
                player.current.now.up = false;
                break;
            case 83: // down
                player.current.now.down = false;
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