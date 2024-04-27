// Write a function to convert string into camelcase And SnakeCase 

const toCamelCase = (str) => {
    str = str.trim().split(" ")
    console.log(str)

    str = str.map((curr, ind) => {
        if (ind === 0) {
            return curr
        } else {
            return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase()
        }
    })
    return str.join("")
}

console.log(toCamelCase("hello world thApa"))