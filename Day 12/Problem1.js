// Remove any duplicates elemets , returning a new array with only the unique elements.

const removeDuplicate = (arr) => {
    let newArr = [...new Set(arr)]
    // console.log(newArr)
    return newArr;
}

console.log(removeDuplicate([1, 2, 3, 4, 2, 2, 3, 4, 1]))
console.log(removeDuplicate([1, 5, 5, 5, 6, 3, 3, 4, 1]))