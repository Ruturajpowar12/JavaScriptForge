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
