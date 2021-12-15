function isPrime(num) {
    var divi = 3,
        limit = Math.sqrt(num) //function returns the square root of a number
    //check simple cases
    if (num == 2 || num == 3)
        return true;
    if (num % 2 == 0)
        return false;

    while (divi <= limit) {
        if (num % divi == 0)
            return false;
        else
            divi += 2
        //after 3 i can increase by 2. if a number 
        //is divisible by any even number, it will be divisible by 2.
    }
    return true;
}

console.log(isPrime(137))
//   = true
console.log(isPrime(237))
//   = false