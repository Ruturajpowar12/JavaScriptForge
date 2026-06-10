// Module 3: Functions (Part 1)

// Practical Task 1
function sayHello() {
  console.log("Hello JavaScript");
}
sayHello();
sayHello();
sayHello();

// Practical Task 2
function showName(name) {
  console.log(`Your name is ${name}`);
}
showName("Ruturaj");

// Practical Task 3
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(10, 20));

// Practical Task 4
function multiply(a, b) {
  let result = a * b;
  console.log(`Multiplication = ${result}`);
}
multiply(5, 4);

// Mini Project ⭐
function table(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
table(5);

// Module 3: Functions (Part 2)

// Practical Task 1
function square(num) {
  return num * num;
}
console.log(square(6));

// Practical Task 2
function cube(num) {
  return num ** 3;
}
console.log(cube(3));

// Practical Task 3
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(getFullName("Ruturaj", "Powar"));

// Practical Task 4
function isPositive(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isPositive(11));
// OR
function isPositive(num) {
  return num > 0;
}

console.log(isPositive(-1));

// Mini Project ⭐
function calculateArea(length, width) {
  return length * width;
}
console.log(calculateArea(10, 5));

// Mini Project ⭐⭐
function calculateGrade(marks) {
  if (marks >= 90 && marks <= 100) {
    return "A+";
  } else if (marks >= 75 && marks <= 89) {
    return "A";
  } else if (marks >= 60 && marks <= 74) {
    return "B";
  } else if (marks >= 35 && marks <= 59) {
    return "C";
  } else {
    return "Fail";
  }
}
console.log(calculateGrade(82));

// Module 3: Functions (Part 3)
// Function Expressions & Arrow Functions

// Practical Task 1
// function multiply(a, b) {
//   return a * b;
// }
const multiply = (a, b) => {
  return a * b;
};

// Practical Task 2
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(7, 2));

// Practical Task 3
const isEven = (num) => num % 2 === 0;
console.log(isEven(4));

// Practical Task 4
const getGreeting = (name) => {
  return `Hello ${name}`;
};
console.log(getGreeting("Ruturaj"));

//Mini Project ⭐
const calculateDiscount = (price, discountPercent) => {
  discountAmount = (price * discountPercent) / 100;
  return (finalPrice = price - discountAmount);
};
console.log(calculateDiscount(1000, 20));

// Mini Project ⭐⭐
const checkVotingEligibility = (age) => {
  return age >= 18 ? `Eligible to Vote` : `Not Eligible to Vote`;
};
console.log(checkVotingEligibility(10));

// Module 3: Functions (Part 4)
// Scope

// Practical Task 1
const country = "India";
function showCountry() {
  console.log(country);
}
showCountry();

// Practical Task 2
function showMessage() {
  const message = "Learning JavaScript";
  console.log(message);
}
showMessage();

//Practical Task 3
const college = "VCK";
function bothPrints() {
  const course = "BCA";
  console.log(college);
  console.log(course);
}
bothPrints();

// Practical Task 4

function checkScope() {
  if (true) {
    const secret = "Hidden";
  }
}
console.log(secret); //secret is not defined

//  Mini Project ⭐
const appName = "Student Portal";
function showAppInfo() {
  const version = "1.0";
  console.log(`App: ${appName}`);
  console.log(`Version: ${version}`);
}
showAppInfo();

//Mini Project ⭐⭐
function createUser(name) {
  const role = "Student";
  console.log(`Name: ${name}`);
  console.log(`Role: ${role}`);
}
createUser("Ruturaj");

// role cannot be accessed outside the function  - role is block variable/scope it can not access outside of the function.
