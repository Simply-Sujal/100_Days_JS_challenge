// HashTag Generator 
// you are required to implement a function generateHash that generates a hah tag from a given input string.The hash tag should be constructed as follows : 


// const approach1GenerateHash = (str) => {
//     if (str.length > 280 || str.trim().length === 0) {
//         return false;
//     }
//     str = str.split(" ")
//     str = str.map((currElem) =>
//         currElem.replace(currElem[0], currElem[0].toUpperCase())
//     );
//     str = `#${str.join("")}`;
//     // console.log(str)
//     return str;
// }


const generateHash = (str) => {
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }
    str = str.split(" ")
    str = str.map((currElem) =>
        currElem.charAt(0).toUpperCase() + currElem.slice(1)
    );
    str = `#${str.join("")}`;
    // console.log(str)
    return str;
}



console.log(generateHash("my name is sujal kumar"))
// o/p : "#MyNameIsSujalKumarTimilsina"