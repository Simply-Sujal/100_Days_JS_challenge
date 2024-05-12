

// currency converter

const rates = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    INR: 82
}

const convertCurr = (amt, fc, tc) => {
    let amountInUSD = 0;
    if (fc != "USD") {
        amountInUSD = amt / rates[fc];
    } else {
        amountInUSD = amt;
    }

    let convertAmount = 0;
    if (tc != "USD") {
        convertAmount = amountInUSD * rates[tc];
    } else {
        convertAmount = amountInUSD;
    }

    return convertAmount;
}

console.log(convertCurr(100, "INR", "USD"))