
let datetime = new Date();

console.log(datetime.toString()); // Output: [current date and time as a string]
console.log(datetime.toISOString()); // Output: [current date and time in ISO format]
console.log(datetime.toJSON()); // Output: [current date and time in JSON format]
console.log(datetime.toLocaleString()); // Output: [current date and time in a localized string]

console.log(typeof datetime); // Output: object (since Date is an object in JavaScript)

let ydate = new Date(2023, 0, 23);
console.log(ydate.toLocaleString()); // Output: [formatted date string for January 23, 2023]

let mydate = Date.now(); // Get the current timestamp in milliseconds
console.log(mydate.toLocaleString()); // Output: [current timestamp in a formatted string]
console.log(ydate.getTime()); // Output: [timestamp for January 23, 2023, in milliseconds]


// Explanation:

// 1. `new Date()` creates a new Date object representing the current date and time.
// 2. The methods `toString()`, `toISOString()`, `toJSON()`, and `toLocaleString()` are 
//          used to display the date and time in different formats.
// 3. `typeof datetime` returns "object" because `Date` is an object in JavaScript.
// 4. `new Date(2023, 0, 23)` creates a new Date object for January 23, 2023.
// 5. `toLocaleString()` is used to display the formatted date string for `ydate`.
// 6. `Date.now()` gets the current timestamp in milliseconds since the Unix epoch (January 1, 1970).
// 7. `toLocaleString()` is again used to display the formatted date string for the current timestamp.
// 8. `ydate.getTime()` returns the timestamp for the specific date `ydate` in milliseconds.