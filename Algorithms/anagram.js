function anagram(firstString, secondString) {
    function sortedString(str) {
        console.log(firstString.toLowerCase().split('').sort().join(''))
        console.log(secondString.toLowerCase().split('').sort().join(''))
        return str.toLowerCase().split('').sort().join('')
    }
    if (sortedString(firstString) === sortedString(secondString)) {
        return "This is an anagram"
    } else { return "This is NOT an anagram" }
}
console.log(anagram("IAmLordVoldemort", "TomMarvoloRiddle"))
console.log(anagram("HarryPUTTA", "RonaldWeasly"))