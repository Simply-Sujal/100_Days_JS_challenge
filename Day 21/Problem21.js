// write the code to calculate the mean , median and mode 

// This is the code for the mean 

const calculateMean = (arr) => {
    let sum = arr.reduce((accum, curr) => accum + curr, 0)
    return sum / arr.length;
}


console.log(calculateMean([1, 2, 3, 4, 5]));