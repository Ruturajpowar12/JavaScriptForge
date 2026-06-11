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

// Module 4: Arrays (Part 3)
// includes() indexOf( )slice() splice()

// Practical Task 1
const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits.includes("Mango")); //true

// Practical Task 2
const techs = ["HTML", "CSS", "JavaScript", "React"];
console.log(techs.indexOf("JavaScript"));

//Practical Task 3
const num = [10, 20, 30, 40, 50];
console.log(num.slice(1, 4));

// Practical Task 4
const colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(2, 1);
console.log(colors);
// colors.splice(2, 1, "Pink");
// console.log(colors);

// Mini Project ⭐
const names = ["Ram", "shyam", "Ruturaj", "Amit"];
console.log(names.includes("Ruturaj"));
console.log(names.indexOf("Amit"));

const newArray = names.slice(1, 3);
console.log(newArray);

// Mini Project ⭐⭐
const products = ["Laptop", "Mouse", "KeyBoard", "Monitor"];
products.splice(1, 1, "Headphones");
console.log(products.includes("Monitor"));
console.log(products);

// Module 4: Arrays (Part 4)
// Array Iteration

//Practical Task 1
const colors = ["Red", "Green", "Blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//practical Task 2
const techs = ["HTML", "CSS", "JavaScript", "React"];
for (let val of techs) {
  console.log(val);
}

//Practical Task 3
const num = [10, 20, 30, 40, 50];
num.forEach((val) => {
  console.log(val);
});

// Practical Task 4
const names = ["Ram", "shyam", "Ruturaj", "Amit"];
names.forEach((val) => {
  console.log(`Student: ${val}`);
});

//Mini Project ⭐
const marks = [80, 75, 90, 85, 70];
for (let val of marks) {
  console.log(val);
}
console.log(`Total Students :${marks.length}`);

// Mini Project ⭐⭐
const cart = ["Milk", "Bread", "Eggs", "Butter"];
cart.forEach((val) => {
  console.log(`Items:${val}`);
});
console.log(`Total Items: ${cart.length}`);

//Module 4: Arrays (Part 5)
//map(),filter(),find()

// Practical Task 1
const num = [1, 2, 3, 4, 5];
const res = num.map((val) => val * 2);
console.log(res);

//Practical Task 2
const num1 = [10, 15, 20, 25, 30, 35];
const res = num1.filter((num) => num % 2 === 0);
console.log(res);

//Practical Task 3
const num2 = [5, 10, 15, 20, 25];
const res = num2.find((val) => val > 18);
console.log(res);

//Practical Task 4
const fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits.find((val) => val === "Banana"));

// Mini Project ⭐
const nums = [45, 78, 92, 60, 35, 88];
const res = nums.filter((val) => val >= 60);
console.log(res);

//Mini Project ⭐⭐
const product = ["Laptop", "Mouse", "KeyBoard", "Monitor", "HeadPhones"];
const res = product.map((val) => val.toUpperCase());
console.log(res);
