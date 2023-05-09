import trashImg from "./images/trash.png"
import chairImg from "./images/streetChair.png"
import lightImg from "./images/streetLight.png"
import eatingImg from "./images/eatingMan.png"
import manWithGunImg from "./images/manWithGun.png"
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
        {
            x: 2000, // tree
            y: 400,
            width: 500,
            height: 600,
            image: "https://pngimg.com/d/tree_PNG92721.png",
            hitBox: {
                width: 30,
                height: 20,
                x: 2235,
                y: 930, // 400 + (600 - 70) = 930
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
            type: "shooter",
            damage: true,
            x: 100,
            y: 500,
            width: 200,
            height: 200,
            image: manWithGunImg,
            hitBox: {
                width: 20,
                height: 10,
                x: 190, // origin + 90
                y: 630, // origin + 130
            },
        },
        {
            type: "homeless",
            damage: true,
            x: 400,
            y: 500,
            width: 200,
            height: 200,
            image: "https://cdni.iconscout.com/illustration/premium/thumb/homeless-male-begging-money-2709888-2272470.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 490, // origin + 90
                y: 630, // origin + 130
            },
        },
        {
            type: "beater",
            damage: true,
            x: 1000,
            y: 500,
            width: 200,
            height: 200,
            image: "https://i.pinimg.com/originals/c8/88/0f/c8880fd46397ea368d85e1933c274ac0.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 1090, // origin + 90
                y: 630, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 1300,
            y: 10,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 1390, // origin + 90
                y: 140, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 1100,
            y: 100,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 1190, // origin + 90
                y: 230, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 1350,
            y: 400,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 1440, // origin + 90
                y: 530, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 1600,
            y: 300,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 1690, // origin + 90
                y: 430, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 2800,
            y: 200,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 2890, // origin + 90
                y: 330, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 2900,
            y: 280,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 2990, // origin + 90
                y: 410, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 3000,
            y: 230,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 3090, // origin + 90
                y: 360, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 2800,
            y: 0,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 2890, // origin + 90
                y: 130, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 2950,
            y: -100,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 3040, // origin + 90
                y: 30, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 3080,
            y: -80,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 3120, // origin + 90
                y: 50, // origin + 130
            },
        },
        {
            type: "thrower",
            damage: true,
            x: 3100,
            y: 0,
            width: 200,
            height: 200,
            image: "https://freepngimg.com/thumb/man/148289-standing-man-business-suit-png-free-photo.png",
            hitBox: {
                width: 20,
                height: 10,
                x: 3190, // origin + 90
                y: 130, // origin + 130
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