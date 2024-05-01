// how to remove duplicates from the array

const removeDuplicae = (arr) => {
    const letters = new Set(arr)
    return [...letters]
}


console.log(removeDuplicae([1, 2, 3, 4, 2, 2, 1, 3, 4, 1]))