const picker = new Pikaday({ field: document.getElementById("myDatepicker") });
const display = document.getElementById("dis");
const btn = document.getElementById("btn");

function getAge() {
  const birthdate = picker.getDate();

  if (!birthdate) {
    display.innerText = "Please select a date first!";
    return;
  }

  const today = new Date();

  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  display.innerText = `${years} years ${months} months ${days} days old`;
}
btn.addEventListener("click", () => {
  getAge();
});
