// write a recursive function called numberRangeRecursive that generates an array containing consecutive number from a and b


const numberRangeRecursive = (a, b, arr = []) => {
    if (a <= b) {
        arr.push(a);
        return numberRangeRecursive(a + 1, b, arr);
    }
    return arr;
}

console.log(numberRangeRecursive(0, 5))