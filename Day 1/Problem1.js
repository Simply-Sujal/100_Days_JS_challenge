// Q1. words = ["Hello how are you all and I am Computer Science Engineering"]

// function findMaxCountWord(str) {
//     // base case 
//     if (str.trim().length === 0) {
//         return false;
//     }

//     words = str.split(" ");
//     words = words.sort((a, b) => b.length - a.length)
//     console.log("The length of the longest word is : ", words[0].length)
//     return words[0];
// }
function findMaxCountWord(str) {
    // base case 
    if (str.trim().length === 0) {
        return false;
    }

    words = str.split(" ");
    return words.reduce((accu, curr) => accu.length < curr.length ? curr : accu, "")
}

str = "Hello how are you all and I am Computer Science Engineering"
console.log(findMaxCountWord(str))

