import { useEffect, useRef, useState } from "react"
import mapData from "./map"
import { Detect } from "./js/Detect"
import styles from "./styles/Contain.module.css"
import { HitBox, Object } from "./styles/Objects"
import { Player } from "./styles/Player"
import { World } from "./styles/World"
import dogImg from "./images/dog.png"
import heartImg from "./images/heart.png"
import hungerImg from "./images/hunger.png"
import { WallCollision } from "./js/WallCollision"
import { HealthBar } from "./styles/HealthBar"
import { Pause } from "./components/Pause"
import { Text } from "./styles/Text"

export const Game = () => {
    const player = useRef({
        x: 400,
        y: 250,
        width: 100,
        height: 100,
        image: dogImg,
        health: 100,
        hunger: 100,
        text: "",
        foodId: null,
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
    const game = useRef({
        paused: false,
        win: false,
        lose: false,
    })
    const velocity = useRef({
        x: 0,
        y: 0,
    }); // player movement handler
    const mapPosition = useRef({
        x: 100,
        y: 100,
    }); // veiwport
    const [time, setTime] = useState(0); // active interval

    // main interval (tusda filed orulah ystoi) zza lai2
    useEffect(() => {
        setTimeout(() => {
            // render
            console.log(time)
            if (time >= 0 && !game.current.paused) {
                setTime(time + 1);
            }
            if (time > 1000) {
                setTime(0);
                // mapData.objects.map((item, _index) => {
                //     if (item.food && !item.food) {
                //         item.food = true
                //     }
                // })
            }
            if (time % 50 === 0) {
                if (player.current.hunger >= 0) {
                    player.current.hunger--;
                }
                if (player.current.hunger <= 1 && player.current.health >= 0) {
                    player.current.health--;
                } else if (player.current.hunger > 30 && player.current.health <= 100) {
                    player.current.health++;
                }
            }
            if (player.current.health <= 0) {
                game.current.paused = true;
                game.current.lose = true;
                setTime(-10);
            }
            //
            mapData.objects.map((item, _index) => {
                if (item.hitBox) {
                    WallCollision(player.current, item)
                }
            })
            // hoolig tusad n array bolgoj oruulj irne ene funcig oorchilno
            for (let i=0; i < mapData.objects.length; i++) {
                if (Detect(player.current, mapData.objects[i].hitBox)) {
                    if (mapData.objects[i].food) {
                        player.current.text = "Press E"
                        player.current.foodId = i;
                        break;
                    }
                } else {
                    player.current.text = ""
                }
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
            mapData.objects.map((item, _index) => {
                item.x += velocity.current.x;
                item.y += velocity.current.y;
                if (item.hitBox) {
                    item.hitBox.x += velocity.current.x;
                    item.hitBox.y += velocity.current.y;
                }
            })
        }, 30);
    }, [time]);

    const handlePause = () => {
        if (game.current.paused) {
            game.current.paused = false;
            setTime(0);
        } else {
            game.current.paused = true;
            setTime(-10);
        }
    }

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
            case 27: // pause
                handlePause();
                break
            case 69: // pause
                if (player.current.text === "Press E" && player.current.foodId !== null) {
                    mapData.objects[player.current.foodId].food = false;
                    if (player.current.hunger <= 90) {
                        player.current.hunger += 10
                    } else {
                        player.current.hunger = 100;
                    }
                }
                break
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
                {mapData.objects.map((item, index) => {
                    return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} ahead={player.current.y + player.current.height - 25 < item.hitBox?.y} />
                })}

                {/* {mapData.objects.map((item, index) => {
                    return <HitBox x={item.hitBox.x} y={item.hitBox.y} width={item.hitBox.width} height={item.hitBox.height} image={item.hitBox.image} key={index} />
                })} */}

                <Object x={12} y={16} width={20} height={20} image={heartImg} ahead={true} />
                <HealthBar x={40} y={20} color="red" health={player.current.health} />
                <Object x={12} y={41} width={20} height={20} image={hungerImg} ahead={true} />
                <HealthBar x={40} y={45} color="brown" health={player.current.hunger} />
                <Player x={player.current.x} y={player.current.y} width={player.current.width} height={player.current.height} image={player.current.image} />
                {player.current.text && <Text x={player.current.x + 10} y={player.current.y - 30} size={25} color="white" >{player.current.text}</Text>}
            </World>
            {game.current.paused &&
                <Pause title={game.current.win ? "Win" : game.current.lose ? "Died" : "Paused"} end={game.current.win || game.current.lose ? true : false} pause={handlePause} />
            }
        </div>
    )
}