//project 1 - Counter App
const userCount = document.getElementById("count");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

function counterTask() {
  if (userCount.innerText === "0") {
    decrease.style.backgroundColor = "grey";
    decrease.style.pointerEvents = "none";
  } else {
    decrease.style.backgroundColor = "";
    decrease.style.pointerEvents = "auto";
  }
}

increase.addEventListener("click", () => {
  userCount.innerText++;
  counterTask();
});

reset.addEventListener("click", () => {
  userCount.innerText = 0;
  counterTask();
});
decrease.addEventListener("click", () => {
  userCount.innerText--;
  counterTask();
});

counterTask();
