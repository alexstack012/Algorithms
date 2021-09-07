function isPallindrome(str) {
    for (var i = 0; i < str.length / 2 - 1; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(isPallindrome("a oho! a"))
console.log(isPallindrome("a oho a"))
console.log(isPallindrome("nada"))
console.log(isPallindrome("asdffdsa"))

function longestPallindrome(str) {
    var palli = "";
    for (var i = 0; i < str.length - 1; i++) {
        // check to see if this section of the string is a pallindrome
        for (var j = i + 1; j <= str.length; j++) {
            if (isPallindrome(str.slice(i, j)) === true) {
                //is this new pallindrome's length greater than the existing
                // 'longest pallindrome'?
                if (str.slice(i, j).length > palli.length) {
                    palli = str.slice(i, j)
                }
            }
        }
    }
    return palli;
}

console.log(longestPallindrome("my favorite racecar erupted"))