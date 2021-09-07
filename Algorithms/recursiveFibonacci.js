// function fibArray(size) {
//     var fibArr = [0, 1]
//     for (var i = 2; i < size; ++i)
//         fibArr.push(fibArr[i - 1] + fibArr[i - 2])
//     return fibArr;
// }

// var testArray = fibArray(10)
// console.log(testArray)


function recursiveFibonacci(num) {
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
    }
}
console.log(recursiveFibonacci(10))