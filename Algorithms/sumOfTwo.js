// Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?

// Answer: Simplest thing in the world. double loop

function sumFinder(arr, sum) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) { return true }
        }
    }
    return false
}

console.log(sumFinder([6, 5, 3, 4, 1, 8, 6, 4, 10], 9))
console.log(sumFinder([6, 5, 3, 4, 1, 8, 6, 4, 10], 73))