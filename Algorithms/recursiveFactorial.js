function recursiveFactorial(num) {
    if (num <= 0) {
        return 1
    }
    console.log(num)
    return num * recursiveFactorial(num - 1)
}
console.log(recursiveFactorial(5))