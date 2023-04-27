export const WallCollision = (player, brick) => {
    if (player.y + 10 <= brick.hitBox.y + brick.hitBox.height && player.y >= brick.hitBox.y + brick.hitBox.height - 20 && player.x + 20 <= brick.hitBox.x + brick.hitBox.width && player.x + player.width - 20 >= brick.hitBox.x) {
        player.now.up = false
    } else if (player.y + player.height - 10 >= brick.hitBox.y && player.y + player.height <= brick.hitBox.y + 20 && player.x + 20 <= brick.hitBox.x + brick.hitBox.width && player.x + player.width - 20 >= brick.hitBox.x) {
        player.now.down = false
    } else if (player.x + 10 <= brick.hitBox.x + brick.hitBox.width && player.x >= brick.hitBox.x + brick.hitBox.width - 20 && player.y + 20 <= brick.hitBox.y + brick.hitBox.height && player.y + player.height - 20 >= brick.hitBox.y) {
        player.now.left = false
    } else if (player.x + player.width - 10 >= brick.hitBox.x && player.x + player.width <= brick.hitBox.x + 20 && player.y + 20 <= brick.hitBox.y + brick.hitBox.height && player.y + player.height - 20 >= brick.hitBox.y) {
        player.now.right = false
    }
}