let arr1 = [9, 7, 4, 8, 1, 2, 5, 3, 6]
let arr2 = [5, 7, 3, 2, 9, 1, 4]
let arr3 = [15, 57, 64, 18, 91, 100]

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        // Finding the smallest number
        let tempIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[tempIndex]) {
                tempIndex = j;
            }
        }
        if (tempIndex != i) {
            // swapping index's here
            let tmp = arr[i];
            arr[i] = arr[tempIndex];
            arr[tempIndex] = tmp;
        }
    }
    return arr;

    // let j = arr.length - 1
    // for (j; j > 0; j--)  //desend right to left in the array
    //     for (let i = 0; i < j; i++) {   //now going left to right
    //         if (arr[i] > arr[j])        //compare i with j
    //             [arr[i], arr[j]] = [arr[j], arr[i]]     //if its greater than swap
    //     }
    // return arr
}

console.log(selectionSort(arr1))
console.log(selectionSort(arr2))
console.log(selectionSort(arr3))