// Topic 1: Syntax & Code Structure (4 Tasks)
// Task 1
// Create a "Student Profile" program.
// Store student name, age, course, city and whether the student is active.
// Print the information in a readable format.
function studentProfile() {
  const name = "Ruturaj";
  const age = 22;
  const course = "Full Stack";
  const city = "Kolhapur";
  const isActive = true;

  console.log(`Student Name: ${name}`);
  console.log(`Student Age: ${age}`);
  console.log(`Student Course: ${course}`);
  console.log(`Student City: ${city}`);
  console.log(`Student Is Active: ${isActive}`);
}
studentProfile();

// Task 2
// Create a "Movie Ticket" program.
// Store movie name, ticket price and number of tickets.
// Print the total amount.
function movieTicket() {
  const movieName = "Kill";
  const ticketPrice = 300;
  const tickets = 40;

  console.log(`Total Amount is: ${ticketPrice * tickets}`);
}
movieTicket();

// Task 3
// Create a "Company Employee Card".
// Create meaningful variables for employee id, employee name,
// department and salary.
// Print all information.
function employeeCard() {
  const employeeId = 101;
  const employeeName = "Ruturaj";
  const Department = "IT";
  const salary = 50000;
  console.log("Employee Id :", employeeId);
  console.log("Employee Name :", employeeName);
  console.log("Department :", Department);
  console.log("Employee Salary :", salary);
}
employeeCard();

// Task 4
// Create a "Shopping Bill" program.
// Store 3 product names and their prices.
// Print the final bill in a structured format.
function shoppingBill() {
  const item1 = "book";
  const price1 = 50;

  const item2 = "pen";
  const price2 = 40;

  const item3 = "pencil";
  const price3 = 20;
  const total = price1 + price2 + price3;

  console.log("==========================");
  console.log("     Shopping Bill");
  console.log("==========================");
  console.log("item                  price");
  console.log(`${item1}                   ${price1}`);
  console.log(`${item2}                    ${price2}`);
  console.log(`${item3}                 ${price3}`);
  console.log("--------------------------");
  console.log("Total               ", total);
}
shoppingBill();

// Topic 2: Variables & Constants (var, let, const)

// Task 1
// Create a bank account program.
// Store account holder name and balance.
// Update the balance after a deposit.

function BankAccount() {
  const accountHolderName = "Ruturaj";
  let balance = 5000;
  let deposit = 2000 + balance;
  console.log("balance: ", balance);
  console.log("after Deposit balance: ", deposit);
}
BankAccount();

// Task 2
// Create a cricket scoreboard.
// Store team name using const.
// Store current score using let.
// Update the score multiple times.
function scoreBoard() {
  const teamName = "india";
  let currentScore = 156;
  const six = 6;
  const four = 4;
  currentScore = currentScore + six;
  currentScore = currentScore + four;
  currentScore = currentScore + 3;
  currentScore = currentScore + six;
  console.log(`Team ${teamName} score is ${currentScore}`);
}
scoreBoard();
// Task 3
// Create an online order system.
// Store order id using const.
// Store order status using let.
// Change the order status 3 times.
function onlineOrderSystem() {
  const orderId = 174;
  let isComplete = "pending";
  isComplete = "delivered";
  isComplete = "canceled";
  console.log(isComplete);
}
onlineOrderSystem();
// Task 4
// Create a user login system.
// Store username and login count.
// Increase login count after every login.
function userLogin() {
  const username = "CodeNinja99";
  let loginCount = 0;
  console.log(`User: ${username} | Initial Logins: ${loginCount}`);
  loginCount++;
  console.log(`Login successful! Current count: ${loginCount}`);

  loginCount++;
  console.log(`Login successful! Current count: ${loginCount}`);

  loginCount++;
  console.log(`Login successful! Current count: ${loginCount}`);
}
userLogin();

// Topic 3: Data Types
// Task 1
// Create variables representing all primitive data types.
const num = 10;
console.log(num);
console.log(typeof num); //number

const str = "ram";
console.log(str);
console.log(typeof str); //string

const boolean = true;
console.log(boolean);
console.log(typeof boolean); //boolean

const a;
console.log(a);
console.log(typeof a); //undefined

const b = null;
console.log(b);
console.log(typeof b); //null

let star = Symbol("hello"); //symbol
console.log(star);
console.log(typeof star);

let n = BigInt("123");
console.log(n);
console.log(typeof n); //BigInt

// Task 2
// Create a student object and print its data.
const student = {
  name: "Ram",
  age: 21,
  course: "Full Stack",
};
console.log(student);

// Task 3
// Create an array of 5 favorite technologies.
const technologies = ["html", "css", "javascript", "react", "node"];

// Task 4
// Create an e-commerce product containing mixed data types.
const product = ["pencil", "red", 20, true];
const eCommerce = {
  product: "pencil",
  brand: "aspara",
  price: 100,
  isColored: true,
};

//Topic 4: Type Coercion & Type Conversion
// Task 1
// Create a program that receives age as a string.
// Convert it into a number.
let age = Number(prompt("enter your age:"));
console.log(age);
console.log(typeof age);
//or
let isAge = "30";
const convertAge = Number(isAge);
console.log(convertAge);
console.log(typeof convertAge);

// Task 2
// Create a program that receives price as a number.
// Convert it into a string.
let price = prompt("enter your age:");
console.log(price);
console.log(typeof price);
//or
let price2 = 300;
const convertAge = String(price2);
console.log(price2);
console.log(typeof price2);

// Task 3
// Create a form input simulation.
// Convert values into appropriate data types.
const rawAgeInput = "25";
const rawPriceInput = "19.99";
const rawQuantityInput = "3";
const rawNewsletterCheck = "true";

const age = Number(rawAgeInput);
const price = parseFloat(rawPriceInput);
const quantity = parseInt(rawQuantityInput);
const wantsNewsletter = Boolean(rawNewsletterCheck);

console.log(age, typeof age);
console.log(price, typeof price);
console.log(wantsNewsletter, typeof wantsNewsletter);

const totalCost = price * quantity;
console.log(`Total: ${totalCost}`);

// Task 4
// Experiment with 5 different coercion examples and observe outputs.
const ex1 = "5" + 2;
console.log(ex1, typeof ex1);

const ex2 = "5" - 2;
console.log(ex2, typeof ex2);

const ex3 = 5 == "5";
console.log(ex3, typeof ex3);

const ex4 = 10 + true;
console.log(ex4, typeof ex4);

const ex5 = "apple" * 3;
console.log(ex5, typeof ex5);

//Topic 5: Operators
// Task 1
// Create a salary calculator.
const hourlyRate = 25;
const hoursPerWeek = 40;
const weeksPerYear = 52;

const weeklySalary = hourlyRate * hoursPerWeek;
const annualSalary = weeklySalary * weeksPerYear;

console.log(weeklySalary);
console.log(annualSalary);

// Task 2
// Create a percentage calculator.
const totol = 500;
const percentage = 15;

const result = totol * (15 / 100);
console.log(result);

// Task 3
// Create a discount calculator.
const originalPrice = 120;
const discountPercentage = 20;

const discount = originalPrice * (20 / 100);
const finalPrice = originalPrice - discount;
console.log(finalPrice);

// Task 4
// Create an age eligibility checker.
const userAge = 19;
const minimumAgeRequirement = 18;

const isEligible =
  userAge >= minimumAgeRequirement ? "eligible" : " not eligible";
console.log(isEligible);

//Topic 6: Conditional Statements
// Task 1
// Build a voting eligibility checker.
const age = 19;
if (age >= 18) {
  console.log("eligible for voting");
} else {
  console.log("Not eligible for voting");
}

// Task 2
// Build a student grade system.
let mark = 87;
if (mark <= 100 && mark >= 90) {
  console.log("A+");
} else if (mark <= 89 && mark >= 80) {
  console.log("A");
} else if (mark <= 79 && mark >= 70) {
  console.log("B+");
} else if (mark <= 69 && mark >= 60) {
  console.log("A");
} else if (mark <= 59 && mark >= 35) {
  console.log("pass");
} else {
  console.log("fail");
}

// Task 3
// Build a login role system.
// Admin, Manager, Employee.
let loginId = "admin";
let accessMessage;
switch (loginId) {
  case "admin":
    accessMessage = "Full administrator access granted.";
    break;
  case "manager":
    accessMessage = "Manager access granted. Limited settings available.";
    break;
  case "employee":
    accessMessage = "Employee access granted. Standard dashboard loaded.";
    break;
  default:
    accessMessage = "Access denied. Invalid role.";
}
console.log(accessMessage);
// Task 4
// Build a traffic signal simulator.
let signalColor = "red";
let action;

if (signalColor === "red") {
  action = "Stop completely.";
} else if (signalColor === "yellow") {
  action = "Slow down and prepare to stop.";
} else if (signalColor === "green") {
  action = "Go safely.";
} else {
  action = "Signal malfunctioning. Proceed with caution.";
}

console.log(action);

//Topic 7: Loops
// Task 1
// Print numbers 1 to 100.
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Task 2
// Print even numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}
// Task 3
// Print multiplication tables from 1 to 10.
let num = 1;
while (num <= 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i} `);
  }
  console.log();

  num++;
}
// Task 4
// Print all student names from an array.
const arrName = ["ram", "Swarup", "Sanskar", "Piyush"];
for (let i = 0; i < arrName.length; i++) {
  console.log(arrName[i]);
}
