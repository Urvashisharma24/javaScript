const name ="hey"
const num=23

//old method to do so
// console.log(name +num); 

// console.log(`my name is ${name} and my number is ${num}`);   modern way of using it 


const game= new String("hello-BUddy")

// console.log(game.charAt(2));
// console.log(game.length);
// console.log(game.toLowerCase());
// console.log(game.substring(0,4));
const another=game.slice(0,5)
console.log(another);
// console.log(game.);
// console.log(game.);

const url = "https://hitesh.com/hitesh%20choudhary" 
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(game.split('-'));



/***********************************************************************
 * Explanation:

The code includes examples of old and modern methods of string concatenation using + and template literals (${}).

An instance of the String constructor is created with the variable game.

Various string methods are demonstrated:
        charAt(2): returns the character at index 2.
        length: returns the length of the string.
        toLowerCase(): converts the string to lowercase.
        substring(0,4): returns a substring from index 0 to 4.
        slice(0,5): returns a slice from index 0 to 5.
        replace('%20', '-'): replaces '%20' with '-' in the URL.
        includes('sundar'): checks if the string includes the substring 'sundar'.
        split('-'): splits the string into an array using '-' as the delimiter.
 *****************************************************************/