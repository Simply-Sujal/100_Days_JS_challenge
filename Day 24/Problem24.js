// find the mod in the array


const findMode = (arr) => {
    arr.sort((a, b) => b - a);
    let maxNum = 0
    let mode;
    let counts = {}
    for (let ele of arr) {
        counts[ele] = (counts[ele] || 0) + 1;
        if (counts[ele] > maxNum) {
            maxNum = counts[ele]
            mode = ele;
        }
    }
    return mode;
}

console.log(findMode([1, 2, 2, 2, 3, 4, 5, 6]))