const input = document.querySelector("#inputTask");
const btn = document.querySelector("#addtask");
const ul = document.querySelector("ul");

const allBtn = document.querySelector("#all");
const activeBtn = document.querySelector("#active");
const completedBtn = document.querySelector("#completed");

const taskCount = document.querySelector(".tracker p");

let tasks = [];

btn.addEventListener("click", addTask);



function addTask() {
    const userInput = input.value.trim();

    if (userInput === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: userInput,
        completed: false
    });

    input.value = "";
    renderTasks(tasks);
}

function renderTasks(taskArray) {
    ul.innerHTML = "";

    taskArray.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="task-left">
                <i class="${task.completed ? "fa-solid fa-circle-check" : "fa-regular fa-circle"}"></i>
                <span>${task.text}</span>
            </div>

            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        li.querySelector(".task-left").addEventListener("click", () => {
            task.completed = !task.completed;
            renderTasks(tasks);
        });

        li.querySelector(".delete-btn").addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks(tasks);
        });

        ul.appendChild(li);
    });

    updateCounter();
}

function updateCounter() {
    const activeTasks = tasks.filter(task => !task.completed).length;
    taskCount.textContent = `${activeTasks} task left`;
}

allBtn.addEventListener("click", () => {
    renderTasks(tasks);
});

activeBtn.addEventListener("click", () => {
    renderTasks(tasks.filter(task => !task.completed));
});

completedBtn.addEventListener("click", () => {
    renderTasks(tasks.filter(task => task.completed));
});

renderTasks(tasks);