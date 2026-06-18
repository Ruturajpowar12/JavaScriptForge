const num = document.getElementById("num");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

function updateUi() {
  const currentCount = Number(num.innerText);
  if (currentCount === 0) {
    decrease.classList.add("btn-disabled");
  } else {
    decrease.classList.remove("btn-disabled");
  }
}

increase.addEventListener("click", () => {
  num.innerText++;
  updateUi();
});

decrease.addEventListener("click", () => {
  num.innerText--;
  updateUi();
});

reset.addEventListener("click", () => {
  num.innerText = 0;
  updateUi();
});

updateUi();
