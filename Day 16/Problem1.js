// write a function to find the minimum among the array which you passed 

// Approac 1
const findMin = (num) => {
    // num = num.sort((a, b) => {
    //     if (a < b) return -1;
    // })
    // return num[0]
    if (num.length === 0) return "Array is empty"
    return Math.min(...num)
}

console.log(findMin([1, 2, 3, 4, 5]))
console.log(findMin([1, -2, -9, 4, 5]))
console.log(findMin([4, 7, 3, 2, 8, 7, 3]))
console.log(findMin([]))