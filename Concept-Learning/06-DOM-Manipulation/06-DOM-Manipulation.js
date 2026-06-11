// Module 6: DOM Manipulation (Part 1)
// Selecting Elements & Modifying Content

const heading = document.querySelector("#heading");
heading.textContent = "Welcome to JavaScript DOM";

const msg = document.getElementById("message");
msg.textContent = "New Message";

const container = document.querySelector("#container");
container.innerHTML = "<h2>Learning DOM</h2>";

const title = document.getElementsByClassName("title");
for (let item of title) {
  console.log(item.textContent);
}
console.log(title);

const name = document.querySelector("#name");
name.textContent = "Ruturaj Powar";

const profile = document.querySelector("#profile");
profile.innerHTML = "<h2>Ruturaj</h2> <p>BCA Student</p>";
