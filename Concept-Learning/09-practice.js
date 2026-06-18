// ======================================
// 🚀 JavaScript Mixed Practice Set (50)
// ======================================

// ---------- 🟢 EASY (1-15) ----------

// Q1
// Create an array of 10 numbers and print only odd numbers.
const array = [12, 55, 6, 31, 78, 77, 19, 38, 40, 69];
const oddNumbers = array.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

// Q2
// Create a function that accepts a name and prints:
// Welcome <name>
function greet(name) {
  console.log(`Welcome ${name}`);
}
greet("Ruturaj");

// Q3
// Create an array and reverse it without modifying the original array.
const arr = [1, 2, 3, 4, 5, 6];
const rev = [...arr].reverse();
console.log(rev);

// Q4
// Create an object for a car.
// Add brand, model and year.
// Print all values.
const car = {
  brand: "BMW",
  model: "EC12",
  year: 2026,
};
console.log(Object.values(car)); //or
for (let key in car) {
  console.log(car[key]);
}

// Q5
// Create an array of numbers and print their squares.
const nums = [1, 2, 3, 4, 5, 6];
const square = nums.map((num) => num * num);
console.log(square);

// Q6
// Create an array of names and print names having more than 5 characters.
const names = ["Ruturaj", "Ram", "Swarup", "Sanskar", "Piyush"];
names.forEach((val) => {
  if (val.length > 5) {
    console.log(val);
  }
}); //or
const filterNames = names.filter((val) => {
  return val.length > 5;
});
console.log(filterNames);

// Q7
// Create an object for a mobile phone.
// Add a method that prints all details.
const mobile = {
  brand: "Realme",
  model: "8s",
  year: 2021,
  showDetails() {
    console.log(this.brand);
    console.log(this.model);
    console.log(this.year);
  },
};
mobile.showDetails();

// Q8
// Create an array of temperatures and print the highest temperature.
const temperature = [20, 60, 40, 50];
let temp = temperature[0];
temperature.forEach((val) => {
  if (val > temp) {
    temp = val;
  }
});
console.log(temp);

// Q9
// Create a function that accepts a number and prints whether it is positive, negative or zero.
function checkNumber(num) {
  if (num === 0) {
    console.log("Zero");
  } else if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
checkNumber(6);

// Q10
// Create an array of strings and convert every string to uppercase.
const str = ["ruturaj", "ram", "swarup", "shyam"];
const upperCase = str.map((val) => val.toUpperCase());
console.log(upperCase);

// Q11
// Create an array and remove duplicate values.
const num = [1, 2, 3, 2, 5, 3, 8];
const res = [...new Set(num)];
console.log(res);

// Q12
// Create a function that accepts an array and returns its length.
function arrLength(arr) {
  return arr.length;
}
const nums1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arrLength(nums1));

// Q13
// Create an object containing firstName and lastName.
// Print full name.
const name = {
  firstName: "Ruturaj",
  lastName: "Powar",
};
const { firstName, lastName } = name;
console.log(`Full Name: ${firstName + " " + lastName}`);

// Q14
// Create an array of marks and print grades for each mark.
const marks = [45, 98, 60, 87, 76, 70];
marks.forEach((mark) => {
  if (mark <= 100 && mark >= 90) {
    console.log(`${mark} is A+ grade`);
  } else if (mark <= 89 && mark >= 80) {
    console.log(`${mark} is A grade`);
  } else if (mark <= 79 && mark >= 70) {
    console.log(`${mark} is B+ grade`);
  } else if (mark <= 69 && mark >= 60) {
    console.log(`${mark} is B grade`);
  } else if (mark <= 59 && mark >= 50) {
    console.log(`${mark} is C grade`);
  } else if (mark <= 49 && mark >= 35) {
    console.log(`${mark} is Pass grade`);
  } else {
    console.log(`${mark} is Fail grade`);
  }
});

// Q15
// Create an array and print the second largest number.
const arr2 = [19, 45, 87, 23, 74, 15];
let largest = arr2[0];
let second = 0;
arr2.forEach((val) => {
  if (val > largest) {
    second = largest;
    largest = val;
  }

  if (val > second && val != largest) {
    second = val;
  }
});
console.log(second);

// ---------- 🟡 MEDIUM (16-35) ----------

// Q16
// Create an array of products.
// Each product should contain name and price.
// Print products whose price is greater than 1000.
const arr = [
  {
    name: "watch",
    price: 2000,
  },
  {
    name: "pant",
    price: 1700,
  },
  {
    name: "shirt",
    price: 800,
  },
  {
    name: "napkin",
    price: 600,
  },
  {
    name: "shoes",
    price: 3000,
  },
];

const res = arr.filter((val) => {
  return val.price > 1000;
});
console.log(res);

// Q17
// Create a function that counts vowels in a string.

function vowelCounter(str) {
  let count = 0;
  for (let val of str) {
    if (
      val === "a" ||
      val === "A" ||
      val === "e" ||
      val === "E" ||
      val === "i" ||
      val === "I" ||
      val === "o" ||
      val === "O" ||
      val === "u" ||
      val === "U"
    ) {
      count++;
    }
  }
  console.log("Vowels are ", count);
}
vowelCounter("Ruturaj");

// Q18
// Create an array of numbers and print numbers that are divisible by both 3 and 5.
const numbers1 = [3, 15, 30, 20, 75, 92, 90];
const res = numbers1.filter((val) => val % 3 === 0 && val % 5 === 0);
console.log(res);

// Q19
// Create an array of strings and print the longest string.
const strings = ["apple", "banana", "watermelon", "cherry"];
let longest = "";
for (let str of strings) {
  if (str.length > longest.length) {
    longest = str;
  }
}
console.log(longest);

// Q20
// Create a function that checks whether a string is a palindrome.
function isPalindrome(str) {
  const original = str;
  const reversed = str.split("").reverse().join("");
  return original === reversed;
}
console.log(isPalindrome("dad"));

// Q21
// Create an object containing 5 subjects and calculate total and average marks.
const studentMarks = {
  math: 85,
  science: 90,
  english: 78,
  history: 92,
  geography: 88,
};
const marks = Object.values(studentMarks);
const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;
console.log("Total Marks:", total);
console.log("Average Marks:", average);
// Q22
// Create an array of users.
// Sort users by age in ascending order.
const users = [
  { name: "Ruturaj", age: 22 },
  { name: "Amit", age: 18 },
  { name: "Jeet", age: 19 },
];

const newUser = users.sort((a, b) => a.age - b.age);
console.log(newUser);

// Q23
// Create a counter system that can increment and decrement values.
function counterFun(initialValue = 0) {
  let count = initialValue;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}
const counter = counterFun();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());

// Q24
// Create a function that accepts a sentence and count total words.
function countSentence(str) {
  const sentence = str.trim();
  let count = 0;
  for (let val of sentence) {
    if (val !== " ") {
      count++;
    }
  }
  console.log(`Total Words is ${count}`);
}

countSentence("I am Ruturaj. I am From Kolhapur");

// Q25
// Create an array of prices and apply a 10% discount.
const prices = [100, 200, 300, 400, 500];
const finalPrice = prices.map((price) => {
  const discount = price * (10 / 100);
  return price - discount;
});
console.log(finalPrice);

// Q26
// Create an array and rotate it one position to the right.
const originalArray = [10, 20, 30, 40, 50];
const rotated = [...originalArray];

const last = rotated.pop();
const add = rotated.unshift(last);
console.log(rotated);

// Q27
// Create an object representing a movie and print all keys only.
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  genres: ["Sci-Fi", "Action", "Thriller"],
  durationInMinutes: 148,
  isReleased: true,
  rating: 8.8,
};
console.log(Object.keys(movie));

// Q28
// Create a function that swaps two numbers without creating a third variable.
function swapNumbers(a, b) {
  console.log(`Original : ${a} ${b}`);
  [a, b] = [b, a];
  console.log(`Swap : ${a} ${b}`);
}
swapNumbers(10, 20);

// Q29
// Create an array of numbers and print frequency of each number.
const numbers = [1, 2, 2, 3, 3, 3, 4, 1, 2, 5];

const frequency = numbers.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(frequency);

// Q30
// Create an array of employees and print employees older than 25.
const employees = [
  { name: "Amit", age: 22 },
  { name: "Ruturaj", age: 28 },
  { name: "Jeet", age: 30 },
  { name: "Pooja", age: 24 },
];
const olderThan25 = employees.filter((val) => {
  return val.age > 25;
});
console.log(olderThan25);

// Q31
// Create a function that checks whether a number is prime.
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
console.log(isPrime(31));
// Q32
// Create an object representing a library.
// Add an array of books and print book names.
const library = {
  name: "City Central Library",
  location: "Downtown",
};

library.books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
  },
  { title: "1984", author: "George Orwell", isbn: "9780451524935" },
];

const booksName = library["books"].map((val) => {
  return val.title;
});
console.log(booksName);

// Q33
// Create an array and separate even and odd numbers.
const numbers = [12, 5, 8, 13, 21, 44, 7];
const even = numbers.filter((val) => val % 2 === 0);
const Odd = numbers.filter((val) => val % 2 !== 0);
console.log("Even Numbers:", even);
console.log("Odd Numbers:", Odd);

// Q34
// Create a function that capitalizes the first letter of every word.
function capitalizeWords(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

console.log(capitalizeWords("ram"));
console.log(capitalizeWords("hello team"));
// Q35
// Create a timer that prints a message after 5 seconds.
setTimeout(() => {
  console.log("Hello EveryOne!");
}, 5000);
// ---------- 🔴 HARD (36-50) ----------

// Q36
// Create a user registration system.
// Store users inside an array and prevent duplicate emails.
const users = [];
function registerUser(name, email) {
  const exists = users.some((user) => user.email === email);
  if (exists) return "Email already registered";
  users.push({ name, email });
  return "Registration successful";
}
registerUser("Ruturaj", "Ruturaj@gmail.com");
console.log(users);

// Q37
// Fetch users and print only users whose website ends with ".org".
async function fetchOrgUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const orgUsers = data.filter((user) => user.website.endsWith(".org"));
  console.log(orgUsers);
}
fetchOrgUsers();
// Q38
// Create a shopping cart system.
// Add items, remove items and calculate the total amount.
const cart = {
  items: [],
  addItem(name, price) {
    this.items.push({ name, price });
  },
  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  },
  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};
cart.addItem("ram", 200);
console.log(cart.items);

// Q39
// Create a function that groups words by their first letter.
function groupByFirstLetter(words) {
  return words.reduce((acc, word) => {
    const firstLetter = word[0].toLowerCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(word);
    return acc;
  }, {});
}
const words = ["ram", "shyam", "vir"];
console.log(groupByFirstLetter(words));

// Q40
// Create a closure that tracks login attempts.
function createLoginTracker(maxAttempts) {
  let attempts = 0;
  return function (password) {
    if (attempts >= maxAttempts) {
      return "Access Denied: Account is permanently locked.";
    }
    if (password === "secret123") {
      attempts = 0;
      return "Login Successful!";
    } else {
      attempts++;
      if (attempts >= maxAttempts) {
        return "Account Locked: Too many failed attempts.";
      }
      return `Incorrect password. Remaining attempts: ${maxAttempts - attempts}`;
    }
  };
}
const login = createLoginTracker(3);
console.log(login("wrong1"));
console.log(login("wrong2"));
console.log(login("secret123"));

// Q41
// Fetch posts and print only titles containing more than 30 characters.
async function fetchLongTitles() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const filteredTitles = posts
      .filter((post) => post.title.length > 30)
      .map((post) => `(${post.title.length} chars) ${post.title}`);
  } catch (error) {
    console.error("Error loading posts:", error);
  }
}
fetchLongTitles();

// Q42
// Create a Promise that simulates an online payment system.
function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 0) resolve(`Payment of $${amount} successful`);
      else reject("Invalid amount");
    }, 1500);
  });
}
processPayment(2000);

// Q43
// Create a task manager using browser storage.
// Add, retrieve and delete tasks.
const taskManager = {
  storageKey: "user_tasks",
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    } catch {
      return [];
    }
  },
  add(task) {
    if (!task) return "Task cannot be empty";
    const tasks = this.getAll();
    tasks.push({ id: Date.now(), title: task });
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return "Task Added";
  },
  delete(id) {
    const tasks = this.getAll().filter((task) => task.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return "Task Deleted";
  },
};
taskManager.add("Learn JavaScript");
console.log(taskManager.getAll());
// Q44
// Create a student management system.
// Print topper, average and failed students.
function analyzeStudents(students) {
  let topper = students[0];
  let totalMarks = 0;
  const failed = [];
  for (let student of students) {
    totalMarks += student.marks;
    if (student.marks > topper.marks) {
      topper = student;
    }
    if (student.marks < 40) {
      failed.push(student.name);
    }
  }
  const average = totalMarks / students.length;
  console.log(`Top Performer  : ${topper.name} (${topper.marks} marks)`);
  console.log(`Class Average  : ${average.toFixed(2)}`);
  console.log(
    `Failed Students: ${failed.length > 0 ? failed.join(", ") : "None"}`,
  );
}
const classData = [
  { name: "Amit", marks: 85 },
  { name: "Rahul", marks: 35 },
  { name: "Priya", marks: 92 },
  { name: "Soniya", marks: 38 },
];

analyzeStudents(classData);
// Q45
// Create a function that merges two arrays without duplicate values.
function mergeArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Both inputs must be valid arrays";
  }
  const combined = [...arr1, ...arr2];
  const uniqueResult = Array.from(new Set(combined));
  return uniqueResult;
}
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [4, 5, 6, 7, 8];
console.log(mergeArrays(numbers1, numbers2));
// Q46
// Fetch todos and count how many are completed and pending.
async function countTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    let completedCount = 0;
    let pendingCount = 0;

    todos.forEach((todo) => {
      if (todo.completed) {
        completedCount++;
      } else {
        pendingCount++;
      }
    });
    console.log(`Total Todos   : ${todos.length}`);
    console.log(`Completed     : ${completedCount}`);
    console.log(`Pending/Open  : ${pendingCount}`);
  } catch (err) {
    console.error(err);
  }
}

countTodos();
// Q47
// Create a countdown timer from 10 to 1 and then print "Time Up".
function countdown(startFrom = 10) {
  let count = startFrom;
  console.log(`Timer initialized for ${startFrom} seconds...`);
  const timer = setInterval(() => {
    if (count > 0) {
      console.log(`Remaining: ${count}`);
      count--;
    } else {
      console.log("🚨 Time Up! 🚨");
      clearInterval(timer);
    }
  }, 1000);
}
countdown(5);
// Q48
// Create a bank account system.
// Add deposit, withdraw and current balance operations.
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return `Deposited: $${amount}. Current Balance: $${balance}`;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds configuration.";
      balance -= amount;
      return `Withdrew: $${amount}. Remaining Balance: $${balance}`;
    },
    getBalance() {
      return `Current Available Balance: $${balance}`;
    },
  };
}
const myAccount = createBankAccount(500);
console.log(myAccount.deposit(200));
console.log(myAccount.withdraw(100));
console.log(myAccount.withdraw(1000));
console.log(myAccount.getBalance());

// Q50
// Create a mini analytics system.
// Given an array of users, print:
// Total users
// Active users
// Inactive users
// Average age
// Youngest user
// Oldest user
function runAnalytics(arr) {
  const totalUsers = arr.length;
  const ActiveUsers = arr.filter((val) => val.status === "active").length;
  const InactiveUsers = arr.filter((val) => val.status !== "active").length;
  const total = arr.reduce((tot, curr) => {
    return tot + curr.age;
  }, 0);
  const averageAge = total / arr.length;
  const ages = arr.map((u) => u.age);
  const youngest = Math.min(...ages);
  const oldest = Math.max(...ages);
  console.log(`Total System Users : ${totalUsers}`);
  console.log(`Active Metrics     : ${ActiveUsers}`);
  console.log(`Inactive Metrics   : ${InactiveUsers}`);
  console.log(`Average  Age : ${averageAge}`);
  console.log(`Youngest Recorded  : ${youngest} years old`);
  console.log(`Oldest Recorded    : ${oldest} years old`);
}

const currentUsers = [
  { id: 1, name: "A", age: 22, status: "active" },
  { id: 2, name: "B", age: 34, status: "inactive" },
  { id: 3, name: "C", age: 19, status: "active" },
  { id: 4, name: "D", age: 45, status: "active" },
];

runAnalytics(currentUsers);
