// write a function called numberRange that generates an array containing consecutive numbers from a to b

const numberRange = (a, b) => {
    let arr = []
    while (a <= b) {
        arr.push(a)
        a++;
    }
    return arr;
}

console.log(numberRange(0, 5))
console.log(numberRange(3, 7))
console.log(numberRange(-2, 2))

