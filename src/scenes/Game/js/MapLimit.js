export const MapLimit = (world, player) => {
    if (world.x >= 0) {
        player.now.left = false
    } else if (world.x + world.width <= 1000) {
        player.now.right = false
    }
    if (world.y >= 0) {
        player.now.up = false
    } else if (world.y + world.height <= 600) {
        player.now.down = false
    }
}