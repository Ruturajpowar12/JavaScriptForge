

// Module 1: JavaScript Fundamentals (Part 1)


let name = "Ruturaj";
console.log(name); //Ruturaj

let age = 21;
age = 22;
console.log(age); //22

const country = "India";
console.log(country);      //India

let a = 10;
let b = 20;
console.log(a);//10
console.log(b);//20

//task 
console.log("Welcome to My Developer Journey");
console.log("Ruturaj");
console.log("I am learning JavaScript");
console.log("Every day I improve");
 

const name ="Ram"
let age = 21
const city = "kolhapur"
const college = "VCK" 
console.log(name);
console.log(age);
console.log(city);
console.log(college);



// Module 1: JavaScript Fundamentals (Part 2)

let name = "Ruturaj";
console.log(typeof name); //string

let age = 21;
console.log(typeof age); //number

let isStudent = true;
console.log(typeof isStudent); //boolean

let x;
console.log(typeof x); //undefined

let user = null;
console.log(typeof user);//null  //object


let name = "Ruturaj"
console.log(name);
console.log(typeof name);

let age = 22
console.log(age);
console.log(typeof age);

let isStudent = true
console.log(isStudent);
console.log(typeof isStudent);

let city = "Pune"
console.log(city);
console.log(typeof city);

let salary = 30000
console.log(salary);
console.log(typeof salary);


// Module 1: JavaScript Fundamentals (Part 3)

let a = 15;
let b = 5;
console.log(a + b); //20

let a = 20;
let b = 4;
console.log(a - b); //16

let a = 6;
let b = 5;
console.log(a * b); //30

let a = 25;
let b = 5;
console.log(a / b); //5

let a = 17;
let b = 3;
console.log(a % b); //2

console.log(3 ** 2); //9

// task 
let num1 = 50
let num2 = 10

console.log("Addition :",num1 + num2);
console.log("Subtraction :",num1 - num2);
console.log("Multiplication :",num1 * num2);
console.log("Division :",num1 / num2);
console.log("Modulus :",num1 % num2);
console.log("Exponent :",num1 ** 2);


// Module 1: JavaScript Fundamentals (Part 4)

console.log(Number("50"));    //50
console.log(typeof Number("50")); //number
console.log(parseInt("100"));   //100
console.log(parseFloat("99.99")); //99.99
console.log("10" + "20"); //1020


let num1 = Number(prompt("Enter first number :"))
let num2 = Number(prompt("Enter second number :"))
console.log("Addition :",num1 + num2);
console.log("Subtraction :",num1 - num2);
console.log("Multiplication :",num1 * num2);
console.log("Division :",num1 / num2);

let name = prompt("enter your name:")
let age = Number(prompt("enter your age:"))
let city = prompt("enter your city:")

console.log("Name :",name);
console.log("Age :",age);
console.log("City :",city);



// Module 1: JavaScript Fundamentals (Part 5)

let name = "Ruturaj";
console.log(`Hello ${name}`); //Hello Ruturaj

let a = 10;
let b = 5;
console.log(`Result = ${a + b}`); //Result = 15

let city = "Pune";
console.log(`I live in ${city}`); //I live in Pune

let age = 22;
console.log(`Age = ${age}`); //Age = 22

//task

let name = "Ram"
let age = 20
let city = "kolhapur"
let college = "VCK"

console.log(`My Name is ${name}`);
console.log(`I am ${age} years old`);
console.log(`I from ${city}`);
console.log(`I am student of ${college} college`);

let name = prompt("enter your name :")
let age = Number(prompt("enter your age :"))
let city = prompt("enter your city")

console.log(`Hello ${name}!`);
console.log(`You are ${age} years old.`);
console.log(`You live in ${city}.`);



// Module 1 Revision Test
// Part A: Output Questions
// Q1
let a = 10;
let b = 20;
console.log(a + b); //30

// Q2
let name = "Ruturaj";
console.log(typeof name); //string

// Q3
let age = Number("22");
console.log(typeof age); //number

// Q4
console.log("5" + "5"); //55

// Q5
console.log(10 % 3);//1

// Q6
console.log(2 ** 4);//16

// Q7
let city = "Pune";
console.log(`City: ${city}`); //City: Pune

// Q8
let x;
console.log(typeof x); //undefined

// Part B: Coding Tasks
// Task 1: Student Information
let name = "swarup"
let age = 22
let course = "Javscript"
let city = "mumbai"

console.log(`Student Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`City: ${city}`);

// Task 2: Simple Calculator

let num1 = Number(prompt("Enter first Number :"))
let num2 = Number(prompt("Enter Second Number :"))

console.log(`Addition : ${num1 + num2}`);
console.log(`Subtraction : ${num1 - num2}`);
console.log(`Multiplication : ${num1 * num2}`);
console.log(`Division : ${num1 / num2}`);

// Task 3: Rectangle Area

let length = Number(prompt("Enter a Length:"))
let width = Number(prompt("Enter a Width:"))

let area  = length * width

console.log(`Area of Rectangle = ${area}`);



//Task 4 ⭐

let name = prompt("Enter your name:")
let favoriteLanguage = prompt("Enter your favorite language:");
console.log(`Hello ${Name}!`);
console.log(`Your favorite programming language is ${favoriteLanguage}`);
