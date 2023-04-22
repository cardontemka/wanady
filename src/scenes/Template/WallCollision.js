export const WallCollision = (player, brick) => {
    if (player.y <= brick.y + brick.height && player.y + player.height >= brick.y && player.x <= brick.x + brick.width && player.x + player.width >= brick.x) {
        if (player.y <= brick.y + brick.height && player.y >= brick.y + brick.height - 10 && player.x <= brick.x + brick.width && player.x + player.width >= brick.x) {
            console.log("up")
            player.now.up = false
        } else if (player.y + player.height >= brick.y && player.y + player.height <= brick.y + 10 && player.x <= brick.x + brick.width && player.x + player.width >= brick.x) {
            console.log("down")
            player.now.down = false
        } else if (player.x <= brick.x + brick.width && player.x >= brick.x + brick.width - 10 && player.y <= brick.y + brick.height && player.y + player.height >= brick.y) {
            console.log("left")
            player.now.left = false
        } else if (player.x + player.width >= brick.x && player.x + player.width <= brick.x + 10 && player.y <= brick.y + brick.height && player.y + player.height >= brick.y) {
            console.log("right")
            player.now.right = false
        }
    }
    // if (player.y <= brick.y + brick.height && player.y + player.height >= brick.y && player.x <= brick.x + brick.width && player.x + player.width >= brick.x) {
    //     if (player.y <= brick.y + brick.height && player.x <= brick.x + brick.width && player.x + player.width >= brick.x) {
    //         console.log("up")
    //         player.now.up = false
    //     } else if (player.y + player.height >= brick.y && player.x <= brick.x + brick.width && player.x + player.width >= brick.x) {
    //         console.log("down")
    //         player.now.down = false
    //     } else if (player.x <= brick.x + brick.width && player.y <= brick.y + brick.height && player.y + player.height >= brick.y) {
    //         console.log("left")
    //         player.now.left = false
    //     } else if (player.x + player.width >= brick.x && player.y <= brick.y + brick.height && player.y + player.height >= brick.y) {
    //         console.log("right")
    //         player.now.right = false
    //     }
    // }
    console.log("no")
}