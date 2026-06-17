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
  return age >= 18;
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

// ---------- 🔴 HARD (13-20) ----------

// Q13
// Create an array of users.
// Each user should have:
// name
// age
// Filter users whose age is greater than or equal to 18
// Print only their names.
const users = [
  {
    name: "Ram",
    age: 20,
  },
  {
    name: "Ruturaj",
    age: 22,
  },
  {
    name: "Swarup",
    age: 17,
  },
];
const res = users
  .filter((user) => {
    return user.age >= 18;
  })
  .map((val) => {
    return val.name;
  });
console.log(res);

// Q14
// Create a bank balance system.
// Initial balance = 1000
// Every call should add a deposit amount and print the latest balance.
function BankBalance(InitialBalance) {
  let balance = InitialBalance; // let balance = 1000
  return function (amount) {
    balance = balance + amount;
    console.log("latest balance: ", balance);
  };
}
const deposit = BankBalance(1000);
deposit(500);
deposit(300);

// Q15
// Create a shopping cart containing product prices.
// Print:
// Total price
// Average price
// Highest price
// Lowest price

function shoppingCart(cart) {
  if (cart.length === 0) {
    console.log("The cart is empty.");
    return;
  }

  const totalPrice = cart.reduce((tot, curr) => tot + curr, 0);
  console.log(`Total Price: ${totalPrice}`);

  const averagePrice = totalPrice / cart.length;
  console.log(`Average Price: ${averagePrice}`);

  let high = cart[0];
  cart.forEach((val) => {
    if (val > high) {
      high = val;
    }
  });
  console.log(`Highest price: ${high}`);

  let low = cart[0];
  cart.forEach((val) => {
    if (val < low) {
      low = val;
    }
  });
  console.log(`Lowest Price: ${low}`);
}

const prices = [110, 220, 330, 440, 550];
shoppingCart(prices);

// Q16
// Create a Promise.
// If marks are greater than or equal to 35,
// print "Pass"
// otherwise print "Fail"
const checkMarks = new Promise((resolve, reject) => {
  const marks = 42;
  if (marks >= 35) {
    resolve("Pass");
  } else {
    reject("Fail");
  }
});
checkMarks.then((data) => console.log(data));

// Q17
// Fetch users from:
// https://jsonplaceholder.typicode.com/users
// Print only:
// name
// email
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  data.forEach((user) => {
    console.log(`Name: ${user.name}\nEmail: ${user.email}\n`);
  });
}
getData();
// Q18
// Store the following in browser storage:
// username = Ruturaj
// course = Full Stack Development
// Retrieve and print both values.
localStorage.setItem("username", "Ruturaj");
localStorage.setItem("course", "Full Stack Development");

const name = localStorage.getItem("username");
const course = localStorage.getItem("course");
console.log(name);
console.log(course);

// Q19
// Create an object representing a company.
// Add:
// companyName
// employees
// location
// Create a method that prints all details using object properties.
const company = {
  companyName: "Nike",
  employees: 200,
  location: "Londaon",
  allDetails() {
    console.log(`Company Name: ${this.companyName}`);
    console.log(`Employess: ${this.employees}`);
    console.log(`Location: ${this.location}`);
  },
};
company.allDetails();

// Q20
// Fetch todos from:
// https://jsonplaceholder.typicode.com/todos
// Print only completed todo titles.
//```

async function getTitles() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  data.forEach((todo) => {
    if (todo.completed) {
      console.log(`${todo.id} : ${todo.title}`);
    }
  });
}

getTitles();
