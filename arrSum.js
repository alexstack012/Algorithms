/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x) {
    let sum = 0
    let numberArray = []
    for (let i = 0; i < x.length; i++) { numberArray.push(parseInt(x[i])) }
    for (let z = 0; z < numberArray.length; z++) { sum += numberArray[z] }
    return sum
}

function sumMix2(x) {
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}

function sumMixRecurv(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}

console.log(sumMix([9, 3, '7', '3']))
console.log(sumMix2([9, 3, '7', '3']))
console.log(sumMixRecurv([9, 3, '7', '3']))
console.log("/-------------------------------/")
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(sumMix2(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(sumMixRecurv(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log("/-------------------------------/")
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']))
console.log(sumMix2(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']))
console.log(sumMixRecurv(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']))







