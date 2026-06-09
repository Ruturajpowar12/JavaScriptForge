// Module 2: Control Flow (Part 1)

let age = 20;
if (age >= 18) {
  console.log("Eligible"); //Eligible
}

let marks = 30;
if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
} //Fail

let num = 10;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
} //Even

let temperature = 25;
if (temperature > 35) {
  console.log("Hot");
} else {
  console.log("Normal");
} //Normal

// task
// Task 1: Voting Eligibility
let age = Number(prompt("Enter your age"));
if (age >= 18) {
  console.log("You can Vote");
} else {
  console.log("You cannot Vote");
}

// ask 2: Even or Odd
let num = 12;
if (num % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// Task 3: Pass or Fail

let marks = Number(prompt(" Enter your marks :"));
if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//Module 2: Control Flow (Part 2)

// Practical Task 1: Grade Calculator
let marks = Number(prompt("Enter your marks"));
if (marks >= 90 && marks <= 100) {
  console.log("A+");
} else if (marks >= 75 && marks <= 89) {
  console.log("A");
} else if (marks >= 60 && marks <= 74) {
  console.log("B");
} else if (marks >= 35 && marks <= 59) {
  console.log("C");
} else {
  console.log("Fail");
}

//Practical Task 2: Age Category
let age = Number(prompt("Enter your age :"));

if (age >= 0 && age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else if (age >= 20 && age <= 59) {
  console.log("Adult");
} else {
  console.log("Senior Citizen");
}

//Practical Task 3: Simple Login System

const username = "admin";
const password = "1234";

let enteredUsername = prompt("Enter username");
let enteredPassword = prompt("Enter password");

if (
  username === enteredUsername.trim() &&
  password === enteredPassword.trim()
) {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}

//Number Guess Checker

const secretNumber = 7;
let number = Number(prompt("Enter a Number :"));

if (number === secretNumber) {
  console.log("Correct Guess");
} else if (number > secretNumber) {
  console.log("Too High");
} else {
  console.log("Too Low");
}

//Module 2: Control Flow (Part 3)

//Practical Task 1: Day Finder

let day = Number(prompt("Enter a Choice of day :"));

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wedsnday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

//Practical Task 2: Month Finder

let month = Number(prompt("Enter a month number : "));

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("Invalid Month");
}

// Practical Task 3: Calculator using switch

let num1 = Number(prompt("Enter first number"));
let operator = prompt("Enter operator (+,-,*,/):");
let num2 = Number(prompt("Enter second number"));

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid Operator");
}

//Mini Project

console.log("1 → Pizza \n2 → Burger\n3 → Sandwich\n4 → Pasta");

let Pizza = 250;
let Burger = 120;
let Sandwich = 100;
let Pasta = 180;
let choice = Number(prompt("Enter your choice :"));
switch (choice) {
  case 1:
    console.log("You ordered Pizza");
    console.log(`Price : ₹${Pizza}`);
    break;
  case 2:
    console.log("You ordered Burger");
    console.log(`Price : ₹${Burger}`);
    break;
  case 3:
    console.log("You ordered Sandwich");
    console.log(`Price : ₹${Sandwich}`);
    break;
  case 4:
    console.log("You ordered Pasta");
    console.log(`Price : ₹${Pasta}`);
    break;
  default:
    console.log("Invalid Choice");
}

// Module 2: Control Flow (Part 4)

// Practical Task 1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//Practical Task 2
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Practical Task 3

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

//Practical Task 4
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) console.log(i);
}

//Mini Project 1
let num = Number(prompt("Enter a Number"));
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

//Mini Project 2
let number = Number(prompt("Enter a Number :"));
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i;
}
console.log(sum);
