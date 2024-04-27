// Find out the maximum element in the array 


const findMax = (arr) => {
    // here the spread operator helps to spread the array into simple number format 

    // console.log(...arr)
    return Math.max(...arr)
}

console.log(findMax([7, 3, 5, 9, 11, 345]))

// console.log(findMax())