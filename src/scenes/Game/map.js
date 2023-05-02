import trashImg from "./images/trash.png"
import chairImg from "./images/streetChair.png"
import lightImg from "./images/streetLight.png"
import eatingImg from "./images/eatingMan.png"
export default {
    // hit box durem: height 10 bn. y deer anh bsn heightes 70 hassan hemjege nemne
    // ihenh tohioldold width ees 40 ig hasna. x dr 20 iig nemne
    objects: [
        {
            x: 700, // chair
            y: 10,
            width: 300,
            height: 200,
            image: chairImg,
            hitBox: {
                width: 260,
                height: 10,
                x: 720,
                y: 120,
            }
        },
        {
            x: 700, // man
            y: 10,
            width: 300,
            height: 200,
            image: eatingImg,
            hitBox: {
                width: 260,
                height: 10,
                x: 720,
                y: 120,
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
                height: 10,
                x: 1240,
                y: 130,
            }
        },
        {
            x: 1050, // trash
            y: 60,
            width: 80,
            height: 120,
            image: trashImg,
            food: true,
            hitBox: {
                width: 40,
                height: 10,
                x: 1070,
                y: 110,
            }
        },
    ],
    food: [
        {
            x: 1065,
            y: 110,
            width: 50,
            height: 50,
            attemps: 0,
            value: 1,
        },
        {
            x: 825,
            y: 140,
            width: 50,
            height: 50,
            attemps: 0,
            value: 30,
        },
    ]
}