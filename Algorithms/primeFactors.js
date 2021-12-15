// Question: How could you find all prime factors of a number?

// Answer: Run a while loop. start dividing by two and if not divisible increase divider until you are done.

function primeFactors(n) {
    var factors = [],
        divisor = 2;

    while (n > 2) {//check to see that num is greater than 2
        if (n % divisor == 0) { //if num divided by divisor = 2 then add it to factors
            factors.push(divisor);
            n = n / divisor; //number is = number divided by divisor
        }
        else {
            divisor++;
        }
    }
    return factors;
}

console.log(primeFactors(69))
console.log(primeFactors(15))