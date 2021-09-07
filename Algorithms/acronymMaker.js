function acronym(str) {
    var result = ""
    str.split(" ")
    // console.log(str.split(" "))
    arr = str.split(" ")
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i][0])
        result += arr[i][0]
    }
    console.log(result.toUpperCase())

}

acronym("hello world hello world hello world")