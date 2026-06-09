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
