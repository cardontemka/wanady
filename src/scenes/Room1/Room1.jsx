import { useRef } from "react"
import { Template } from "../Template/Template";
import trashImg from "./images/trash.png"
import chairImg from "./images/streetChair.png"
import lightImg from "./images/streetLight.png"

export const Room1 = () => {
    const usefulItems = useRef([
        {
            x: 620,
            y: 20,
            width: 40,
            height: 40,
            name: "lol",
            image: "https://i.pinimg.com/originals/d5/d0/92/d5d0925acd02c42a97941abb8b6984a9.jpg",
            useFor: 0,
            exist: true,
        },
    ]);
    // hit box durem: height 30 bn. y deer anh bsn heightes 80 hassan hemjege nemne
    // ihenh tohioldold width ees 40 ig hasna. x dr 20 iig nemne
    const objects = useRef([
        {
            x: 700, // chair
            y: 10,
            width: 300,
            height: 200,
            image: chairImg,
            hitBox: {
                width: 260,
                height: 30,
                x: 720,
                y: 130, // 200 (height) - 80 = 120, 10 (y) + 120 = 130
            }
        },
        {
            x: 1200, // pole
            y: -100,
            width: 100,
            height: 300,
            image: lightImg,
            hitBox: {
                width: 20,
                height: 30,
                x: 1240,
                y: 120,
            }
        },
        {
            x: 1050, // trash
            y: 60,
            width: 80,
            height: 120,
            image: trashImg,
            hitBox: {
                width: 40,
                height: 30,
                x: 1070,
                y: 100,
            }
        },
    ]);
    // const puzzleObjects = useRef([
    //     {
    //         x: 1250, // safe
    //         y: 260,
    //         width: 100,
    //         height: 80,
    //         image: safeImg,
    //         done: false,
    //         doneImg: openedSafeImg,
    //         function: "SafeFunction",
    //         password: "0439",
    //     },
    //     {
    //         x: 600, // puzzle
    //         y: 240,
    //         width: 80,
    //         height: 80,
    //         image: "https://lpc.opengameart.org/sites/default/files/RTS_Crate.png",
    //         done: false,
    //         doneImg: "https://t3.ftcdn.net/jpg/00/71/63/98/360_F_71639848_tr28eMShxPZCCMLOypA17UJDXzOC447o.jpg",
    //         function: "SwitchPuzzle",
    //         password: "",
    //     },
    // ]);
    return (
        <Template usefulItems={usefulItems.current} objects={objects.current} />
    )
}