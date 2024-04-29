// write a function called truncate string that takes two parameters 


const truncateString = (str, num) => {
    if (num <= 0) {
        return str;
    }
    else if (str.length > num) {
        return str.slice(0, num).concat("...")
    }
}

console.log(truncateString("A-task given to a worker", 4))

