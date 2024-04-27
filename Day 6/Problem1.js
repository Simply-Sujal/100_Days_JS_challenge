// Check the string is palindrome or not 



const checkPalind = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    let strChange = str.split("").reverse().join("");
    console.log(strChange);
    return strChange == str ? true : false;
}

console.log(checkPalind("Hola bois , how you guys are doing"))
console.log(checkPalind("sammas"));