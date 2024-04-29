// find the fibonacci number 


const findFibbo = (num) => {
    // base case
    if (num == 0 || num == 1) {
        return num;
    }

    return findFibbo(num - 1) + findFibbo(num - 2);
}


console.log(findFibbo(5))