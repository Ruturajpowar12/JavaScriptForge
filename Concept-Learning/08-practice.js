// These are 20 practical coding questions covering your entire JavaScript syllabus (Fundamentals → DOM → Advanced JavaScript → Fetch API).

// ---------- 🟢 EASY (1-6) ----------

// Q1
// Create an array of 5 fruits and print each fruit using a loop.
const fruits = ["Mango", "Apple", "Greps", "Banana", "Orange"];
fruits.forEach((val) => {
  console.log(val);
});

// Q2
// Create an object for a student with name, age and course.
// Print all values.
const student = {
  name: "Ruturaj",
  age: 22,
  course: "JavaScript",
};
const { name, age, course } = student;
console.log(name);
console.log(age);
console.log(course); // or
console.log(Object.values(student));

// Q3
// Create a function that accepts two numbers and prints their multiplication.
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(5, 2));

// Q4
// Create an array of 6 numbers and print only numbers greater than 50.
const arr = [10, 46, 89, 34, 57, 99];
const res = arr.filter((val) => val > 50);
console.log(res);

// Q5
// Create an object with a city property and a method that prints:
// "I live in <city>"

const data = {
  city: "Kolhapur",
  showCity() {
    console.log(`I Live in ${this.city}`);
  },
};
data.showCity();

// Q6
// Create an array of marks and print the total marks.
const marks = [68, 93, 78, 45, 60];
const totalMarks = marks.reduce((total, curr) => {
  return total + curr;
});
console.log(totalMarks);

// ---------- 🟡 MEDIUM (7-12) ----------

// Q7
// Create an array of prices.
// Increase every price by 18% and print the new array.
const prices = [100, 200, 300, 400, 500];
const newPrices = prices.map((val) => {
  const gst = val * (18 / 100);
  return val + gst;
});
console.log(newPrices);

// Q8
// Create an array of student ages.
// Print only students eligible for voting.
const student = [20, 16, 25, 15, 17, 22];
const eligibleForVote = student.filter((age) => {
  return age > 18;
});
console.log(eligibleForVote);

// Q9
// Create an array of numbers.
// Print the sum of all even numbers only.
const numbers = [10, 23, 46, 32, 78, 21, 77];
const result = numbers
  .filter((val) => val % 2 === 0)
  .reduce((tot, curr) => tot + curr);
console.log(result);

// Q10
// Create a function that returns another function.
// Every time it is called, increase a counter and print it.
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
counter();

// Q11
// Create an asynchronous function that waits for a Promise and prints:
// "Data Loaded Successfully"
async function loadData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Data Loaded Successfully");
}
loadData();

// Q12
// Create an object containing:
// name
// department
// salary
// Print all values after extracting them.
const employee = {
  name: "Ram",
  department: "IT",
  salary: 30000,
};
const { name, department, salary } = employee;
console.log(name);
console.log(department);
console.log(salary);
