function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
    //first check to see if the entered code and correct code are the same
    //then useing Date.parse() be able to parse and check if the exp date is before or equal to
    //the current date.
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')) //true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')) //false