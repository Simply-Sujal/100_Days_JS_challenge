// write a function isEmptyObject that takes an object as input and says whether it is empty ot not ?


const isEmptyObject = (obj) => {
    // for (let key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //         return "It's not empty"
    //     }
    // }
    // return "It's empty"

    return Object.keys(obj).length < 1 ? "It's Empty" : "It is not empty"
}

console.log(isEmptyObject({ name: "vinod" }))
console.log(isEmptyObject({}))
console.log(isEmptyObject({ name: undefined }))
console.log(isEmptyObject({ name: null }))