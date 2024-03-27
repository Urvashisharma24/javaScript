// console.log("2">1);
// console.log(2+ 1+"2"+1);

console.log(null < 0);    // Output: false (null is treated as 0 in comparisons)
console.log(null >= 0);   // Output: true (null is treated as 0 in comparisons)
console.log(null <= 0);   // Output: true (null is treated as 0 in comparisons)

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);    // Output: false (null is treated as 0 in comparisons)
console.log(null == 0);   // Output: false (null is not equal to 0 in strict equality)
console.log(null >= 0);   // Output: true (null is treated as 0 in comparisons)

console.log(undefined == 0); // Output: false (undefined is not equal to 0 in loose equality)
console.log(undefined > 0);  // Output: false (undefined is not comparable to 0 in comparisons)
console.log(undefined < 0);  // Output: false (undefined is not comparable to 0 in comparisons)

// === 

console.log("2" === 2);    // Output: false (strict equality, different data types)
