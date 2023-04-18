export const Detect = (obj1, obj2) => {
    if (obj1.x + obj1.width / 3 <= obj2.x + obj2.width && obj1.x + obj1.width - obj1.width / 3 >= obj2.x) {
        return true;
    }
    return false;
}