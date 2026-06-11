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

// // Module 6: DOM Manipulation (Part 2)
// // Styling Elements & Event Handling
// // Practical Task 1
// const heading = document.getElementById("heading");
// heading.style.color = "blue";
// heading.style.fontSize = "50px";

// // Practical Task 2
// const msg = document.getElementById("message");
// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   msg.textContent = "Welcome to DOM";
// });

// //Practical Task 3
// const box = document.getElementById("box");
// const colorBtn = document.getElementById("colorBtn");
// colorBtn.addEventListener("click", () => {
//   box.style.backgroundColor = "green";
//   box.style.color = "white";
// });

// //Practical Task 4
// const num = document.getElementById("counter");
// const increase = document.getElementById("increase");
// let count = 0;
// increase.addEventListener("click", () => {
// count++
//   num.textContent = count;

//   if (count % 2 === 0) {
//     num.style.color = "blue";
//   } else {
//     num.style.color = "red";
//   }
// });

// //Mini Project ⭐
// const title = document.getElementById("title");
// const toggleBtn = document.getElementById("toggleBtn");

// toggleBtn.addEventListener("click", () => {
//   if (title.innerText === "Light OFF") {
//     title.textContent = "Light ON";
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   } else {
//     title.textContent = "Light OFF";
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// });

// //Mini Project ⭐⭐
// const greetBtn = document.getElementById("greetBtn");
// const p = document.querySelector("#p");

// greetBtn.addEventListener("click", () => {
//   p.textContent = "Hello Ruturaj!";
// });

// Module 6: DOM Manipulation (Part 3)
// Forms & Validation

// Practical Task 1
const name = document.getElementById("name");
const btn = document.getElementById("showBtn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  output.textContent = name.value.trim();
});

//Practical Task 2
const age = document.getElementById("age");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");
checkBtn.addEventListener("click", () => {
  const userAge = age.value.trim();

  if (userAge >= 18) {
    result.textContent = "Eligible to Vote";
  } else {
    result.textContent = "Not Eligible";
  }
});

// Practical Task 3
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");
const originalUser = "admin";
const originalPassword = 1234;

loginBtn.addEventListener("click", () => {
  const userName = String(username.value.trim());
  const userPassword = Number(password.value.trim());
  if (originalUser == userName && originalPassword === userPassword) {
    message.textContent = "Login Successful";
  } else {
    message.textContent = "Invalid Credentials";
  }
});

//Practical Task 4
const textInput = document.getElementById("textInput");
const countBtn = document.getElementById("countBtn");
const countResult = document.getElementById("countResult");

countBtn.addEventListener("click", () => {
  let count = 0;
  const input = textInput.value.trim();
  for (let val in input) {
    count++;
  }
  countResult.textContent = `Characters: ${count}`;
});

//Mini Project ⭐
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const answer = document.getElementById("answer");
addBtn.addEventListener("click", () => {
  const input1 = Number(num1.value.trim());
  const input2 = Number(num2.value.trim());

  answer.textContent = `Addition is ${input1 + input2}`;
});

//Mini Project ⭐⭐
const name1 = document.getElementById("name1");
const course = document.getElementById("course");
const college = document.getElementById("college");
const submit = document.getElementById("submit");
const ansBox = document.getElementById("ansBox");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const userName = name1.value.trim();
  const courseName = course.value.trim();
  const collegeName = college.value.trim();

  if (userName === "" || courseName === "" || collegeName === "") {
    alert("please fill the info!");
  }

  updateUi(userName, courseName, collegeName);
});
function updateUi(userName, courseName, collegeName) {
  ansBox.innerHTML = `<p>Name :${userName}</p> <p>Course :${courseName}</p> <p>College :${collegeName}</p>
`;
}
