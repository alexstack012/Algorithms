function reverse(arr) {
    var reversedArr = new Array(arr.length);
    for (let i = 0; i < arr.length; ++i) {
        reversedArr[i] = arr[arr.length - i - 1];
    }
    return reversedArr;
}