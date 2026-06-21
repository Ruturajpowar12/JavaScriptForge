// Task 1
// Create an Employee Management System.
// Add, update, delete and search employees from an array of objects.
const employees = [
  {
    id: 1,
    name: "Rohit",
    department: "Frontend",
    salary: 65000,
  },
  {
    id: 2,
    name: "Virat Kohli",
    department: "Backend",
    salary: 75000,
  },
  {
    id: 3,
    name: "MS Dhoni",
    department: "DevOps",
    salary: 80000,
  },
  {
    id: 4,
    name: "Hardik Pandya",
    department: "QA",
    salary: 55000,
  },
];

employees.push({ id: 5, name: "Ram", department: "ai", salary: 60000 });
console.log(employees);

employees[0].salary = 70000;
employees.pop();
employees.shift();
const searchEmployee = employees.find(
  (employee) => (employee.department = "backend"),
);
console.log(searchEmployee);

// Task 2
// Create a Shopping Cart.
// Add products, remove products and calculate the grand total.
const products = [
  {
    id: 101,
    name: "Laptop",
    price: 65000,
    quantity: 1,
  },
  {
    id: 102,
    name: "Mouse",
    price: 800,
    quantity: 2,
  },
  {
    id: 103,
    name: "Keyboard",
    price: 1500,
    quantity: 1,
  },
  {
    id: 104,
    name: "Monitor",
    price: 12000,
    quantity: 1,
  },
];

products.push({ id: 105, name: "pen", price: 120, quantity: 1 });

products.shift();
console.log(products);

const grandTotal = products.reduce((acc, curr) => {
  return acc + curr["price"];
}, 0);
console.log(grandTotal);

// Task 3
// Create a Student Result System.
// Given an array of students, calculate percentage,
// assign grades and find toppers.
const students = [
  { id: 1, name: "Amit", marks: [85, 92, 78, 88, 90] },
  { id: 2, name: "Priya", marks: [95, 89, 96, 91, 93] },
  { id: 3, name: "Neha", marks: [65, 72, 70, 68, 74] },
  { id: 4, name: "Rahul", marks: [55, 62, 58, 60, 65] },
];

const updatedStudents = students.map((student) => {
  const totalMarks = student.marks.reduce((acc, curr) => acc + curr, 0);
  const percentage = totalMarks / student.marks.length;
  let grade;
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else grade = "F";

  return {
    ...student,
    percentage: percentage,
    grade: grade,
  };
});
const topper = updatedStudents.reduce((highest, current) => {
  return current.percentage > highest.percentage ? current : highest;
}, updatedStudents[0]);
console.log(updatedStudents);
console.log(
  `Congratulations ${topper.name} with ${topper.percentage}% (Grade: ${topper.grade})!`,
);

// Task 4
// Create a Task Manager (Todo App logic only).
// Add, edit, delete, search and filter tasks.
// Create a Task Manager (Todo App logic only).
// Add, edit, delete, search and filter tasks.
const tasks = [
  { id: 1, title: "Build Login Page", status: "Pending", priority: "High" },
  { id: 2, title: "Fix Navbar", status: "Completed", priority: "Medium" },
  { id: 3, title: "Connect API", status: "Pending", priority: "High" },
  { id: 4, title: "Deploy Project", status: "In Progress", priority: "Low" },
];
function addTask(arr, title, priority) {
  const newTask = {
    id: arr.length > 0 ? arr[arr.length - 1].id + 1 : 1,
    title,
    status: "Pending",
    priority,
  };
  return [...arr, newTask];
}
function editTask(arr, id, updatedFields) {
  return arr.map((task) =>
    task.id === id ? { ...task, ...updatedFields } : task,
  );
}
function deleteTask(arr, id) {
  return arr.filter((task) => task.id !== id);
}
function searchTasks(arr, query) {
  return arr.filter((task) =>
    task.title.toLowerCase().includes(query.toLowerCase()),
  );
}
function filterTasks(arr, key, value) {
  return arr.filter((task) => task[key] === value);
}

let currentTasks = [
  { id: 1, title: "Build Login Page", status: "Pending", priority: "High" },
  { id: 2, title: "Fix Navbar", status: "Completed", priority: "Medium" },
  { id: 3, title: "Connect API", status: "Pending", priority: "High" },
  { id: 4, title: "Deploy Project", status: "In Progress", priority: "Low" },
];

currentTasks = addTask(currentTasks, "Write Unit Tests", "Medium");
console.log(currentTasks);

currentTasks = editTask(currentTasks, 1, { status: "Completed" });
console.log(currentTasks);

currentTasks = deleteTask(currentTasks, 2);
console.log(currentTasks);

const searchResults = searchTasks(currentTasks, "api");
console.log(searchResults);

const highPriorityTasks = filterTasks(currentTasks, "priority", "High");
console.log(highPriorityTasks);

// Task 5
// Create a Debounced Search feature.
// When a user types, delay API calls by 500ms.
const users = [
  "Ruturaj",
  "Abhishek",
  "Rushikesh",
  "Akash",
  "Pooja",
  "Sakshi",
  "Kunal",
  "Shubham",
];

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function searchUsers(query) {
  const result = users.filter((user) =>
    user.toLowerCase().includes(query.toLowerCase()),
  );
  console.log(result);
}

const debouncedSearch = debounce(searchUsers, 500);
debouncedSearch("R");
setTimeout(() => debouncedSearch("Ru"), 100);
setTimeout(() => debouncedSearch("Rut"), 200);

// Task 6
// Fetch data from a public API using async/await.
// Handle loading, success and error states.
async function fetchUsers() {
  console.log("Loading...");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchUsers();
