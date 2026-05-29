const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");


// Get tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Show saved tasks on screen
tasks.forEach((task) => {
    createTask(task);
});


// Add Button Event
addBtn.addEventListener("click", () => {
    if(taskInput.value === ""){
        return;
    }

    const taskText = taskInput.value;

    // Add task into array
    tasks.push(taskText);

    // Save into localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Create UI
    createTask(taskText);

    // Clear input
    taskInput.value = "";
});


// Function to create task
function createTask(taskText){

    const li = document.createElement("li");
    li.innerText = taskText;

    // Delete Button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    li.appendChild(delBtn);

    taskList.appendChild(li);



    // Delete Task
    delBtn.addEventListener("click", () => {

        li.remove();

        // Remove from array
        tasks = tasks.filter((task) => {
            return task !== taskText;
        });

        // Update localStorage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });



    // Complete Task
    li.addEventListener("click", () => {

        li.style.textDecoration = "line-through";
    });
}