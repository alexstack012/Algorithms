let greeting = "  Good morning wonderful people of Earth!"
let greeting2 = "there are many words to this sentence right here i do declare right now at this moment"


const stringToArray = str => {
    var result = []
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[0] == " ") { console.log("this string starts with a space"); i++ }
        if (str[i] != " ") {
            word += str[i]
            console.log("WORD BUILDING...", word)
            // to add the last word to array
            if (i == str.length - 1) {
                result.push(word);
            }
        } else {
            result.push(word)
            word = "";
        }
    }
    return result
}

console.log(stringToArray(greeting)) // returns ["Good", "morning", "wonderful", "people", "of", "Earth!"]
console.log(stringToArray(greeting2)) // returns ['there','are','many','words','to','this','sentence', 'right','here','i','do','declare','right','now','at','this','moment']