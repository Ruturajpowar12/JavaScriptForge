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

//🚀 Module 7: Advanced JavaScript (Part 2)
// Callbacks

// Practical Task 1
function greet(sentence) {
  console.log(sentence);
}
function welcome(callback) {
  callback("Welcome to JavaScript");
}
welcome(greet);

//Practical Task 2
function executeTask(task) {
  task("Learning Callbacks");
}
executeTask(greet);

//Practical Task 3
function calculator(a, b, operation) {
  operation(a, b);
}
calculator(10, 5, function (x, y) {
  console.log(x * y);
});

//Practical Task 4
function processStudent(name, callback) {
  callback(name);
}

processStudent("Ruturaj", function (studentName) {
  console.log("Student:", studentName);
});

//Mini project
function orderFood(food, callback) {
  console.log("Preparing " + food + "...");
  callback();
}

orderFood("Pizza", function () {
  console.log("Pizza Ready!");
});
