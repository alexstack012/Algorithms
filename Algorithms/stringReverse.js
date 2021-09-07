function reverseString(str) {
    var result = ""
    str.split(" ")
    arr = str.split(" ")
    for (var i = str.length - 1; i > -1; i--) {
        result += str[i]
    }
    console.log(result)
}
reverseString("super")