// check the number is power of 2 or not ?

const powerOfTwo = (num) => {
    let ans = false;
    for (let i = 1; i < num; i++) {
        if (2 ** i === num) {
            return !ans;
        }
    }
    return ans;
}

console.log(powerOfTwo(7))
console.log(powerOfTwo(64))
console.log(powerOfTwo(9))
console.log(powerOfTwo(256))