import { useEffect, useRef, useState } from "react"
import mapData from "./map"
import { Detect } from "./js/Detect"
import styles from "./styles/Contain.module.css"
import { HitBox, Object } from "./styles/Objects"
import { Player } from "./styles/Player"
import { World } from "./styles/World"
import dogImg from "./images/dog.png"
import heartImg from "./images/heart.png"
import { WallCollision } from "./js/WallCollision"
import { HealthBar } from "./styles/HealthBar"

export const Game = () => {
    const player = useRef({
        x: 400,
        y: 250,
        width: 100,
        height: 100,
        image: dogImg,
        health: 100,
        hunger: 100,
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
    }); // veiwport
    const [time, setTime] = useState(0); // active interval
    const [isPaused, setIsPaused] = useState(false); // pause

    // main interval (tusda filed orulah ystoi)
    useEffect(() => {
        setTimeout(() => {
            // render
            if (time >= 0) {
                setTime(time + 1);
            }
            if (time > 1000) {
                setTime(0);
            }
            // if (isPaused) {
            //     setTime(-1);
            // }
            //
            mapData.objects.map((item, _index) => {
                WallCollision(player.current, item)
            })

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
            mapData.objects.map((item, _index) => {
                item.x += velocity.current.x;
                item.y += velocity.current.y;
                item.hitBox.x += velocity.current.x;
                item.hitBox.y += velocity.current.y;
            })
        }, 30);
    }, [time]);

    onkeydown = ({ keyCode }) => {
        console.log(keyCode)
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
                    {mapData.objects.map((item, index) => {
                        return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} ahead={player.current.y + player.current.height - 25 < item.hitBox.y} />
                    })}

                    {/* {mapData.objects.map((item, index) => {
                        return <HitBox x={item.hitBox.x} y={item.hitBox.y} width={item.hitBox.width} height={item.hitBox.height} image={item.hitBox.image} key={index} />
                    })} */}

                    <Object x={12} y={13} width={26} height={26} image={heartImg} ahead={true} />
                    <HealthBar color="red" health={player.current.health} />
                    <Player x={player.current.x} y={player.current.y} width={player.current.width} height={player.current.height} image={player.current.image} />
                </>
            </World>
        </div>
    )
}