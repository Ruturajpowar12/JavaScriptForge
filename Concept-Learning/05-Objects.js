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
const samsungMobile = {
  brand: "Samsung",
  price: 25000,
  color: "Black",
};
console.log(samsungMobile["brand"]);
console.log(samsungMobile["price"]);

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

//Module 5: Objects (Part 2)
// Object Methods

//Practical Task 1
const person = {
  name: "Ram",
  sayHello() {
    console.log(`Hello ${this.name}`);
  },
};
person.sayHello();

// Practical Task 2
const language = {
  title: "JavaScript",
  author: "Ruturaj",
  setBook() {
    console.log(`${this.title} by ${this.author}`);
  },
};
language.setBook();

// Practical Task 3
const samsungMobile = {
  brand: "Samsung",
  price: 25000,
  showDetails() {
    console.log(`${this.brand} - ₹${this.price}`);
  },
};
samsungMobile.showDetails();

// Practical Task 4
const obj = {
  name: "Ruturaj",
  age: 22,
  introduce() {
    console.log(`My Name is ${this.name} and I am ${this.age} years old`);
  },
};
obj.introduce();

//Mini Project ⭐
const student = {
  name: "Ruturaj",
  course: "BCA",
  college: "VCK",
  showStudent() {
    console.log(`${this.name} studies ${this.course} at ${this.college}`);
  },
};
student.showStudent();

//Mini Project ⭐⭐
const bankAccount = {
  accountHolder: "Ruturaj Powar",
  balance: 2000,
  deposit(amount) {
    this.balance += amount;
    console.log("Deposited: ", amount);
    console.log(`Balance : ${this.balance}\n`);
  },
  withdraw(amount) {
    this.balance -= amount;
    console.log("withdrawn: ", amount);
    console.log(`Balance : ${this.balance}\n`);
  },
};

bankAccount.deposit(500);
bankAccount.withdraw(300);

// Module 5: Objects (Part 3)
// Object Iteration

// Practical Task 1
const data = {
  name: "Ram",
  age: 20,
  city: "Pune",
};
for (let key in data) {
  console.log(key);
}

// Practical Task 2
for (let key in data) {
  console.log(key, data[key]);
}

// Practical Task 3
const obj = {
  brand: "Samsung",
  price: 25000,
  color: "Black",
};
console.log(Object.keys(obj));

// Practical Task 4
console.log(Object.values(obj));

//Mini Project ⭐
const student = {
  name: "Ruturaj",
  course: "JavaScript",
  college: "VCK",
  city: "Kolhapur",
};
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// Mini Project ⭐⭐
const movie = {
  title: "hanuman",
  year: 2023,
  rating: 8.5,
  hero: "Tejja Sajja",
};

for (let key in movie) {
  console.log(`${key} : ${movie[key]}`);
}

// Module 5: Objects (Part 4)
// Destructuring, Spread Operator, Rest Operator

// Practical Task 1
const obj = {
  name: "Ram",
  age: 20,
  city: "Pune",
};
const { name, age } = obj;
console.log(name);
console.log(age);

// Practical Task 2
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const res = [...arr1, ...arr2];
console.log(res);

//Practical Task 3
const task1 = {
  name: "Ruturaj",
};
const task2 = {
  city: "Kolhapur",
};
const result = {
  ...task1,
  ...task2,
};
console.log(result);

//Practical Task 4
const [first, ...others] = [10, 20, 30, 40, 50];
console.log(first);
console.log(others);

//Mini Project ⭐
const student = {
  name: "Ruturaj",
  course: "JavaScript",
  college: "VCK",
  city: "Kolhapur",
};
const { name: studentName, course, college: studentCollege, city } = student;
console.log(studentName);
console.log(course);
console.log(studentCollege);
console.log(city);

//Mini Project ⭐⭐
const employee = {
  name: "Ram",
  salary: 30000,
  department: "BCA",
  city: "Kolhapur",
};
const { name, salary } = employee;
console.log(name);
console.log(salary);

const newOriginal = {
  ...employee,
  experience: 2,
};
console.log(newOriginal);
