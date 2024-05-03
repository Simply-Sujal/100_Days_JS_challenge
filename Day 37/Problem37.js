// write the function to calculate to find out the simple interest 

const findSI = (p, r, t) => {
    const simpleIntrest = (p * r * t) / 100;
    return simpleIntrest;
}

console.log(findSI(1000, 5, 3))