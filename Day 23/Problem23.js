// find the mod in the array

let counts = {}
const findMode = (arr) => {
    for (let ele of arr) {
        counts[ele] = (counts[ele] || 0) + 1;
    }
    return counts;
}

console.log(findMode([1, 2, 2, 2, 3, 4, 5, 6]))