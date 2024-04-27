// Write a function that takes a number as input and returns the sum of its digits 

const sumOfDigits = (num) => {
    let temp = num;
    let sum = 0;
    while (temp != 0) {
        let rem = temp % 10;
        sum += rem;
        temp = Math.floor(temp / 10); // use Math.floor() to perform integer division
    }
    return sum;
}

// 2nd way 
const sOfDigits = (num) => {
    // first of all convert it into string and make sure it is in number format
    let arr = Array.from(String(num), Number)
    console.log(arr)
    return arr.reduce((acc, currval) => acc += currval, 0)
}

console.log(sumOfDigits(12345))
console.log(sOfDigits(34532))