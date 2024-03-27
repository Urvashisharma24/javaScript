
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // Output: 1 (accessing element at index 1)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); // Output: false (checking if 9 is included in the array)
// console.log(myArr.indexOf(3)); // Output: 3 (index of the first occurrence of 3)

// const newArr = myArr.join()

// console.log(myArr); // Output: [0, 1, 2, 3, 4, 5] (original array)
// console.log(newArr); // Output: "0,1,2,3,4,5" (joined string)

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1); // Output: [1, 2] (elements sliced from index 1 to 2)
console.log("B ", myArr); // Output: [0, 1, 2, 3, 4, 5] (original array is not modified)

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // Output: [0, 4, 5] (elements spliced from index 1 to 3)
console.log(myn2); // Output: [1, 2, 3] (removed elements using splice)


// Explanation:

// 1. Arrays (`myArr`, `myHeros`, `myArr2`) are created with different elements and methods are applied.
// 2. Accessing elements using indexing (e.g., `myArr[1]`).
// 3. Array methods like `push()`, `pop()`, `unshift()`, and `shift()` are demonstrated for adding and removing elements.
// 4. Methods like `includes()` and `indexOf()` are used to check the presence of an element and find its index.
// 5. The `join()` method converts the array to a string, joining elements with a default comma.
// 6. `slice()` is used to create a new array with a subset of elements without modifying the original array.
// 7. `splice()` is used to remove elements from the array and returns those removed elements, modifying the original array.
// 8. Comments provide additional explanations for each operation and output.