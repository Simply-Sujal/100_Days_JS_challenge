// using recursion find the factorial of a number 


const findFact = (num) => {
    if (num <= 1) {
        return 1;
    }

    return num * findFact(num - 1);
}

console.log(findFact(5));

