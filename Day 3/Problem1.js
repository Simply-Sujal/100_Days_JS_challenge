// Qst. Find the occurence of a particular character 
// eg. word = "Mississipe",  char = "I" and output = 3


const findOccurences = (str, letter) => {
    const word = str.toLowerCase();
    const checkingChar = letter.toLowerCase();

    const ans = word.split("").reduce((accum, currChar) => {
        if (currChar === checkingChar) {
            accum++
        }
        return accum;
    }, 0)
    return ans;
}

console.log(findOccurences("Mississipe", "I"))