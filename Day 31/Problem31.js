// wriet a function called simplePasswordValidator that takes a single parameter 

// criteria : 
// 1. password must contain one lowercase , one upperCase , and one digit 
// 2. it must be atleast 8 size 


const passwordValidate = (password) => {
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;
    for (let char of password) {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            hasUpperCase = true;
        } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            hasLowerCase = true;
        } else if (!isNaN(Number(char))) {
            hasNumber = true;
        }
    }

    if (!hasLowerCase || !hasUpperCase || !hasNumber || password.length < 8) {
        return false;
    }
    return true;
}

console.log(passwordValidate("helloWh8"))
console.log(passwordValidate("helloWh8ds3H"))
console.log(passwordValidate("hello"))