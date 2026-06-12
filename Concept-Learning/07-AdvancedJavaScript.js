// 🚀 Module 7: Advanced JavaScript (Part 1)
// Execution Context & Hoisting

// Practical Task 1
console.log(x);
var x = 100; //undefined

// Practical Task 2
show();
function show() {
  console.log("JavaScript");
} //JavaScript

// Practical Task 3
console.log(age);
let age = 22; //ReferenceError

// Practical Task 4
hello();
const hello = () => {
  console.log("Hello");
}; //ReferenceError

//Mini Project ⭐
console.log(a);
var a = 12;

saybye();
function saybye() {
  console.log("hello");
}
