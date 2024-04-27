// Q1. Write a fucntion called checktriangle that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the types of triangle : "equivalent" , "isosceles" , or "scalene"


const checkTriangleType = (side1, side2, side3) => {
    if (side1 === side2 && side2 === side3) {
        return "Equilateral Triangle"
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles Triangle"
    }
    return "Scalene"
}

console.log(checkTriangleType(3, 3, 3))
console.log(checkTriangleType(3, 4, 3))
console.log(checkTriangleType(5, 8, 6))