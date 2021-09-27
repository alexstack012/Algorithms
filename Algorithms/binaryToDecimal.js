
// convert binary to a decimal
// input binary
// output decimal

const binaryToDecimal = binary => {
    let output = 0;
    let exponent = 0;
    let binaryString = String(binary);
    for (let i = binaryString.length - 1; i >= 0; i--) {
        output += (parseInt(binaryString[i]) * (Math.pow(2, exponent)));
        exponent ++;
    }
    return output;
}

console.log(binaryToDecimal(1101));
console.log(binaryToDecimal(111010));
console.log(binaryToDecimal(1));
console.log(binaryToDecimal(0));