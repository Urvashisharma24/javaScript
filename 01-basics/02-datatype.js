"use strict"; // Enabling strict mode for better code quality and error checking

// alert(3 + 3); // Using alert in a non-browser environment (Node.js) might not work as expected

console.log(3
    +
    3); // Adding whitespace for code readability, semicolon optional in most cases

console.log("Hitesh"); // Logging the string "Hitesh" to the console

// Declaring variables with different data types
let name = "hitesh"; // String variable
let age = 18;        // Number variable
let isLoggedIn = false; // Boolean variable
let state;            // Undefined variable

// Data types in JavaScript
// number => 2 to the power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// object

// Logging the data types of undefined and null using the typeof operator
console.log(typeof undefined); // Output: undefined
console.log(typeof null);      // Output: object (Note: typeof null is a known quirk in JavaScript, it should ideally be "object")
