// write a function to if a gioven string starts with a specific substring or not 


const startsWith = (st1, st2) => {
    const myArr = st1.split(" ");
    let firstString = myArr[0].toLowerCase();
    if (firstString === st2.toLowerCase()) {
        return true;
    }
    return false;

    // return st1.toLowerCase().startsWith(st2.toLowerCase());
}


console.log(startsWith("hey Hello World", "HEY"));
console.log(startsWith("Hello world", "World"));