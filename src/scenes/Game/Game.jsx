import { useEffect, useRef, useState } from "react"
import mapData from "./map"
import { Detect } from "./js/Detect"
import styles from "./styles/Contain.module.css"
import { Bull, HitBox, Object } from "./styles/Objects"
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
import { MapLimit } from "./js/MapLimit"

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
    const world = useRef({
        x: -5000,
        y: -2000,
        width: 30000,
        height: 10000,
    })
    const stones = useRef([]);
    const bulls = useRef([]);
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

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    useEffect(() => {
        for (let i = 0; i <= 45; i++) {
            for (let q = 0; q <= 145; q++) {
                if (i > 0 && i < 45) {
                    if (q === 0 || q === 145) {
                        mapData.objects.push({ x: q * 200 - 5000, y: i * 200 - 2000, width: 500, height: 600, image: "https://pngimg.com/d/tree_PNG92721.png", hitBox: {x: q * 200 - 4765, y: i * 200 - 1470, width: 30, height: 20}});
                    }
                } else if (i === 0) {
                    mapData.objects.push({ x: q * 200 - 5000, y: i * 200 - 2000, width: 500, height: 600, image: "https://pngimg.com/d/tree_PNG92721.png", hitBox: {x: q * 200 - 4765, y: i * 200 - 1470, width: 30, height: 20}});
                } else if (i === 45) {
                    mapData.objects.push({ x: q * 200 - 5000, y: i * 200 - 2000, width: 500, height: 600, image: "https://pngimg.com/d/tree_PNG92721.png", hitBox: {x: q * 200 - 4765, y: i * 200 - 1470, width: 30, height: 20}});
                }
            }
        }
        for (let i = 0; i <= 45; i++) {
            for (let q = 0; q <= 145; q++) {
                if (i > 0 && i < 45) {
                    if (q === 0 || q === 145) {
                        mapData.objects.push({ x: q * 200 - 4700, y: i * 200 - 1800, width: 500, height: 600, image: "https://pngimg.com/d/tree_PNG92721.png", hitBox: {x: q * 200 - 4465, y: i * 200 - 1270, width: 30, height: 20}});
                    }
                } else if (i === 0) {
                    mapData.objects.push({ x: q * 200 - 4700, y: i * 200 - 1800, width: 500, height: 600, image: "https://pngimg.com/d/tree_PNG92721.png", hitBox: {x: q * 200 - 4465, y: i * 200 - 1270, width: 30, height: 20}});
                } else if (i === 45) {
                    mapData.objects.push({ x: q * 200 - 4700, y: i * 200 - 1800, width: 500, height: 600, image: "https://pngimg.com/d/tree_PNG92721.png", hitBox: {x: q * 200 - 4465, y: i * 200 - 1270, width: 30, height: 20}});
                }
            }
        }
    }, []);

    // useEffect(() => {
    //     let r = 0;
    //     let x;
    //     let y;
    //     while (r < 50) {
    //         r++;
    //         x = getRndInteger(2000, 5000);
    //         y = getRndInteger(2000, 5000);
    //         mapData.objects.push({
    //             damage: true,
    //             x: x,
    //             y: y,
    //             width: 500,
    //             height: 600,
    //             image: "https://pngimg.com/d/tree_PNG92721.png",
    //             hitBox: {
    //                 width: 30,
    //                 height: 20,
    //                 x: x + 235, // + 235
    //                 y: y + 530, // + 530
    //             },
    //         })
    //     }
    // }, []);

    // useEffect(() => {
    //     let r = 0;
    //     let x;
    //     let y;
    //     while (r < 10) {
    //         r++;
    //         x = getRndInteger(2800, 3200);
    //         y = getRndInteger(-100, 200);
    //         mapData.people.push({
    //             type: r % 2 === 0 ? "thrower" : "beater",
    //             damage: true,
    //             x: x,
    //             y: y,
    //             width: 500,
    //             height: 200,
    //             image: r % 2 === 0 ? "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png" : "https://i.pinimg.com/originals/c8/88/0f/c8880fd46397ea368d85e1933c274ac0.png",
    //             hitBox: {
    //                 width: 20,
    //                 height: 10,
    //                 x: x + 90, // origin + 90
    //                 y: y + 130, // origin + 130
    //             },
    //         })
    //     }
    // }, []);

    useEffect(() => {
        let r = 0;
        while (r < 6) {
            r++;
            mapData.people.push({
                type: "shooter",
                damage: true,
                x: 2800,
                y: -200 + (100 * r),
                width: 500,
                height: 200,
                image: "https://purepng.com/public/uploads/large/playerunknowns-battlegrounds-man-with-gun-pubg-u4n.png",
                hitBox: {
                    width: 20,
                    height: 10,
                    x: 2800 + 90, // origin + 90
                    y: -200 + (100 * r) + 130, // origin + 130
                },
            })
        }
    }, []);

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
            mapData.objects.forEach((item, _index) => {
                if (item.hitBox && item.hitBox.x + item.hitBox.width > -100 && item.hitBox.y + item.hitBox.height > -100 && item.hitBox.x < 1100 && item.hitBox.y < 700) {
                    WallCollision(player.current, item)
                }
            })
            mapData.food.forEach((item, _index) => {
                if (item.hitBox && item.hitBox.x + item.hitBox.width > -100 && item.hitBox.y + item.hitBox.height > -100 && item.hitBox.x < 1100 && item.hitBox.y < 700) {
                    WallCollision(player.current, item)
                }
            })
            mapData.people.forEach((item, _index) => {
                if (item.hitBox && item.hitBox.x + item.hitBox.width > -100 && item.hitBox.y + item.hitBox.height > -100 && item.hitBox.x < 1100 && item.hitBox.y < 700) {
                    WallCollision(player.current, item)
                }
            })

            MapLimit(world.current, player.current);

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
                if (item.type === "thrower") {
                    let distance = Distance(player.current, item);
                    if (distance <= 400 && item.damage) {
                        shoot(stones ,item, 20, 20, 8, "https://www.pngall.com/wp-content/uploads/5/Stone-PNG-High-Quality-Image.png");
                        item.damage = false;
                        setTimeout(() => {
                            item.damage = true;
                        }, 1500);
                    }
                    // if (distance <= 400 && time % 50 === 10) {
                    //     throwStone(item);
                    // }
                }
                if (item.type === "shooter") {
                    let distance = Distance(player.current, item);
                    if (distance <= 400 && item.damage) {
                        shoot(bulls, item, 15, 15, 20, "https://freepngimg.com/save/21882-bullet/1024x768");
                        item.damage = false;
                        setTimeout(() => {
                            item.damage = true;
                        }, 3000);
                    }
                }
                if (item.type === "beater") {
                    if (Detect(player.current, item, 40) && item.damage) {
                        player.current.health -= 4;
                        item.damage = false;
                        setTimeout(() => {
                            item.damage = true;
                        }, 1000);
                    }
                }
                if (item.type === "homeless") {
                    let distance = Distance(player.current, item);
                    if (distance <= 500) {
                        if (distance >= 50) {
                            Follow(player.current, item);
                            // mapData.objects.forEach((obj, _index) => {
                            //     if (obj.hitBox && obj.hitBox.x + obj.hitBox.width > -100 && obj.hitBox.y + obj.hitBox.height > -100 && obj.hitBox.x < 1100 && obj.hitBox.y < 700) {
                            //         if (!Detect(player.current, obj)) {
                            //         }
                            //     }
                            // })
                        }
                        if (Detect(player.current, item, 50) && item.damage) {
                            player.current.health -= 6;
                            item.damage = false;
                            setTimeout(() => {
                                item.damage = true;
                            }, 1000);
                        }
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
            bulls.current.forEach((item, index) => {
                item.x += velocity.current.x + item.vx;
                item.y += velocity.current.y + item.vy;
                item.first.x += velocity.current.x;
                item.first.y += velocity.current.y;
                if (Detect(player.current, item, 30)) {
                    player.current.health -= 20;
                    bulls.current.splice(index, 1);
                }
                if (Math.abs(item.x - item.first.x) + Math.abs(item.y - item.first.y) >= 800) {
                    bulls.current.splice(index, 1);
                }
            })
            mapData.finishPlace.x += velocity.current.x;
            mapData.finishPlace.y += velocity.current.y;
            //
            world.current.x += velocity.current.x;
            world.current.y += velocity.current.y;
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

    const shoot = (material, obj, width, height, speed, image) => {
        material.current.push({
            x: obj.x + obj.width * 0.5,
            y: obj.y + obj.height * 0.3,
            first: {
                x: obj.x + obj.width * 0.5,
                y: obj.y + obj.height * 0.3,
            },
            width: width,
            height: height,
            image: image,
            vx: Math.cos(Vector(player.current, obj)) * speed,
            vy: Math.sin(Vector(player.current, obj)) * speed,
            angle: Vector(player.current, obj) * 180 / Math.PI,
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
    console.log(world.current.x)
    console.log(world.current.x + world.current.width)
    console.log(world.current.y)
    console.log(world.current.y + world.current.height)

    return (
        <div className={styles.contain}>
            <World image="https://img.freepik.com/free-vector/seamless-green-grass-pattern_1284-52275.jpg" size={150} x={mapPosition.current.x} y={mapPosition.current.y}>
                {/* <HitBox x={world.current.x} y={world.current.y} width={world.current.width} height={world.current.height} /> */}

                {mapData.objects.map((item, index) => {
                    if (item.x < 1600 && item.x + item.width > -600 && item.y < 1200 && item.y + item.height > -600) {
                        return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} ahead={player.current.y + player.current.height - 25 < item.hitBox?.y} opacity={item.y < player.current.y && item.y + item.height > 500 && item.x + 150 < player.current.x + player.current.width && item.x + item.width - 150 > player.current.x ? 0.3 : 1} />
                    } return <></>
                })}

                {mapData.food.map((item, index) => {
                    if (item.x < 1600 && item.x + item.width > -600 && item.y < 1200 && item.y + item.height > -600) {
                        return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} ahead={player.current.y + player.current.height - 25 < item.hitBox?.y} />
                    } return <></>
                })}

                {mapData.people.map((item, index) => {
                    if (item.x < 1600 && item.x + item.width > -600 && item.y < 1200 && item.y + item.height > -600) {
                        return <Object x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} ahead={player.current.y + player.current.height - 25 < item.hitBox?.y} />
                    } return <></>
                })}

                {stones.current.map((item, index) => {
                    if (item.x < 1600 && item.x + item.width > -600 && item.y < 1200 && item.y + item.height > -600) {
                        return <Bull x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} angle={item.angle} />
                    } return <></>
                })}

                {bulls.current.map((item, index) => {
                    if (item.x < 1600 && item.x + item.width > -600 && item.y < 1200 && item.y + item.height > -600) {
                        return <Bull x={item.x} y={item.y} width={item.width} height={item.height} image={item.image} key={index} angle={item.angle} />
                    } return <></>
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