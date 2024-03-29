export const Follow = (obj1, obj2) => {
    let angle = Math.atan2((obj1.y + obj1.height * 0.8) - (obj2.y + obj2.height / 2), (obj1.x + obj1.width / 2) - (obj2.x + obj2.width / 2));
    // let angle = Math.atan2(obj1.y - obj2.y, obj1.x - obj2.x);
    obj2.x += Math.cos(angle) * 3;
    obj2.y += Math.sin(angle) * 3;
    if (obj2.hitBox) {
        obj2.hitBox.x += Math.cos(angle) * 3;
        obj2.hitBox.y += Math.sin(angle) * 3;
    }
}