let score = "hitesh"

// console.log(typeof score); // Output: string
// console.log(typeof(score)); // Output: string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // Output: number
// console.log(valueInNumber); // Output: NaN (as the conversion is not possible)

// Conversion examples
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // Output: true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); // Output: "33"
// console.log(typeof stringNumber); // Output: string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); // Output: -3

// Arithmetic operations
// console.log(2 + 2); // Output: 4
// console.log(2 - 2); // Output: 0
// console.log(2 * 2); // Output: 4
// console.log(2 ** 3); // Output: 8
// console.log(2 / 3); // Output: 0.6666666666666666
// console.log(2 % 3); // Output: 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); // Output: "hello hitesh"

// Concatenation and type coercion
// console.log("1" + 2); // Output: "12"
// console.log(1 + "2"); // Output: "12"
// console.log("1" + 2 + 2); // Output: "122"
// console.log(1 + 2 + "2"); // Output: "32"

// Order of operations
// console.log((3 + 4) * 5 % 3); // Output: 0

// Unary plus operator for type conversion
// console.log(+true); // Output: 1
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // Output: 101

// Link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion // Reference link for type conversion
