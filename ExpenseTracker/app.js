const nameEx = document.querySelector("#Expense-Name");
const amount = document.querySelector("#Amount");
const btn = document.querySelector("#Add");
const ul = document.querySelector("ul");

const total = document.querySelector("#total");
const clearAll = document.querySelector("#clearAll");
const themeBtn = document.querySelector("#themeBtn");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

renderExpenses();



btn.addEventListener("click", (e) => {
    e.preventDefault();

    const userExpense = nameEx.value.trim();
    const userAmount = amount.value.trim();

    if(userExpense === "" || userAmount === ""){
        alert("Please fill all fields");
        return;
    }

    const expense = {
        id: Date.now(),
        title: userExpense,
        amount: Number(userAmount),
        date: new Date().toLocaleDateString()
    };

    expenses.push(expense);

    saveExpenses();
    renderExpenses();

    nameEx.value = "";
    amount.value = "";
});



function renderExpenses(){

    ul.innerHTML = "";

    let totalExpense = 0;

    expenses.forEach((expense)=>{

        totalExpense += expense.amount;

        const li = document.createElement("li");

        li.innerHTML = `
            <div class="expense-info">
                <strong>${expense.title}</strong>
                <br>
                <small>${expense.date}</small>
            </div>

            <span class="expense-amount">
                ₹${expense.amount}
            </span>

            <button class="delete-btn">
                Delete
            </button>
        `;

        li.addEventListener("click",()=>{
            li.classList.toggle("completed");
        });

        const deleteBtn = li.querySelector(".delete-btn");

        deleteBtn.addEventListener("click",(e)=>{
            e.stopPropagation();

            expenses = expenses.filter(
                item => item.id !== expense.id
            );

            saveExpenses();
            renderExpenses();
        });

        ul.appendChild(li);
    });

    total.textContent = totalExpense;
}

/* Local Storage */

function saveExpenses(){
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}

/* Clear All */

clearAll.addEventListener("click",()=>{

    if(confirm("Delete all expenses?")){

        expenses = [];

        localStorage.removeItem("expenses");

        renderExpenses();
    }
});

/* Theme Toggle */

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    const currentTheme =
        document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("theme",currentTheme);
});

/* Load Theme */

window.addEventListener("DOMContentLoaded",()=>{

    const savedTheme =
        localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark");
    }
});