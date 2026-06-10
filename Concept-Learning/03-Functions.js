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
