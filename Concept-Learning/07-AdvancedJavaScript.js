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

// 🚀 Module 7: Advanced JavaScript (Part 3)
// Promises

// 📝 Practical Task 1
const myPromise = new Promise((resolve) => {
  resolve("JavaScript");
});
myPromise.then((data) => {
  console.log(data);
});
//JavaScript

// 📝 Practical Task 2
const myPromise1 = new Promise((resolve, reject) => {
  resolve("Learning Promises");
});
myPromise1
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// 📝 Practical Task 3
const check = new Promise((resolve, reject) => {
  const age = 10;
  if (age >= 18) {
    resolve("Eligible");
  } else {
    reject("Not Eligible");
  }
});

check.then((data) => console.log(data)).catch((error) => console.log(error));

//📝 Practical Task 4

const checkEvenOdd = new Promise((resolve, reject) => {
  let num = 13;
  if (num % 2 === 0) {
    resolve("Even Number");
  } else {
    reject("Odd Number");
  }
});

checkEvenOdd
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// ⭐ Mini Project 1: Food Delivery System
const food = new Promise((resolve, reject) => {
  console.log("Preparing Pizza...");
  resolve("Pizza Delivered");
});

food.then((data) => console.log(data)).catch((error) => console.log(error));

//⭐ Mini Project 2: Exam Result System
const result = new Promise((resolve, reject) => {
  let marks = 75;
  if (marks >= 35) {
    resolve("Pass");
  } else {
    reject("Fail");
  }
});

result.then((data) => console.log(data)).catch((error) => console.log(error));
