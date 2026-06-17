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
