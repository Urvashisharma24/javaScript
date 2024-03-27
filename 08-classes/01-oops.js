// const user={
//     name:"avdesh",
//     happy:function(){
//         console.log("hey ",this.name);
//         console.log(this);
//     }
// }


// console.log(user.happy());


function user(name,LN){
    this.name=name,
    this.LN=LN

    return this;
}

const fun= user( "Avnesh","Deshmukh");
const fun2=  user( "Avn","Deshmukh");

console.log(fun)
// console.log(fun2)
// console.log(fun)
