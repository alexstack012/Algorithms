//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i] //setting the index of i into a temp variable 
        let j = i - 1 //looking left
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp //swapping ^^
    }
    return arr
}

// const insertionSort = (arr)=> {
//     for(var i = 1; i < arr.length; i++){
//         while(arr[i]< arr[i-1]){
//             [arr[i], arr[i-1]]=[arr[i-1], arr[i]]
//             i--
//         }
//     }
//     return arr
//     }

console.log(insertionSort([4, 7, 1, 2, 5, 0, 9, 6]))