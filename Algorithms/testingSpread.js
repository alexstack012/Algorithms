let x = [1, 2, 3, 4]

// let y = [...x]
// //makes a copy of the variable x and assigns it to y.

// y.push(5)
// console.log(y) //[ 1, 2, 3, 4, 5 ]
// console.log(x) //[ 1, 2, 3, 4 ]

let y = [5, 6, 7, 8]

// let z = x.concat(...y)

//console.log(z) //[1, 2, 3, 4, 5, 6, 7, 8]

let z = [9, 10, 11, 12]

let asdf = x.concat(...y, ...z)

console.log(asdf) //[1,  2, 3, 4,  5, 6, 7, 8, 9, 10, 11, 12]