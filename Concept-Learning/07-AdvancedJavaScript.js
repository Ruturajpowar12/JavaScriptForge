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

//🚀 Module 7: Advanced JavaScript (Part 7)
// this Keyword

//📝 Practical Task 1
const person = {
  name: "Ruturaj",
  show() {
    console.log(this.name);
  },
};
person.show();
//Ruturaj

// 📝 Practical Task 2
const emp = {
  course: "MERN Stack",
  show() {
    console.log(this.course);
  },
};
emp.show();

// 📝 Practical Task 3
const mobile = {
  brand: "Apple",
  showBrand() {
    console.log(`Brand: ${this.brand}`);
  },
};
mobile.showBrand();

// 📝 Practical Task 4
const info = {
  city: "Pune",
  showCity() {
    console.log(`I live in ${this.city}`);
  },
};
info.showCity();

//⭐ Mini Project 1: User Profile
const user = {
  name: "Ruturaj",
  age: 22,
  showProfile() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  },
};
user.showProfile();

// ⭐ Mini Project 2: Bank Account
const bank = {
  owner: "Ruturaj",
  balance: 5000,
  showAccount() {
    console.log(`Owner: ${this.owner}`);
    console.log(`Balance: ${this.balance}`);
  },
};
bank.showAccount();

//🚀 Module 7: Advanced JavaScript (Part 8)
// Event Loop
// 📝 Practical Task 1
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
console.log("C");
//A
//C
//B

//📝 Practical Task 2
console.log("JavaScript");
setTimeout(() => {
  console.log("Async Task");
}, 0);
console.log("Finished");

//📝 Practical Task 3
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);
//1
//3
//2

//📝 Practical Task 4
console.log("Start");
setTimeout(() => {
  console.log("Task 1");
}, 2000);
setTimeout(() => {
  console.log("Task 2");
}, 1000);
console.log("End");
//Start
//End
//Task 2
//Task 1

//⭐ Mini Project 1: Food Delivery Simulation
console.log("Order Received");
console.log("Preparing Food...");
setTimeout(() => {
  console.log("Food Delivered");
}, 3000);

//⭐ Mini Project 2: User Login Simulation
console.log("Checking Credentials...");
setTimeout(() => {
  console.log("Login Successful");
}, 2000);

//🚀 Module 7: Advanced JavaScript (Part 9)
// ES6+ Features
// 📝 Practical Task 1
const name = "Ruturaj";
console.log(`Hello ${name}`); //Hello Ruturaj

// 📝 Practical Task 2
const fruits = ["Apple", "Banana", "Mango"];
const [first, second] = fruits;
console.log(first);
console.log(second);

// 📝 Practical Task 3
const student = {
  name: "Ruturaj",
  course: "MERN",
};
const { name: studentName, course } = student;
console.log(studentName);
console.log(course);

// 📝 Practical Task 4
const nums1 = [10, 20];
const nums2 = [30, 40];
const res = [...nums1, ...nums2];
console.log(res);

//⭐ Mini Project 1: Employee Profile
const employee = {
  name: "Ruturaj",
  department: "Development",
  salary: 50000,
};
const { name, department, salary } = employee;
console.log(name);
console.log(department);
console.log(salary);

// ⭐ Mini Project 2: Shopping Cart
const cart1 = ["Laptop", "Mouse"];
const cart2 = ["Keyboard", "Monitor"];
const allProducts = [...cart1, ...cart2];
console.log(allProducts);

//🚀 Module 7: Advanced JavaScript (Part 10)
// Modules

// Main concepts:
// export
// import
// Named Export
// Default Export

//Example 1: Named Export
// math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
// app.js
import { add, sub } from "./math.js";
console.log(add(10, 5));
console.log(sub(10, 5));

//Example 2: Default Export
// user.js
export default function greet() {
  console.log("Hello");
}
// app.js
import greet from "./user.js";
greet();

// 🚀 Module 7: Advanced JavaScript (Part 11)
// Error Handling

// 📝 Practical Task 1
try {
  console.log(x);
} catch (error) {
  console.log("Variable not found");
}

// 📝 Practical Task 2
try {
  console.log(a);
} catch (error) {
  console.log("Something went wrong");
}

//📝 Practical Task 3
try {
  let age = 16;

  if (age < 18) {
    throw new Error("Not Eligible");
  }
  console.log("Eligible");
} catch (error) {
  console.log(error);
}

//📝 Practical Task 4
try {
  console.log("Starting");
} catch (error) {
  console.log(error);
} finally {
  console.log("Finished");
}

//⭐ Mini Project 1: ATM Withdrawal

try {
  let balance = 5000;
  let withdraw = 7000;

  if (withdraw > balance) {
    throw new Error("Insufficient Balance");
  }
  console.log("Withdrawal Successful");
} catch (error) {
  console.log(error);
}

//⭐ Mini Project 2: Student Login
try {
  let username = "";
  if (username === "") {
    throw new Error("Username Required");
  }
  console.log("Login Successful");
} catch (error) {
  console.log(error);
}
