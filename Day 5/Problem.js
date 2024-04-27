// sort the array without using directly the sort function 

const letSort = (arr) => {
    return arr.sort((a, b) => a - b);
}


console.log(letSort([1100, 4, 89, 2, 8, 1]))