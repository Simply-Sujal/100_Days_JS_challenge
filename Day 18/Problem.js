// Write a function to check if a character is uppercase or lowercase 

const isUpperCase = (char) => {
    // if (char.charCodeAt(0) >= 65 && char.charCodeAt(97) <= 90) {
    //     return true
    // }
    // return false;

    return char === char.toUpperCase();
}


console.log(isUpperCase("H"));
console.log("h");