
const habitInput = document.getElementById("habit-input");
const addBtn = document.getElementById("add-btn");
const habitList = document.querySelector(".habit-list");

const totalHabits = document.getElementById("total-habits");
const completedHabits = document.getElementById("completed-habits");
const pendingHabits = document.getElementById("pending-habits");
const completionRate = document.getElementById("completion-rate");

const allBtn = document.getElementById("all-btn");
const completedBtn = document.getElementById("completed-btn");
const pendingBtn = document.getElementById("pending-btn");

const themeBtn = document.getElementById("theme-btn");

let habits = JSON.parse(localStorage.getItem("habits")) || [];
let filter = "all";

showDate();
renderHabits();

addBtn.addEventListener("click", addHabit);

habitInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addHabit();
    }
});

function addHabit(){

    const habitName = habitInput.value.trim();

    if(habitName === ""){
        alert("Enter a habit");
        return;
    }

    habits.push({
        name: habitName,
        completed: false
    });

    habitInput.value = "";

    saveHabits();
    renderHabits();
}

function renderHabits(){

    habitList.innerHTML = "";

    let filteredHabits = habits;

    if(filter === "completed"){
        filteredHabits = habits.filter(h => h.completed);
    }

    if(filter === "pending"){
        filteredHabits = habits.filter(h => !h.completed);
    }

    filteredHabits.forEach((habit,index)=>{

        const card = document.createElement("div");
        card.classList.add("habit-card");

        card.innerHTML = `
            <div class="habit-info">
                <h3 style="${habit.completed ? 'text-decoration:line-through' : ''}">
                    ${habit.name}
                </h3>

                <p>
                    ${habit.completed ? 'Completed' : 'Pending'}
                </p>
            </div>

            <div class="habit-actions">
                <button class="complete-btn">
                    ${habit.completed ? 'Undo' : 'Complete'}
                </button>

                <button class="delete-btn">
                    Delete
                </button>
            </div>
        `;

        card.querySelector(".complete-btn")
        .addEventListener("click", ()=>{

            habits[index].completed =
            !habits[index].completed;

            saveHabits();
            renderHabits();
        });

        card.querySelector(".delete-btn")
        .addEventListener("click", ()=>{

            habits.splice(index,1);

            saveHabits();
            renderHabits();
        });

        habitList.appendChild(card);
    });

    updateStats();
}

function updateStats(){

    const total = habits.length;

    const completed =
    habits.filter(h=>h.completed).length;

    const pending = total - completed;

    const percent =
    total === 0
    ? 0
    : Math.round((completed/total)*100);

    totalHabits.textContent = total;
    completedHabits.textContent = completed;
    pendingHabits.textContent = pending;
    completionRate.textContent = percent + "%";
}

function saveHabits(){
    localStorage.setItem(
        "habits",
        JSON.stringify(habits)
    );
}

allBtn.addEventListener("click",()=>{
    filter = "all";
    renderHabits();
});

completedBtn.addEventListener("click",()=>{
    filter = "completed";
    renderHabits();
});

pendingBtn.addEventListener("click",()=>{
    filter = "pending";
    renderHabits();
});

function showDate(){

    const date = new Date();

    document.getElementById("current-date")
    .textContent =
    date.toDateString();
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );
});

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
}

