// Declaration of variables using different keywords
let open = 32;     // Using let (block scope), initializing variable open with the value 32
const cv = 'ab';   // Using const (block scope), initializing constant variable cv with the string 'ab'
var ad = 23;       // Using var (global scope), initializing variable ad with the value 23
ac = 32;           // Implicit global variable declaration, initializing ac with the value 32

// Attempting to reassign a value to a constant (will result in an error)
// cv = 12;       // Uncommenting this line would result in an error, as const cannot be reassigned

// Reassigning a value to an existing variable (var allows redeclaration)
var ad = 45;       // Redeclaring and assigning a new value to variable ad

// Logging the values of the variables to the console
console.log(open); // Logging the value of open
console.log(cv);   // Logging the value of cv
console.log(ad);   // Logging the value of ad
console.log(ac);   // Logging the value of ac (implicitly declared global variable)

// Displaying the values of variables in a tabular format using console.table
// console.table([open, cv, ad, ac]);



/*Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])

*/