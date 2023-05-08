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
import { CircleBar } from "./styles/Circle"
import { Distance } from "./js/Distance"
import { Follow } from "./js/Follow"
import { Vector } from "./js/Vector"

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
    const stones = useRef([]);
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
    const [timeHistory, setTimeHistory] = useState(0); // for pause

    // main interval (tusda filed orulah ystoi) zza lai2
    useEffect(() => {
        setTimeout(() => {
            // render
            // console.log(time)
            if (time >= 0 && !game.current.paused) {
                setTime(time + 1);
                setTimeHistory(time + 1);
            }
            if (time > 4000) {
                setTime(0);
                mapData.food.forEach((item, _index) => {
                    if (item.attemps >= item.value) {
                        item.attemps = 0;
                    }
                })
            }
            if (time % 50 === 10) {
                if (player.current.hunger >= 0) {
                    player.current.hunger--;
                }
                if (player.current.hunger <= 1 && player.current.health >= 0) {
                    player.current.health--;
                } else if (player.current.hunger > 30 && player.current.health <= 100) {
                    player.current.health += 3;
                }
            }
            // win
            if (Detect(player.current, mapData.finishPlace, 20)) {
                game.current.paused = true;
                game.current.win = true;
                setTime(-10);
            }

            // lose
            if (player.current.health <= 0) {
                game.current.paused = true;
                game.current.lose = true;
                setTime(-10);
            }
            //
            mapData.objects.forEach((item, index) => {
                if (item.hitBox && item.hitBox.x + item.hitBox.width > 0 && item.hitBox.y + item.hitBox.height > 0 && item.hitBox.x < 1000 && item.hitBox.y < 600) {
                    WallCollision(player.current, item)
                }
            })
            mapData.food.forEach((item, _index) => {
                if (item.hitBox && item.hitBox.x + item.hitBox.width > 0 && item.hitBox.y + item.hitBox.height > 0 && item.hitBox.x < 1000 && item.hitBox.y < 600) {
                    WallCollision(player.current, item)
                }
            })
            mapData.people.forEach((item, _index) => {
                if (item.hitBox && item.hitBox.x + item.hitBox.width > 0 && item.hitBox.y + item.hitBox.height > 0 && item.hitBox.x < 1000 && item.hitBox.y < 600) {
                    WallCollision(player.current, item)
                }
            })

            // console.log(Distance(player.current, mapData.finishPlace));

            // hoolig tusad n array bolgoj oruulj irne ene funcig oorchilno
            for (let i = 0; i < mapData.food.length; i++) {
                if (Detect(player.current, mapData.food[i].hitBox, 0)) {
                    if (mapData.food[i].attemps < mapData.food[i].value) {
                        player.current.text = "Press E"
                        player.current.foodId = i;
                        break;
                    } else {
                        player.current.text = ""
                    }
                } else {
                    if (mapData.food[i].attemps < mapData.food[i].value) {
                        mapData.food[i].attemps = 0;
                    }
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
            mapData.objects.forEach((item, _index) => {
                item.x += velocity.current.x;
                item.y += velocity.current.y;
                if (item.hitBox) {
                    item.hitBox.x += velocity.current.x;
                    item.hitBox.y += velocity.current.y;
                }
            })
            mapData.food.forEach((item, _index) => {
                item.x += velocity.current.x;
                item.y += velocity.current.y;
                if (item.hitBox) {
                    item.hitBox.x += velocity.current.x;
                    item.hitBox.y += velocity.current.y;
                }
            })
            mapData.people.forEach((item, _index) => {
                item.x += velocity.current.x;
                item.y += velocity.current.y;
                if (item.hitBox) {
                    item.hitBox.x += velocity.current.x;
                    item.hitBox.y += velocity.current.y;
                }
                if (item.type === "throw") {
                    let distance = Distance(player.current, item);
                    if (distance <= 400 && time % 50 === 10) {
                        throwStone(item);
                    }
                }
                if (item.type === "beat") {
                    if (Detect(player.current, item, 20) && time % 20 === 10) {
                        console.log("hit")
                        player.current.health -= 4;
                    }
                }
                // if (item.type === "beat") {
                //     let distance = Distance(player.current, item);
                //     if (distance <= 300 && distance >= 10) {
                //         Follow(player.current, item);
                //     }
                // }
            })
            stones.current.forEach((item, index) => {
                item.x += velocity.current.x + item.vx;
                item.y += velocity.current.y + item.vy;
                item.first.x += velocity.current.x;
                item.first.y += velocity.current.y;
                if (Detect(player.current, item, 30)) {
                    player.current.health -= 5;
                    stones.current.splice(index, 1);
                }
                if (Math.abs(item.x - item.first.x) + Math.abs(item.y - item.first.y) >= 500) {
                    stones.current.splice(index, 1);
                }
            })
            mapData.finishPlace.x += velocity.current.x;
            mapData.finishPlace.y += velocity.current.y;
        }, 30);
    }, [time]);

    const handlePause = () => {
        if (game.current.paused && !game.current.win && !game.current.lose) {
            game.current.paused = false;
            setTime(timeHistory);
        } else {
            game.current.paused = true;
            setTime(-10);
        }
    }

    const throwStone = (obj) => {
        stones.current.push({
            x: obj.x + obj.width * 0.5,
            y: obj.y + obj.height * 0.3,
            first: {
                x: obj.x + obj.width * 0.5,
                y: obj.y + obj.height * 0.3,
            },
            width: 20,
            height: 20,
            image: "https://www.pngall.com/wp-content/uploads/5/Stone-PNG-High-Quality-Image.png",
            vx: Math.cos(Vector(player.current, obj)) * 8,
            vy: Math.sin(Vector(player.current, obj)) * 8,
        })
    }

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
            case 27: // pause
                handlePause();
                break
            case 69: // eat
                if (player.current.text === "Press E" && player.current.foodId !== null) {
                    mapData.food[player.current.foodId].attemps++;
                    if (mapData.food[player.current.foodId].attemps === mapData.food[player.current.foodId].value) {
                        if (player.current.hunger <= 80) {
                            player.current.hunger += 20;
                        } else {
                            player.current.hunger = 100;
                        }
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

    // console.log(player.current.y + player.current.height - 25 , mapData.food[0].hitBox?.y)
    // console.log(mapData.food[0].hitBox.y)
    // console.log(mapData.finishPlace)

    return (
        <div className={styles.contain}>
            <World image="https://img.freepik.com/free-vector/seamless-green-grass-pattern_1284-52275.jpg" size={150} x={mapPosition.current.x} y={mapPosition.current.y}>
                {mapData.objects.map((item, index) => {
                    if (item.x < 1600 && item.x + item.width > -600 && item.y < 1200 && item.y + item.height > -600) {
                        return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} ahead={player.current.y + player.current.height - 25 < item.hitBox?.y} opacity={item.y < player.current.y && item.y + item.height > 610 && item.x + 150 < player.current.x + player.current.width && item.x + item.width - 150 > player.current.x ? 0.5 : 1} />
                    }
                })}

                {mapData.food.map((item, index) => {
                    if (item.x < 1600 && item.x + item.width > -600 && item.y < 1200 && item.y + item.height > -600) {
                        return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} ahead={player.current.y + player.current.height - 25 < item.hitBox?.y} />
                    }
                })}

                {mapData.people.map((item, index) => {
                    if (item.x < 1600 && item.x + item.width > -600 && item.y < 1200 && item.y + item.height > -600) {
                        return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} ahead={player.current.y + player.current.height - 25 < item.hitBox?.y} />
                    }
                })}

                {stones.current.map((item, index) => {
                    if (item.x < 1600 && item.x + item.width > -600 && item.y < 1200 && item.y + item.height > -600) {
                        return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} ahead={true} />
                    }
                })}

                <Object x={mapData.finishPlace.x} y={mapData.finishPlace.y} width={mapData.finishPlace.width} height={mapData.finishPlace.height} image={mapData.finishPlace.image} ahead={player.current.y + player.current.height - 25 < mapData.finishPlace.hitBox?.y} />

                {/* {mapData.people.map((item, index) => {
                    return <HitBox x={item.hitBox.x} y={item.hitBox.y} width={item.hitBox.width} height={item.hitBox.height} key={index} />
                })} */}

                {/* {mapData.objects.map((item, index) => {
                    return <HitBox x={item.hitBox.x} y={item.hitBox.y} width={item.hitBox.width} height={item.hitBox.height} image={item.hitBox.image} key={index} />
                })} */}

                <Object x={12} y={16} width={20} height={20} image={heartImg} ahead={true} />
                <HealthBar x={40} y={20} color="red" health={player.current.health} />
                <Object x={12} y={41} width={20} height={20} image={hungerImg} ahead={true} />
                <HealthBar x={40} y={45} color="brown" health={player.current.hunger} />
                <Player x={player.current.x} y={player.current.y} width={player.current.width} height={player.current.height} image={player.current.image} left={player.current.last.left} right={player.current.last.right} up={player.current.last.up} down={player.current.last.down} />
                {player.current.text && <Text x={player.current.x + 10} y={player.current.y - 30} size={25} color="white" >{player.current.text}</Text>}
                {player.current.text && <CircleBar x={player.current.x + player.current.width / 2 - 15} y={player.current.y} width={30} height={30} color="rgb(255, 166, 0)" fill={mapData.food[player.current.foodId].attemps / mapData.food[player.current.foodId].value * 360}  ></CircleBar>}
            </World>
            {game.current.paused &&
                <Pause title={game.current.win ? "Win" : game.current.lose ? "Died" : "Paused"} end={game.current.win || game.current.lose ? true : false} pause={handlePause} />
            }
        </div>
    )
}