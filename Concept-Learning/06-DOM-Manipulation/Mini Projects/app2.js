//project 2 - color changer
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const data = document.getElementById("rgb");
const container = document.querySelector(".color-container");

function UpdateColor() {
  const r = red.value;
  const g = green.value;
  const b = blue.value;

  container.style.backgroundColor = `rgb(${r},${g},${b})`;
  data.innerText = `rgb(${r},${g},${b})`;
}

red.addEventListener("input", UpdateColor);
green.addEventListener("input", UpdateColor);
blue.addEventListener("input", UpdateColor);

UpdateColor();
