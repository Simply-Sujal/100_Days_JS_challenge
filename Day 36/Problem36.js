// convert object to array and vice versa


const obj = {
    name: "Sujal Timilsina",
    age: 22,
    city: "Pune"
}

// convert the object to an array of key value pairs.
// console.log(obj.toCharArray())
let entries = Object.entries(obj)
console.log(entries)
// console.log(entries.flat())
console.log("\n")

// convert array into object
let newObj = Object.fromEntries(entries)
console.log(newObj)