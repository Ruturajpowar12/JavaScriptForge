const month = document.getElementById("month");
const day = document.getElementById("day");
const dateIn = document.getElementById("date");
const year = document.getElementById("year");

const date = new Date();

month.innerText = date.toLocaleString("en", { month: "long" });

day.innerText = date.toLocaleString("en", {
    weekday: "long"
});

dateIn.innerText = date.getDate();

year.innerText = date.getFullYear();