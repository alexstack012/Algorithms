/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name) {
    let temp = name.split(" ")
    let result = temp[0][0] + "." + temp[1][0]
    return result.toUpperCase()
}


console.log(abbrevName("Sam Harris"))
console.log(abbrevName("Patrick Feenan"))
console.log(abbrevName("Evan Cole"))
console.log(abbrevName("P Favuzzi"))
console.log(abbrevName("David Mendieta"))