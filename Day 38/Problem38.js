// day 38 : write a function to calculateDaysBetweenDates that calculates the number of days between two dates. The dates will be provides in the format "YYYY-MM-DD"

// hint 
// days : 24 * 60 * 60 * 1000

const calculateDaysBetweenDates = (d1, d2) => {
    let Date1 = new Date(d1)
    let Date2 = new Date(d2)

    let diff = Math.abs(Date2 - Date1);
    return diff / (24 * 60 * 60 * 1000)
}
console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31"));