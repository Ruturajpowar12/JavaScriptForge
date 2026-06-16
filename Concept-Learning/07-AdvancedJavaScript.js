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

//🚀 Module 7: Advanced JavaScript (Part 4)
// Async & Await

// 📝 Practical Task 1
async function hello() {
  return "JavaScript";
}
hello().then((data) => console.log(data)); //JavaScript

//📝 Practical Task 2
function getName() {
  return new Promise((resolve) => {
    resolve("Ruturaj");
  });
}

async function printName() {
  const res = await getName();
  console.log(res);
}
printName();

//📝 Practical Task 3
function getCourse() {
  return new Promise((resolve) => {
    resolve("Full Stack Development");
  });
}

async function printCourse() {
  const res = await getCourse();
  console.log(res);
}
printCourse();

// 📝 Practical Task 4
function getNumber() {
  return new Promise((resolve) => {
    resolve(100);
  });
}
async function printNum() {
  const res = await getNumber();
  console.log(res);
}
printNum();

//⭐ Mini Project 1: User Profile Loader
function loadUser() {
  return new Promise((resolve) => {
    resolve("Ruturaj Powar");
  });
}
async function printProfile() {
  console.log("Loading User...");
  const res = await loadUser();
  console.log(res);
}
printProfile();

// ⭐ Mini Project 2: Product Loader
function loadProduct() {
  return new Promise((resolve) => {
    resolve("Laptop");
  });
}

async function printProduct() {
  console.log("Loading Product...");
  const res = await loadProduct();
  console.log(res);
}
printProduct();

// 🚀 Module 7: Advanced JavaScript (Part 5)
// Closures

// 📝 Practical Task 1

function outer() {
  let language = "JavaScript";
  function inner() {
    console.log(language);
  }
  return inner;
}
const result = outer();
result(); //JavaScript

// 📝 Practical Task 2
function outer() {
  let course = "MERN Stack";
  function inner() {
    console.log(course);
  }
  return inner;
}
const result1 = outer();
result1();

// 📝 Practical Task 3
function number() {
  let num = 10;
  return function () {
    num++;
    console.log(num);
  };
}
const res = number();
res();
res();
res();

// 📝 Practical Task 4
function student() {
  let name = "Ruturaj";
  return function () {
    console.log(name);
  };
}
const res2 = student();
res2();

//⭐ Mini Project 1: Bank Balance
function bankBalace(balanace) {
  let bal = balanace;
  return function (amt) {
    bal = bal + amt;
    console.log(bal);
  };
}
const deposit = bankBalace(1000);
deposit(500);
deposit(500);
deposit(500);

//⭐ Mini Project 2: Like Counter
function likeCounter() {
  let like = 0;
  return function () {
    like++;
    console.log(like);
  };
}

const like = likeCounter();
like();
like();
like();
like();
like();

//🚀 Module 7: Advanced JavaScript (Part 6)
// Higher Order Functions (HOF)
//📝 Practical Task 1
const nums = [1, 2, 3];
const result = nums.map((num) => num + 1);
console.log(result);
//[2,3,4]

//📝 Practical Task 2
const numbers = [10, 20, 30, 40];
const res = numbers.map((val) => val * 3);
console.log(res);

//📝 Practical Task 3
const ages = [10, 18, 22, 15, 30];
const res = ages.filter((age) => age >= 18);
console.log(res);

//📝 Practical Task 4
const marks = [50, 60, 70, 80];
const res = marks.reduce((total, curr) => {
  return total + curr;
}, 0);
console.log(res);

//⭐ Mini Project 1: Product Price Calculator
const prices = [100, 200, 300, 400];
const result = prices.map((val) => {
  const gst = val * (18 / 100);
  return val + gst;
});

console.log(result);

//⭐ Mini Project 2: Student Result Analyzer
const marks = [25, 40, 55, 80, 30, 95];

const total = marks
  .filter((mark) => mark >= 35)
  .reduce((tot, curr) => tot + curr, 0);

console.log(total);
