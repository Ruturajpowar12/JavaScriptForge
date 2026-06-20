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
const averageAge = users.reduce((acc, curr) => {
  const Total = acc + curr.age;
  return Math.floor(Total / users.length);
}, 0);
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
  acc[field] = (acc[field] || 0) + 1;
  return acc;
}, {});
console.log(countDepartments);
