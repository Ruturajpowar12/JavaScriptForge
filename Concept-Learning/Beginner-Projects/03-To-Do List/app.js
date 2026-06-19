const task = document.querySelector("input");
const addBtn = document.getElementById("add");
const ul = document.querySelector("#task-list");
const storageView = document.getElementById("storage-view");
const clearStorageBtn = document.getElementById("clear-storage");

let savedTasks = JSON.parse(localStorage.getItem("todo_tasks")) || [];

function updateStorageDisplay() {
  storageView.textContent = JSON.stringify(savedTasks, null, 2);
}

window.addEventListener("DOMContentLoaded", () => {
  savedTasks.forEach((t) => updateUi(t.text, t.completed));
  updateStorageDisplay();
});

addBtn.addEventListener("click", () => {
  const inputTask = task.value.trim();

  if (inputTask === "") {
    alert("Please enter your task!");
    return;
  }

  updateUi(inputTask, false);

  savedTasks.push({ text: inputTask, completed: false });
  localStorage.setItem("todo_tasks", JSON.stringify(savedTasks));
  updateStorageDisplay();

  task.value = "";
});

function updateUi(userTask, isCompleted) {
  const li = document.createElement("li");

  li.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "px-4",
    "border-b-2",
    "pb-4",
    "border-gray-200",
    "font-semibold",
    "cursor-pointer",
  );

  const iconClass = isCompleted ? "fi-br-check" : "fi-bs-circle";
  const textClass = isCompleted ? "line-through text-gray-400" : "";

  li.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="text-green-400 icon-container flex items-center">
        <i class="fi ${iconClass}"></i> 
      </span>
      <span class="task-text ${textClass}">${userTask}</span>
    </div>
  `;

  const icon = li.querySelector(".icon-container i");
  li.addEventListener("click", () => {
    const taskIndex = savedTasks.findIndex((t) => t.text === userTask);

    if (icon.classList.contains("fi-bs-circle")) {
      icon.classList.replace("fi-bs-circle", "fi-br-check");
      li.querySelector(".task-text").classList.add(
        "line-through",
        "text-gray-400",
      );
      if (taskIndex !== -1) savedTasks[taskIndex].completed = true;
    } else {
      icon.classList.replace("fi-br-check", "fi-bs-circle");
      li.querySelector(".task-text").classList.remove(
        "line-through",
        "text-gray-400",
      );
      if (taskIndex !== -1) savedTasks[taskIndex].completed = false;
    }

    localStorage.setItem("todo_tasks", JSON.stringify(savedTasks));
    updateStorageDisplay();
  });

  const delBtn = document.createElement("button");
  delBtn.classList.add(
    "text-red-500",
    "cursor-pointer",
    "flex",
    "items-center",
  );
  delBtn.innerHTML = `<i class="fi fi-bs-trash"></i>`;

  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();

    savedTasks = savedTasks.filter((t) => t.text !== userTask);
    localStorage.setItem("todo_tasks", JSON.stringify(savedTasks));
    updateStorageDisplay();
  });

  li.appendChild(delBtn);
  ul.appendChild(li);
}

clearStorageBtn.addEventListener("click", () => {
  localStorage.removeItem("todo_tasks");
  savedTasks = [];
  ul.innerHTML = "";
  updateStorageDisplay();
});
