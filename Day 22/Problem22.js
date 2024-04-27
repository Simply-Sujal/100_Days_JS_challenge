// Today we are going to calculate the median 

// Median  : 
// 1. sort the array in ascending order 
// 2. if the array has an odd number od leements the median is the middle element 
// 3. if the array has an even number then the middle one will be the median for the array 

const calcMedian = (arr) => {

    arr.sort((a, b) => a - b);
    let len = arr.length;
    let midElem = Math.floor(len / 2);

    if (len % 2 === 0) {
        return (arr[midElem] + arr[midElem - 1]) / 2;
    } else {
        return arr[midElem];
    }

}


console.log(calcMedian([5, 3, 9, 1, 7]));
console.log(calcMedian([2, 4, 6, 8]));
// console.log(calcMedian([4, 6, 2, 8, 6]));

