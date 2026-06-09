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
