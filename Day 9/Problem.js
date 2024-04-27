// calculate the average that takes an array as a input and return the average of those number 


const averageOfNum = (arr) => {
    let total = arr.reduce((accum, curr) => accum + curr, 0)
    return total / arr.length;
}

console.log(averageOfNum([4, 2, 7, 8, 9, 10]))