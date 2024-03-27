
# JavaScript Array and Object Basics

This repository contains JavaScript code snippets that cover essential concepts related to arrays and objects.

## Arrays

### Creating Arrays

Arrays are collections of values that can be accessed and manipulated. You can create arrays using various methods.

**Example:**

```javascript
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);
```

### Array Methods

JavaScript provides various methods for manipulating arrays, such as `push`, `pop`, `unshift`, `shift`, `includes`, `indexOf`, `join`, `slice`, and `splice`.

**Example:**

```javascript
myArr.push(6);
myArr.pop();
myArr.unshift(9);
myArr.shift();
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr = myArr.join();
```

### Array Manipulation

Arrays can be sliced or spliced to create new arrays or modify existing ones.

**Example:**

```javascript
const myn1 = myArr.slice(1, 3);
const myn2 = myArr.splice(1, 3);
```

## Objects

### Object Literal

Objects in JavaScript are key-value pairs. You can create objects using object literal notation.

**Example:**

```javascript
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
```

### Symbols and Object Methods

Symbols can be used as unique keys in objects. Objects can also have methods.

**Example:**

```javascript
const mysy = Symbol('key1');
JsUser[mysy] = "heyone";
JsUser.greeting = function () {
    console.log(`hey buddy ${JsUser["full name"]}`);
};

Object.freeze(JsUser); // Freezing the object to make it immutable
JsUser.email = 'tothe'; // Attempting to modify a property after freezing (won't have any effect)
console.log(JsUser);
console.log(JsUser.greeting()); // Note: The greeting method should be invoked, not just logged
```

## Array Concatenation

Arrays can be concatenated using various methods, such as `concat` or the spread operator `...`.

**Example:**

```javascript
let m2 = [7, 8, 9, 10, 5];
let m1 = [34, 56, 78, 23];
const de = m2.concat(m1);
let m3=[...m1,...m2]
console.log(de);
```

## Nested Arrays and Array Flattening

Arrays can contain nested arrays. The `flat` method is used to flatten nested arrays.

**Example:**

```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
```

Feel free to explore the code snippets to understand different concepts in JavaScript related to arrays and objects.
```

This README.md file provides an overview of the key topics covered in your JavaScript code snippets, along with explanations for each section. Customize it further based on your preferences and additional details you may want to include.