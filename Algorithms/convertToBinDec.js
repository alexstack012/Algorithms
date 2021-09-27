function convertDecToBin(decNum) {  //from yesterday
    let binNum = 0;                         // new integer to store binary conversion
    let power = 1;                          // keep track of powers of ten

    while (decNum) {                        // loop until decNum is 0, which is when we have inspected/converted all the digits
        binNum += (decNum % 2) * power;     // multiply the modulus 2 remainder of decNum by the current power of ten. Add to binNum
        power *= 10;                        // power of ten is increased
        decNum >>= 1;                       // decimal number is bitshifted one place right. This is equivalent to Math.floor(decNum / 2);
    }                                       // i.e. : as we divide the decimal number by 2, and we are multiplying the odd modulus remainder by increasing power of ten and adding to itself 
    // so we are effectively using the ones, tens, hundreds, etc. places of an integer as binary bits 
    return binNum;
}

function convertBinToDec(binNum) {      // no input or edge case checking; this function depends on all digits of binNum input parameter to be 1 or 0
    let decNum = 0;
    let power = 0;

    while (binNum >= 1) {                  // summarily: as we divide by 10, check the modulus 10 remainder, which is 0 or 1, and raise that digit's value to the 2's power and add it together. we have to check against the whole number 1 because dividing by 10 will end in neverending decimal fractionals after the number 1. Otherwise this math is the inverse of the decimalTobinary math in the above function
        decNum += (binNum % 10) << power;   // << is the bitshift-left operator, it shifts the bits left, which is the same as multiplying by 2
        binNum /= 10;
        power++;
    }
    return decNum;
}

console.log(convertDecToBin(13))
console.log(convertDecToBin(11))
console.log(convertDecToBin(58))

console.log(convertBinToDec(1011))
console.log(convertBinToDec(1101));
console.log(convertBinToDec(111010));