// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr) {
    let sum = 0
    let sum2 = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    for (let j = arr.length - 1; j > 0; j--) {
        sum2 += arr[j]
        sum -= arr[j]
        if (sum == sum2) { return true }
    }
    return false
}

console.log(balancePoint([1, 2, 3, 4, 10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
console.log(balancePoint([1, 2, 3, 2, 1])) // FALSE
console.log(balancePoint([1, 2, 3, 1, 2, 3, 2, 1])) // FALSE
console.log(balancePoint([2, 2])) // TRUE

// ====================================================
// ====================================================

// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE INDEX
// WHERE THE SUM ON EITHER SIDE OF THE INDEX (PIVOT POINT) IS THE SAME
// THINK OF THE INDEX IN THE ARRAY AS THE POINT




function balanceIndex(arr) {
    let sum = 0
    let sum2 = 0
    if (arr.length < 3) { return false }
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i]
    }

    for (let j = arr.length - 2; j > 0; j--) {
        sum2 += arr[j + 1]
        sum -= arr[j]
        if (sum == sum2) { return true }
    }
    return false
}

console.log(balanceIndex([-2, 5, 7, 0, 3]))  // TRUE
console.log(balanceIndex([9, 9])) // FALSE
console.log(balanceIndex([4, 2, 2, 6])) // TRUE
console.log(balanceIndex([9, 1, 9])) // TRUE
console.log(balanceIndex([1, 8, 1, 2, 3, 4])) // TRUE