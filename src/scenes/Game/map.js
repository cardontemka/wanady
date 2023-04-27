import trashImg from "./images/trash.png"
import chairImg from "./images/streetChair.png"
import lightImg from "./images/streetLight.png"
export default {
    // hit box durem: height 30 bn. y deer anh bsn heightes 80 hassan hemjege nemne
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
                height: 30,
                x: 720,
                y: 110,
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
    ]
}