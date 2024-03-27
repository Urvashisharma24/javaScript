//singleTone
// Object.create


//object literal
// Define a symbol for a unique key
const mysy = Symbol('key1');

// Create an object using object literal notation
const JsUser = {
    name: "Hitesh",
    [mysy]: "heyone",          // Using a symbol as a property key
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing properties using different ways
console.log(JsUser["full name"]);   // Accessing a property with a space in its name
console.log(JsUser.email);

// Adding a method to the object
JsUser.greeting = function () {
    console.log(`hey buddy ${JsUser["full name"]}`);
}

// Freezing the object to make it immutable
Object.freeze(JsUser);

// Attempting to modify a property after freezing (won't have any effect)
JsUser.email = 'tothe';

// Displaying the frozen object
console.log(JsUser);

// Calling the greeting method
console.log(JsUser.greeting());  // Note: The greeting method should be invoked, not just logged
