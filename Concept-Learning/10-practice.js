const { use } = require("react");

// Task 1
const employees = [
  { id: 1, name: "A", salary: 50000 },
  { id: 2, name: "B", salary: 70000 },
  { id: 3, name: "C", salary: 40000 },
];
const employeeNames = employees.map((emp) => {
  return emp.name;
});
console.log(employeeNames);

//task2
const salaryGreater = employees.filter((emp) => emp.salary > 50000);
console.log(salaryGreater);

//task3
const findId = employees.find((emp) => emp.id === 2);
console.log(findId);

//task4
const totalSalary = employees.reduce((tot, curr) => tot + curr.salary, 0);
console.log(totalSalary);

//task 5

const techs = ["react", "node", "react", "js", "node"];
const countingOccurrence = techs.reduce((acc, tech) => {
  acc[tech] = (acc[tech] || 0) + 1;
  return acc;
}, {});
console.log(countingOccurrence);

// task1
const users = [
  { id: 1, name: "John", age: 28, active: true },
  { id: 2, name: "Alex", age: 35, active: false },
  { id: 3, name: "David", age: 22, active: true },
  { id: 4, name: "Emma", age: 30, active: true },
];
const userNames = users.map((user) => user.name);
console.log(userNames);

//task2
const activeUsers = users.filter((user) => user.active === true);
console.log(activeUsers);

//task3
const userId = users.find((user) => user.name === "Emma");
console.log(userId);

//task4
const totalAge = users.reduce((total, user) => total + user.age, 0);
const averageAge = totalAge / users.length;

console.log(averageAge);

// /task5
const higherAgeActiveUsers = users
  .filter((user) => user.active === true && user.age > 25)
  .map((user) => user);
console.log(higherAgeActiveUsers);

//task6
const data = [
  { department: "IT" },
  { department: "HR" },
  { department: "IT" },
  { department: "Finance" },
  { department: "HR" },
];

const countDepartments = data.reduce((acc, field) => {
  const dept = field.department;
  acc[dept] = (acc[dept] || 0) + 1;
  return acc;
}, {});
console.log(countDepartments);

//Task 1 (Event Loop)

console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
console.log("C");
//A
// C
// B

//task2
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);
console.log(4);
//1
// 3
// 4
// 2

//task3

const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    setTimeout(() => {
      resolve("User fetched successfully");
    }, 2000);
  } else {
    reject("Something went wrong");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//task5
function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login Success");
      resolve();
    }, 1000);
  });
}
function getProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Profile Loaded");
      resolve();
    }, 1000);
  });
}
login().then(getProfile);
