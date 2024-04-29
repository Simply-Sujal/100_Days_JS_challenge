// write a function called repeatString that takes two arguements 

const repeatStr = (str, num) => {
    return num > 0 ? str.repeat(num) : str;

    // let newStr = "";
    // while (num > 0) {
    //     newStr += str;
    //     num--;
    // }
    // return newStr;
}

console.log(repeatStr("abc", 5));