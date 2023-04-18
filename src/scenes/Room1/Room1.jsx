import { useRef } from "react"
import { Template } from "../Template/Template";
import safeImg from "./images/safe.png"
import openedSafeImg from "./images/openedSafe.png"

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
            x: 1200, // table
            y: 330,
            width: 200,
            height: 150,
            image: "https://pngimg.com/d/table_PNG6990.png",
        },
        {
            x: 700, // sofa
            y: 300,
            width: 400,
            height: 200,
            image: "https://www.pngall.com/wp-content/uploads/2016/04/Sofa-Download-PNG.png",
        },
        {
            x: 1100, // art
            y: 200,
            width: 100,
            height: 100,
            image: "https://v1.imgix.net/imagecache/4/7/si-471864.jpg_ihcm-49.94_iwcm-50.00_fls-880229L.tif_fts-880229T.tif_mc-ffffff_fwcm-1.60_tmwcm-5.00_bmwcm-5.00_lmwcm-5.00_rmwcm-5.00_maxdim-1000_en_easyart___iar-1.jpg?ixlib=rails-4.3.1&auto=compress%2Cformat&nr=20&nrs=20&q=50",
        },
        {
            x: 850, // clock
            y: 100,
            width: 90,
            height: 90,
            image: "https://freepngimg.com/thumb/antique/132195-antique-clock-png-download-free.png",
        },
    ]);
    const puzzleObjects = useRef([
        {
            x: 1250, // safe
            y: 260,
            width: 100,
            height: 80,
            image: safeImg,
            done: false,
            doneImg: openedSafeImg,
            function: "SafeFunction",
            password: "0439",
        },
        {
            x: 600, // puzzle
            y: 240,
            width: 80,
            height: 80,
            image: "https://lpc.opengameart.org/sites/default/files/RTS_Crate.png",
            done: false,
            doneImg: "https://t3.ftcdn.net/jpg/00/71/63/98/360_F_71639848_tr28eMShxPZCCMLOypA17UJDXzOC447o.jpg",
            function: "SwitchPuzzle",
            password: "",
        },
    ]);
    return (
        <Template usefulItems={usefulItems.current} objects={objects.current} puzzleObjects={puzzleObjects.current} />
    )
}