/*

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

// const XO = (str) => {
//     let cross = '';
//     let circle = '';
//     var arr = [...str.toLowerCase()]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'x') {
//             cross += arr[i];
//         } else if (arr[i] === 'o') {
//             circle += arr[i];
//         }
//     }
//     return cross.length === circle.length;
// }

const XOtry2 = (str) => {
    let cross = 0;
    let circle = 0;
    var arr = [...str.toLowerCase()]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') { cross++ }
        else if (arr[i] === 'o') { circle++ }
    }
    if (cross === circle) { return true }
    else { return false }
}

console.log(XO("ooxx")) //true
console.log(XO("xooxx")) // false

console.log(XOtry2("ooxx")) //true
console.log(XOtry2("xooxx")) // false