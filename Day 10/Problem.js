// Here we have to find out wheteher the two array is equal or not 
// eg arr1[] = {1,2,3,4} must be equal to arr2[] = {1,2,3,4}



const arrEqualOrNot = (arr1, arr2) => {
    if (arr1.length !== arr1.length) {
        return false;
    }

    const ans = arr1.every((currVal, idx) => currVal === arr2[idx])
    return ans;
}

console.log(arrEqualOrNot([1, 2, 3, 4], [1, 2, 3, 4]))
console.log(arrEqualOrNot([1, 2, 3, 4], [1, 2, 10, 4]))
console.log(arrEqualOrNot([], []))