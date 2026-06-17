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

// Q23
// Create a counter system that can increment and decrement values.

// Q24
// Create a function that accepts a sentence and count total words.

// Q25
// Create an array of prices and apply a 10% discount.

// Q26
// Create an array and rotate it one position to the right.

// Q27
// Create an object representing a movie and print all keys only.

// Q28
// Create a function that swaps two numbers without creating a third variable.

// Q29
// Create an array of numbers and print frequency of each number.

// Q30
// Create an array of employees and print employees older than 25.

// Q31
// Create a function that checks whether a number is prime.

// Q32
// Create an object representing a library.
// Add an array of books and print book names.

// Q33
// Create an array and separate even and odd numbers.

// Q34
// Create a function that capitalizes the first letter of every word.

// Q35
// Create a timer that prints a message after 5 seconds.

// ---------- 🔴 HARD (36-50) ----------

// Q36
// Create a user registration system.
// Store users inside an array and prevent duplicate emails.

// Q37
// Fetch users and print only users whose website ends with ".org".

// Q38
// Create a shopping cart system.
// Add items, remove items and calculate the total amount.

// Q39
// Create a function that groups words by their first letter.

// Q40
// Create a closure that tracks login attempts.

// Q41
// Fetch posts and print only titles containing more than 30 characters.

// Q42
// Create a Promise that simulates an online payment system.

// Q43
// Create a task manager using browser storage.
// Add, retrieve and delete tasks.

// Q44
// Create a student management system.
// Print topper, average and failed students.

// Q45
// Create a function that merges two arrays without duplicate values.

// Q46
// Fetch todos and count how many are completed and pending.

// Q47
// Create a countdown timer from 10 to 1 and then print "Time Up".

// Q48
// Create a bank account system.
// Add deposit, withdraw and current balance operations.

// Q49
// Create a function that compares two objects and checks if they are equal.

// Q50
// Create a mini analytics system.
// Given an array of users, print:
// Total users
// Active users
// Inactive users
// Average age
// Youngest user
// Oldest user
