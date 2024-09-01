/*
var name = "uctc";

 * printf("Hello %s", name);
 
console.log("Hello " + name);

let id = 1;

console.log(id);

const pi = 3.14159;

console.log(pi);

*/

/*
var x = 10;
function testVar() {
    var y = 20;
    console.log(x); // 10
}

console.log(y);// Error: y is not defined
*/

/*
let x = 10;
function testLet() {
    let y = 20;
    console.log(x); // 10
    console.log(y); // 20
}

x = 100;
console.log(x);// 100
console.log(y); // ReferenceError: y is not defined
*/

/*

const pi = 3.149;

//pi = 3.14159; //TypeError: Assignment to constant variable.
console.log(pi);
*/

//🔁 hoisting
/*
console.log(a);
var a = 5;
console.log(a);
*/

/*
console.log(a);
let a = "ctg";//ReferenceError: Cannot access 'a' before initialization
*/

/*
// normal function
function sayhi(name){
    console.log("Hello ",  name);
}

sayhi("uctc")//function calling

*/
/*
//arrow function
const sayhi = (name) => {
    console.log("Hello ",  name);
}

sayhi("uctc")
*/

/*// ✅ Template literals
const name = "uctc";
console.log(`Hello ${name}`)
*/

/* Destructuring array ✅
const friends = ["Rakib", "Sakib", "Sabbir"];
const [First, Second, third] = friends;

console.log(First, Second, third);
*/

/*// Destructuring object ✅
const person = {
    name: "Rakib",
    age: 25
}
const { name, age } = person;
console.log(name, age);
*/  