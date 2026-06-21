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
