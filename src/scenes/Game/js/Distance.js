export const Distance = (obj1, obj2) => {
    // return (Math.sqrt(((obj1.x - obj2.x) * (obj1.x - obj2.x)) + ((obj1.y - obj2.y) * (obj1.y - obj2.y))));
    return (Math.sqrt((((obj1.x + obj1.width / 2) - (obj2.x + obj2.width / 2)) * ((obj1.x + obj1.width / 2) - (obj2.x + obj2.width / 2))) + (((obj1.y + obj1.height / 2) - (obj2.y + obj2.height / 2)) * ((obj1.y + obj1.height / 2) - (obj2.y + obj2.height / 2)))));
}