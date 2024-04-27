// reverse a string without using inbuilt function 


const reverseString = (str) => {
    let r_str = "";
    for (let i = str.length - 1; i >= 0; i--) {
        r_str += str[i];
    }
    return r_str;
}

console.log(reverseString("HELLO"));
console.log(reverseString("how are you ?"));