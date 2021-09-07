function eightball() {
    //this function should return a string from an array of multiple strings
    // do 5 strings
    var arr = ["Just go watch naruto", "go play league of legends", "go take a nap", "you'll have a good day", "you'll have a not so good day...da da daaaa"]
    var answer = Math.floor(Math.random() * 5);
    return arr[answer];

}

console.log(eightball())