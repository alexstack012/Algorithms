function isIsogram(str) {
    str = str.toLowerCase() //ignore casing
    let len = str.length //for ease
    let arr = str.split('') // split the string into an array -> "abc" =>[a,b,c]
    arr.sort() //to sort the array
    for (let i = 0; i < len - 1; i++) {//loop through the array
        if (arr[i] == arr[i + 1])
            //check to see if one index of the string is equal to the next
            return false //if a letter repeats its not an isogram
    }
    return true //otherwise it is an isogram
}


let isIso = (string) => {
    let arr = [...string.toLowerCase().split('')]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1])
            return false
    }
    return true
}

console.log(isIsogram("something"))
console.log(isIsogram("abba"))
console.log(isIso("something"))
console.log(isIso("abBa"))