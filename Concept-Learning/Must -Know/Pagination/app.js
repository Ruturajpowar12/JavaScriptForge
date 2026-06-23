const employees = [
  { id: 1, name: "Rohit", department: "IT" },
  { id: 2, name: "Priya", department: "HR" },
  { id: 3, name: "Aman", department: "IT" },
  { id: 4, name: "Sneha", department: "Finance" },
  { id: 5, name: "Ruturaj", department: "IT" },
  { id: 6, name: "Karan", department: "Finance" },
  { id: 7, name: "Anjali", department: "HR" },
  { id: 8, name: "Vikas", department: "IT" },
  { id: 9, name: "Meera", department: "Finance" },
  { id: 10, name: "Ajay", department: "IT" },
  { id: 11, name: "Pooja", department: "HR" },
  { id: 12, name: "Sahil", department: "IT" },
];

const container = document.querySelector(".container");
const prevBtn = document.getElementById("perv");
const nextBtn = document.getElementById("next");

let currentPage = 1;
const itemsPerPage = 4;

function displayPage(page) {
  container.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = employees.slice(startIndex, endIndex);

  paginatedItems.forEach((employee) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
      <h3>${employee.name}</h3>
      <p>ID: ${employee.id}</p>
      <p>Dept: ${employee.department}</p>
    `;
    container.appendChild(box);
  });

  prevBtn.disabled = page === 1;
  nextBtn.disabled = page === Math.ceil(employees.length / itemsPerPage);
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(employees.length / itemsPerPage)) {
    currentPage++;
    displayPage(currentPage);
  }
});

displayPage(currentPage);
