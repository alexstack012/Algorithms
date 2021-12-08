//LEARNING HOW TO USE SET

const myArraySet = [1, 2, 3, 4, 5, 5, 1, 2]
const mySetSet = new Set(myArraySet)
//set will remove duplicates

// console.log(myArray)// [1, 2, 3, 4, 5, 5, 1, 2]
// console.log(mySetSet) //Set(5) { 1, 2, 3, 4, 5 }

const uniqueArraySet = [...mySetSet]
//the spread operator (...) will read through mySetSet and while in the array

console.log(uniqueArraySet) //[1, 2, 3, 4, 5]

//------------------------------------------------------------------------------------------------------
//LEARNING HOW TO USE ADD, DELETE, AND CLEAR

const myArrayAdd = [1, 2, 3, 4, 5, 5, 1, 2]
const mySetAdd = new Set(myArrayAdd)

mySetAdd.add(6)
mySetAdd.add('6')
mySetAdd.add([1, 2, 3])
//add works similarly to push adding it to the end of the array, even if its a string, or another array
console.log(mySetAdd) //Set(8) { 1, 2, 3, 4, 5, 6, '6', [ 1, 2, 3 ] }

mySetAdd.delete(3)
//works similar to pop but finds the specific value to remove from the array
console.log(mySetAdd) //Set(7) { 1, 2, 4, 5, 6, '6', [ 1, 2, 3 ] }

mySetAdd.clear()
//will clear the array
console.log(mySetAdd)//Set(0) {}

//----------------------------------------------------------------------------
//LEARNING HAS AND SIZE
const myArrayHas = [1, 2, 3, 4, 5, 5, 1, 2]
const mySetHas = new Set(myArrayHas)

console.log(mySetHas.has(5))//true
console.log(mySetHas.has(6))//false
//has will look through and see if the value is in the array and return a boolean
console.log(mySetHas.size)//5
//returns the number of elements in a set