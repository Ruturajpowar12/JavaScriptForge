// //Numbers in Js

// const num = 400
// console.log(num); //400


// const balance = new Number(100)
// console.log(balance);   //[Number: 100]

// console.log(balance.toString());   //100
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00

// const num1= 123.3553

// console.log(num1.toPrecision(5))//123.36

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000


//Maths in js

// console.log(Math) //Object [Math] {}
// console.log(Math.abs(-4))              //4  Converts negative → positive
// console.log(Math.round(4.6))          //5  Rounds to nearest integer.     because greater than 0.5  
// console.log(Math.ceil(4.2))         //5  Always rounds UP.   greatrer than 0.1
// console.log(Math.floor(4.9));       //4   Always rounds DOWN.


// Math.random() gives random decimal number between 0 and 1
console.log(Math.random())

// Step 1:
// Math.random() * 10
// Range becomes: 0 to 9.999
// +1 shifts range to: 1 to 10.999
console.log((Math.random() * 10) + 1)


// Step 2:
// Math.floor() removes decimal value
// Final range becomes: 1 to 10
console.log(Math.floor(Math.random() * 10) + 1)


// Random number between custom range

const min = 10
const max = 20

// Formula:
// Math.floor(Math.random() * (max - min + 1)) + min

// Step-by-step:

// (max - min + 1)
// 20 - 10 + 1 = 11

// Math.random() * 11
// Range: 0 to 10.999

// Math.floor()
// Range: 0 to 10

// + min
// 0 + 10 to 10 + 10

// Final range: 10 to 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
