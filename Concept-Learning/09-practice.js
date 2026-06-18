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
