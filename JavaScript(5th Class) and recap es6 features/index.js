/*
function greet(name, callbackFunction ) {
    console.log("Hello " + name);
    callbackFunction();
}

function hi() {// parameter 
    console.log('goodbye');
}


greet('uctc', hi);

*/

/*
function hi() {// parameter 
    console.log('goodbye');
}

const myAsync = (name, callbackFunction) => {
    callbackFunction();
    setTimeout(() => {
        console.log("Hello " + name);
    }, 5000);
    console.log("Hello, how are you " + name);
}

myAsync("Khan", hi);
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubled = numbers.map((number) => number + 2);
// console.log(doubled)

// filter

// const even = numbers.filter((number) => number % 2 === 0);
// console.log(even)

// console.log(1 === "1");

// reduce

// const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);

// console.log(sum);

//forEach()
// numbers.forEach((number) => console.log(number));

//find()

// const firstEven = numbers.find((number) => number % 2 !== 0);
// console.log(firstEven);    

// const newNumbers = [...numbers, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(newNumbers)

const man = {
    name: "Son of Khan",
    phone:"01711111111",
    address: "Dhaka"
}

// const friend = {...man, email:"your.email@gmail.com", city:"Dhaka", fatherName:"khan"};

// console.log(friend)

// function sum(...numbers) {
//     return numbers.reduce((accumulator, number) => accumulator + number, 0);
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

