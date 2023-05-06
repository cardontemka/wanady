export const Detect = (obj1, obj2, minus) => {
    if (obj1.x + minus <= obj2.x + obj2.width && obj1.x + obj1.width - minus >= obj2.x && obj1.y + minus <= obj2.y + obj2.height && obj1.y + obj1.height - minus >= obj2.y) {
        return true;
    }
    return false;
}