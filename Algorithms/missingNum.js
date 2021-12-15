// // Find the missing number in a given integer array

// let arr = [0,1,3,4,5,7,8]; // Missing 2,6
// let arr = [0, 1, 3, 4, 5, 7, 8, 9, 11]; // Missing 2,6,10
let arr = [0, 1, 5, 6, 9, 10, 11, 12, 14, 15] //missing 2,3,7,8,13
let arr2 = [5, 2, 6, 1, 3]//missing 4
const missingNum = (arr) => {
    let missing = []
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i + 1] - arr[i]) > 1) {
            missing.push(arr[i + 1] - arr[1]);
            //add for loop to check if the next few integers are missing as well?
        }
    }
    return missing
}
console.log(missingNum(arr))

function missNum(arr2) {
    var n = arr2.length + 1,
        sum = 0,
        expectedSum = n * (n + 1) / 2;

    for (var i = 0, len = arr2.length; i < len; i++) {
        sum += arr2[i];
    }

    return expectedSum - sum;
}

console.log(missNum(arr2))

// const zenWay = (arr) => {
//     let num = arr[0] + 1;
//     let i = 1;
//     let missing = []
//     while (i < arr.length) {
//         if(num == arr[i]){
//         //Increment num every loop and only increment i when it's true
//             num++
//             i++
//         //. If it's false, add to numsMissing
//         } else {
//             missing.push(arr[i])
//         }
//     }
// }

// console.log(zenWay(arr))