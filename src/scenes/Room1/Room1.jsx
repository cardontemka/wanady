import { useRef } from "react"
import { Template } from "../Template/Template";
import trashImg from "./images/trash.png"
import chairImg from "./images/streetChair.png"

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
    const objects = useRef([
        {
            x: 700, // chair
            y: 10,
            width: 400,
            height: 200,
            image: chairImg,
        },
        {
            x: 1200, // pole
            y: -300,
            width: 300,
            height: 800,
            image: "https://pngimg.com/d/street_light_PNG11511.png",
        },
        {
            x: 1050, // trash
            y: 110,
            width: 150,
            height: 200,
            image: trashImg,
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