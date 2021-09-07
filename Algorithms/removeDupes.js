function removeDuplicates(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        if (newArr.includes(arr[i])) {
            arr.splice(i, 1)
        } else {
            newArr.push(arr[i])
        }
    }
    return arr
}

console.log(removeDuplicates([1, 2, 1, 3, 4, 2]))// output == [1,2,3,4]
console.log(removeDuplicates([1, 2, 3]))//output == [1,2,3]