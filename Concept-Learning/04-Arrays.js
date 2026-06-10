// 🚀 Module 4: Arrays (Part 1)
// Arrays store multiple values in one variable.

// Practical Task 1
const colors = ["Red", "Green", "Blue"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// Practical Task 2
const numbers = [10, 20, 30, 40, 50];
console.log(`Length : ${numbers.length}`);

// Practical Task 3
const cities = ["Pune", "Mumbai", "Kolhapur"];
cities[1] = "Nagpur";
console.log(cities);

// Practical Task 4
const students = ["Ram", "Shyam", "Ruturaj"];
console.log(students[0]);
console.log(students[2]); //or
console.log(students[students.length - 1]);

//Mini Project ⭐
const subjects = ["JavaScript", "React", "Node.js", "MongoDB"];
console.log(`Total Subjects: ${subjects.length}`);

//Mini Project ⭐⭐
const marks = [80, 75, 90, 85, 70];

console.log(marks[0]);
console.log(marks[marks.length - 1]); //marks[4]
console.log(marks.length);

//Module 4: Arrays (Part 2)
//Array Methods

// Practical Task 1
const colors = ["Red", "Green"];
colors.push("blue");
console.log(colors);

// Practical Task 2
const fruit = ["Apple", "Mango", "Banana"];
fruit.pop();
console.log(fruit);

// Practical Task 3
const languages = ["Javascript", "React"];
languages.unshift("Html");
console.log(languages);

//Practical Task 4
const city = ["Pune", "Mumbai", "Kolhapur"];
city.shift();
console.log(city);

// Mini Project ⭐
const technologies = ["Javascript", "React", "Node.js", "MongoDB"];
technologies.push("Redux");
// console.log(technologies);
technologies.unshift("Css");
// console.log(technologies);
technologies.pop();
console.log(technologies);

// Mini Project ⭐⭐
const cart = ["Milk", "Bread", "Eggs"];
cart.push("Butter");
// console.log(cart);
cart.unshift("Cheese");
// console.log(cart);
cart.pop();
// console.log(cart);
cart.shift();
console.log(cart);
console.log(cart.length);
