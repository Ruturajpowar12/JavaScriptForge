const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  getPosts();
});

//Topic 1: Fetch API → Display Data in UI
//Task 1

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    const postList = document.getElementById("postList");
    postList.innerHTML = posts
      .map((post) => {
        return `<div> Title is: ${post.title}</div>
    <div> Body is ${post.body}</div>`;
      })
      .join("");
  } catch (error) {
    console.log(error.message);
  }
}
getPosts();

//task2
async function getTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    const todoDisplay = document.getElementById("todoDisplay");
    todoDisplay.innerHTML = data
      .map((todo) => {
        return `<div> <strong>Title:</strong>${todo.title}</div>
    <div><strong>Status:</strong> ${todo.completed ? "Done" : "pending"}</div>`;
      })
      .join("");
  } catch (error) {
    console.error("Error fetching todo", error);
  }
}
getTodos();

//task3
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const userDisplay = document.getElementById("userDisplay");

    userDisplay.innerHTML = users
      .map(
        (user) => `<div><strong>Name:</strong>${user.name}</div>
    <div><strong>username:</strong>${user.username}</div>
    <div><strong>Name:</strong>${user.phone}</div>`,
      )
      .join("");
  } catch (error) {
    console.log(error.message);
  }
}
getUsers();

//task4
async function getTodos() {
  const todoDisplay = document.getElementById("todoDisplay");
  try {
    todoDisplay.innerHTML = "<div>Loading...</div>";

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    todoDisplay.innerHTML = data
      .map((todo) => {
        return `
        <div>
          <h3>${todo.title}</h3>
          <p>Status: ${todo.completed ? "✅ Done" : "⏳ Pending"}</p>
        </div>
      `;
      })
      .join("");
  } catch (error) {
    todoDisplay.innerHTML = "<div>Error loading data.</div>";
    console.error(error);
  }
}

// Mini Challenge
const employeeDisplay = document.getElementById("employeeDisplay");
async function getEmployee() {
  try {
    employeeDisplay.innerHTML = `<div> Data Loading......</div>`;

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    employeeDisplay.innerHTML = data
      .map(
        (
          user,
        ) => `<div>Employee Card</div><div><strong>Name:</strong>${user.name}</div> <div><strong>Name:</strong>${user.email}</div>
    <div><strong>Name:</strong>${user.phone}</div>
    <div><strong>Name:</strong>${user.company.name}</div
    `,
      )
      .join("");
  } catch (error) {
    employeeDisplay.innerHTML = `<div>Error in fetching Data : ${error.message}</div>`;
    console.log(error.message);
  }
}

getEmployee();
