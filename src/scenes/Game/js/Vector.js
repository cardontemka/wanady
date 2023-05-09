export const Vector = (obj1, obj2) => {
    let angle = Math.atan2((obj1.y + obj1.height * 0.8) - (obj2.y + obj2.height / 2), (obj1.x + obj1.width / 2) - (obj2.x + obj2.width / 2));
    return angle;
}