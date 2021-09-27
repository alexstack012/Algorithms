const hex2dec = (hexNum) => {    // hexNum must be a string

    if (typeof (hexNum === 'number'))
        hexNum = hexNum.toString();
    hexNum = hexNum.toUpperCase();
    let decNum = 0;
    let power = 1;

    let hex = {         // lookup table for hex characters to integers
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15
    }

    let i = hexNum.length - 1;                    // set index to start at last character

    while (i >= 0) {
        decNum += hex[hexNum[i]] * power;     // find the indexed value times 16's power at digit's place
        power <<= 4;                            // increase the place's power by 16
        i--;                                    // move index back one for the string
    }
    return decNum;
}

console.log("0: ", hex2dec('0'));         // 0
console.log("A: ", hex2dec('A'));         // 10
console.log("63: ", hex2dec('63'));       // 99
console.log("200: ", hex2dec('200'));     // 512
console.log("FF: ", hex2dec('FF'));       // 255
console.log("number 10: ", hex2dec(10));  // 16
console.log("number 63: ", hex2dec(63));  // 99 