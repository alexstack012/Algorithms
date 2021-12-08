// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let counter = 0
//     const result = [];
//     for (let i = 1; i < Math.pow(2, S.length) - 1; i++)
//         result.push([...S].filter((_, pos) => (i >> pos) & 1).join(""))
//     //counter gets added each time the string is found
//     //for(result == S[?]){counter++}
//     return counter + result;
// }

// console.log(solution("banana boat"))

function solution(S) {

    let output = {};
    let phrase = "";

    for (let i = 0; i < S.length; i++) {
        for (let j = i; j < S.length; j++) {
            if (S[j] == ' ') break;
            phrase += S[j];
            if (!output[phrase]) output[phrase] = 1;
            else output[phrase]++;
        }
        phrase = "";
    }
    console.log(output);

}

solution("banana boat");