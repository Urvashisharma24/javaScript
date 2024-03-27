const score = 400
// console.log(score); // Output: 400 (logging the value of score)

const balance = new Number(100)
// console.log(balance); // Output: [Number: 100] (logging the value of balance)

// console.log(balance.toString().length); // Output: 3 (converting balance to string and logging its length)
// console.log(balance.toFixed(1)); // Output: "100.0" (formatting balance with one decimal place)

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // Output: "123.9" (formatting otherNumber with precision of 4)

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // Output: "10,00,000" (formatting hundreds with Indian English locale)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Output: [object Math] (logging the Math object)
// console.log(Math.abs(-4)); // Output: 4 (absolute value of -4)
// console.log(Math.round(4.6)); // Output: 5 (rounding 4.6 to the nearest integer)
// console.log(Math.ceil(4.2)); // Output: 5 (ceiling of 4.2)
// console.log(Math.floor(4.9)); // Output: 4 (floor of 4.9)
// console.log(Math.min(4, 3, 6, 8)); // Output: 3 (minimum value among the numbers)
// console.log(Math.max(4, 3, 6, 8)); // Output: 8 (maximum value among the numbers)

console.log(Math.random()); // Output: a random decimal between 0 (inclusive) and 1 (exclusive)
console.log((Math.random() * 10) + 1); // Output: a random decimal between 1 and 11
console.log(Math.floor(Math.random() * 10) + 1); // Output: a random integer between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (m1111111111111111 ax - min + 1)) + min)
// Output: a random integer between 10 and 20 (inclusive) using custom range


// Explanation:

// 1. The code demonstrates various operations related to numbers, including creating a Number object (`balance`).
// 2. It showcases string conversion and formatting methods for numbers, such as `toString()`, `toFixed()`, and `toPrecision()`.
// 3. The `toLocaleString()` method is used to format a number with a specific locale (`en-IN` for Indian English).
// 4. The `Math` object is explored with various methods like `abs()`, `round()`, `ceil()`, `floor()`, `min()`, and `max()`.
// 5. Random number generation is achieved using `Math.random()`, and different ranges are created using the formula `(Math.random() * (max - min + 1)) + min`.
// 6. Comments explain each operation and its respective output.