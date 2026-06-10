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
