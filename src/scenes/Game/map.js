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
            x: 1260, // pole
            y: -120,
            width: 100,
            height: 300,
            image: lightImg,
            hitBox: {
                width: 20,
                height: 10,
                x: 1300,
                y: 110,
            }
        },
    ],
    // herve sandal dr hun suuj bga esvel ymr negen obj dr oor obj davharlagdaj bga bol hitBox in y ees ih baih ystoi bh ystoi
    food: [
        {
            x: 700, // man
            y: 10,
            width: 300,
            height: 200,
            image: eatingImg,
            hitBox: {
                width: 30,
                height: 30,
                x: 835,
                y: 140,
            },
            attemps: 0,
            value: 30,
        },
        {
            x: 1100, // trash
            y: 60,
            width: 80,
            height: 120,
            image: trashImg,
            food: true,
            hitBox: {
                width: 40,
                height: 10,
                x: 1120,
                y: 110,
            },
            attemps: 0,
            value: 1,
        },
    ],
    people: [
        {
            x: 500,
            y: 10,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 60,
                height: 10,
                x: 570, // origin + 70
                y: 130, // origin + 120
            },
        },
    ],
    finishPlace: {
        x: 3000,
        y: 100,
        width: 100,
        height: 100,
        image: "https://static.vecteezy.com/system/resources/previews/009/397/874/original/grave-stone-clipart-design-illustration-free-png.png"
    },
}