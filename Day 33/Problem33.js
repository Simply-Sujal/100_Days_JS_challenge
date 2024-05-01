// random hex color generator 



const randomHexColor = () => {
    // the below code will convert the number into string and then string will be converted into hexadecimal format
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
}


console.log(randomHexColor())