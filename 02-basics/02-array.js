// const myarr=[0,1,7,3,4,5]

// console.log(typeof myarr);
// console.log(myarr);

// myarr.push(6)

// console.log( myarr);
// myarr.pop(1);
// console.log( myarr);

// myarr.unshift(5) //add digit in first of array
// myarr.shift()       //delete  first digit of array
// console.log( "b ",myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(7));

// // slice, splice

// console.log("A ", myarr);

// const myn1 = myarr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myarr);


// const myn2 = myarr.splice(1, 3)
// console.log("C ", myarr);
// console.log(myn2);


let m2=[7,8,9,10,5]
let m1=[34,56,78,23]
// m2.push(m1)

const de=m2.concat(m1);
// const av=[...m1,...m2]

// console.log(m2);
console.log(de);
// console.log(av);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

