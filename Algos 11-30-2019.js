/*
Every non-negative integer N has a binary representation.  For example, 5 can be represented
as "101" in binary, 11 as "1011" in binary, and so on.  Note that except for N = 0, there are
no leading zeroes in any binary representation.

The complement of a binary representation is the number in binary you get when changing every
1 to a 0 and 0 to a 1.  For example, the complement of "101" in binary is "010" in binary.

For a given number N in base-10, return the complement of it's binary representation as a base-10
integer.

0 = 0
1 = 1
2 = 10
3 = 11
4 = 100
5 = 101
6 = 110
7 = 111
8 = 1000

1   0   0  1  0  1 0 0 1 ---> what is this in decimal? 297
256 128 64 32 16 8 4 2 1 ---> if there is a 1 above, add it to the total

Example 1:

Input: 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

Example 2:

Input: 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.

Example 3:

Input: 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.


Note:

    0 <= N < 10^9
*/

function binaryToDecimal (num) {
  if (num <= 1) {
    return num;
  }
  let total = 0;
  let adder = 1;
  const stringNum = num.toString();

  for (let i = stringNum.length - 1; i >= 0; i -= 1) {
    const currentNum = stringNum[i];
    if (currentNum === '1') {
      total += adder;
    }
    adder *= 2;
  }

  return total;
}

// convert decimal to binary i.e.
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
// 6 --> 110
// 7 --> 111
// 8 --> 1000
// 15 --> 1111
// 16 --> 10000
// 17 --> 10001
// 20 --> 10101 [2, 4, 8, 16]


const convertDecimalToBinaryString = function (num) {
  if (num === 0) {
    return '0';
  }

  let numberOfBits = 1;
  let divider = 1;
  let numCopy = num;
  const binaryNumberAsArray = [];

  while (divider < numCopy) {
    divider *= 2;
    numberOfBits += 1;
  }

  for (let index = 0; index < numberOfBits; index += 1) {
    if (divider <= numCopy) {
      binaryNumberAsArray.push(1);
      numCopy -= divider;
    } else if (index !== 0) {
      binaryNumberAsArray.push(0);
    }
    divider /= 2;
  }

  return binaryNumberAsArray;
};

const convertBinaryToDecimal = function (binaryNumString) {
  let decimalNumber = 0;
  let valueToAdd = 1;

  while (binaryNumString.length > 0) {
    decimalNumber += binaryNumString[binaryNumString.length - 1] === '1' ? valueToAdd : 0;
    valueToAdd *= 2;
    binaryNumString = binaryNumString.slice(0, binaryNumString.length - 1);
  }

  return decimalNumber;
};

const bitwiseComplement = function (num) {
  const binaryNumberAsArray = convertDecimalToBinaryString(num);

  for (let index = 0; index < binaryNumberAsArray.length; index += 1) {
    if (binaryNumberAsArray[index] === 1) {
      binaryNumberAsArray[index] = 0;
    } else {
      binaryNumberAsArray[index] = 1;
    }
  }

  return convertBinaryToDecimal(binaryNumberAsArray.join(''));
};

// console.log(convertDecimalToBinaryString(7));
// console.log(convertBinaryToDecimal('1111'));
// console.log(bitwiseComplement(555555555555));

const bitwiseComplementRemainder = function (num) {
  if (num === 0) {
    return 1;
  }

  let highestDivisor = 1;

  while (highestDivisor <= num) {
    highestDivisor *= 2;
  }

  return highestDivisor - num - 1;
};

// console.log(convertBinaryToDecimal('1000'));
