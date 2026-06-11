// 🚀 Module 5: Objects (Part 1)
// Arrays store values by position.
// Objects store values using key-value pairs.

// Practical Task 1
const student = {
  name: "Ruturaj",
  age: 22,
  city: "Kolhapur",
};
console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student["name"]);
console.log(student["age"]);
console.log(student["city"]);

// Practical Task 2
const mobile = {
  brand: "Samsung",
  price: 25000,
  color: "Black",
};
console.log(mobile["brand"]);
console.log(mobile["price"]);

//Practical Task 3
const language = {
  title: "JavaScript",
  author: "Unknown",
};
language.author = "Ruturaj";
console.log(language);

// Practical Task 4
const Name = {
  name: "Ram",
  age: 20,
};
Name.course = "BCA";
console.log(Name);

// Mini Project ⭐
const movie = {
  title: "hanuman",
  year: 2023,
  rating: 9.5,
};
console.log(movie);
console.log(movie.title);
console.log(movie.year);
console.log(movie.rating);

//Mini Project ⭐⭐
const mobile = {
  brand: "Realme",
  model: "7s",
  price: 18000,
};
mobile.price = 20000;
mobile.colors = ["Red", "Black"];
console.log(mobile);
