// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object




//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
stack(primitive) got copy here
here chnages are made over copy given to varible
heap(non-primitive) got reference 
where change made in original copy

1. Primitive types (e.g., numbers, strings, booleans):
   - When you assign a primitive type to a variable, a copy of the value is made.
   - Changes to the variable do not affect the original value.

   ```javascript
   let x = 5;  // x is a copy of the value 5
   let y = x;  // y is also a copy of the value 5
   y = 10;     // Changing y does not affect x
   ```

2. Non-primitive types (e.g., objects, arrays):
   - When you assign a non-primitive type to a variable, you get a reference to the original value (stored in the heap memory).
   - Changes made through the variable affect the original value because you're working with a reference to the same data.

   ```javascript
   let array1 = [1, 2, 3];   // array1 is a reference to an array in the heap
   let array2 = array1;      // array2 is also a reference to the same array in the heap
   array2.push(4);           // Changing array2 also affects array1
   ```

   
Explanation:

1. The code provides clear definitions of primitive and non-primitive data types in JavaScript.
2. Examples of primitive types (Number, String, Boolean, null, undefined, Symbol, BigInt) and their usage are demonstrated.
3. Examples of non-primitive types (Arrays, Objects, Functions) are illustrated.
4. The comments explain the behavior of primitive and non-primitive types in terms of copying and referencing, including a brief example for each type.
4. It states that when we declare `y=x`, both variables hold references to the same
*/  