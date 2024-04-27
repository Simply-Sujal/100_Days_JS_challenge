// Write a function t calculate the sum fo squares of all elements in an Array. For example fiven the array [1,2,3]  the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14

// approach 1
// const sumOfSquares = (num) => {
//     let sum = 0;
//     for (let ele of num) {
//         sum = sum + ele * ele;
//     }
//     return sum;
// }

// approach 2 :
const sumOfSquares = (num) => {
    return num.reduce((accum, curr) => (accum = accum + curr * curr), 0)
}

console.log(sumOfSquares([1, 2, 3, 4]))