let bubbleSort = (arr) => {
    leng = arr.length
    for (let i = 0; i < leng; i++) {
        for (let j = 0; j < leng; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    console.log(arr)
    return arr
}

bubbleSort([23, 21, 18, 22, 21, 1, 13, 25])