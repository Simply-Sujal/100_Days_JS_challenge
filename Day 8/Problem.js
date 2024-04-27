// How to find the factorial of the number 

// using simple loop
const findfact = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

// using recursion 
const findFactorial = (num) => {
    if (num == 0 || num == 1) {
        return 1;
    }

    return findFactorial(num - 1) * num;
}

console.log(findFactorial(5));
console.log(findfact(6));