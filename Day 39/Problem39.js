// find the current age of a person


// 1. currentDate()
// 2. currentDate.year & birthday.year()
// 3. age = cuurYear - Birthyear 

const calcAge = (birthDate) => {
    let todayDate = new Date();
    birthDate = new Date(birthDate);

    let age = todayDate.getFullYear() - birthDate.getFullYear();
    // console.log(age)

    let monthDiff = todayDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || monthDiff === 0 && todayDate.getDate() < birthDate.getDate()) {
        age--;
    }

    return age;
}

// year - month - date
console.log(calcAge("2002-11-03"))