// Module 6: DOM Manipulation (Part 1)
// Selecting Elements & Modifying Content

// const heading = document.querySelector("#heading");
// heading.textContent = "Welcome to JavaScript DOM";

// const msg = document.getElementById("message");
// msg.textContent = "New Message";

// const container = document.querySelector("#container");
// container.innerHTML = "<h2>Learning DOM</h2>";

// const title = document.getElementsByClassName("title");
// for (let item of title) {
//   console.log(item.textContent);
// }
// console.log(title);

// const name = document.querySelector("#name");
// name.textContent = "Ruturaj Powar";

// const profile = document.querySelector("#profile");
// profile.innerHTML = "<h2>Ruturaj</h2> <p>BCA Student</p>";

// Module 6: DOM Manipulation (Part 2)
// Styling Elements & Event Handling
// Practical Task 1
const heading = document.getElementById("heading");
heading.style.color = "blue";
heading.style.fontSize = "50px";

// Practical Task 2
const msg = document.getElementById("message");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  msg.textContent = "Welcome to DOM";
});

//Practical Task 3
const box = document.getElementById("box");
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  box.style.backgroundColor = "green";
  box.style.color = "white";
});

//Practical Task 4
const num = document.getElementById("counter");
const increase = document.getElementById("increase");
let count = 0;
increase.addEventListener("click", () => {
  num.textContent = count++;

  if (count % 2 === 0) {
    num.style.color = "blue";
  } else {
    num.style.color = "red";
  }
});

//Mini Project ⭐
const title = document.getElementById("title");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (title.innerText === "Light OFF") {
    title.textContent = "Light ON";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    title.textContent = "Light OFF";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

//Mini Project ⭐⭐
const greetBtn = document.getElementById("greetBtn");
const p = document.querySelector("#p");

greetBtn.addEventListener("click", () => {
  p.textContent = "Hello Ruturaj!";
});
