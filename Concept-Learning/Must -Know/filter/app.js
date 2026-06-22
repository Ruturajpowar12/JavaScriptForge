const employees = [
  {
    id: 1,
    name: "Rohit",
    department: "IT",
    role: "Frontend Developer",
    status: "Active",
    experience: 3,
  },

  {
    id: 2,
    name: "Priya",
    department: "HR",
    role: "HR Manager",
    status: "Active",
    experience: 5,
  },

  {
    id: 3,
    name: "Aman",
    department: "IT",
    role: "Backend Developer",
    status: "Inactive",
    experience: 2,
  },

  {
    id: 4,
    name: "Sneha",
    department: "Finance",
    role: "Accountant",
    status: "Active",
    experience: 4,
  },

  {
    id: 5,
    name: "Ruturaj",
    department: "IT",
    role: "Full Stack Developer",
    status: "Active",
    experience: 1,
  },

  {
    id: 6,
    name: "Karan",
    department: "Finance",
    role: "Analyst",
    status: "Inactive",
    experience: 6,
  },
];

const departmentFilter = document.getElementById("departmentFilter");
const displayEmployees = document.getElementById("displayEmployees");

function display(data, selectedDepartment) {
  displayEmployees.innerHTML = "";

  if (data.length === 0) {
    displayEmployees.innerHTML = "<h2>No employees found</h2>";
    return;
  }

  const h2 = document.createElement("h2");
  h2.innerText = `Department: ${selectedDepartment}`;
  displayEmployees.appendChild(h2);

  const listContent = data
    .map((employee) => `<h3>${employee.name} : ${employee.role}</h3>`)
    .join("");

  displayEmployees.insertAdjacentHTML("beforeend", listContent);
}

departmentFilter.addEventListener("change", (e) => {
  const selectedDepartment = e.target.value;

  const filteredEmployees =
    selectedDepartment === "All"
      ? employees
      : employees.filter(
          (employee) => employee.department === selectedDepartment,
        );

  display(filteredEmployees, selectedDepartment);
});

//task2
const StatusFilter = document.getElementById("StatusFilter");
const statusOfEmployee = document.getElementById("statusOfEmployee");

function renderStatus(data, status) {
  statusOfEmployee.innerHTML = "";

  if (data.length === 0) {
    statusOfEmployee.innerHTML = "<h2>No employees found</h2>";
    return;
  }

  const h2 = document.createElement("h2");
  h2.innerText = `Employees Who Are ${status}`;
  statusOfEmployee.appendChild(h2);

  const listContent = data
    .map((employee) => `<h3>${employee.name} : ${employee.status}</h3>`)
    .join("");

  statusOfEmployee.insertAdjacentHTML("beforeend", listContent);
}

StatusFilter.addEventListener("change", (e) => {
  const selectedStatus = e.target.value;

  const filterStatus =
    selectedStatus === "All"
      ? employees
      : employees.filter((employee) => employee.status === selectedStatus);

  renderStatus(filterStatus, selectedStatus);
});

//task3
const experienceFilter = document.getElementById("experianceFilter");
const displayExperience = document.getElementById("displayExperiance");

function displayEmp(data) {
  if (data.length === 0) {
    displayExperience.innerHTML = `<h2>No found Employee</h2>`;
    return;
  }

  displayExperience.innerHTML = data
    .map(
      (employee) => `<h3>${employee.name}: ${employee.experience} years</h3>`,
    )
    .join("");
}

experienceFilter.addEventListener("change", (e) => {
  const selectedExperience = e.target.value;

  const filterData =
    selectedExperience === "All"
      ? employees
      : employees.filter(
          (employee) => employee.experience >= Number(selectedExperience),
        );

  displayEmp(filterData);
});

//Mini Challenge
const empFilter = document.getElementById("empFilter");
const dashBoard = document.getElementById("displaydashboard");

function displayUI(data, filterKey) {
  dashBoard.innerHTML = "";

  if (data.length === 0) {
    dashBoard.innerHTML = `<h2>Data Not Found!</h2>`;
    return;
  }

  const h2 = document.createElement("h2");
  h2.textContent = `Employees: ${filterKey}`;
  h2.classList.add("h2");
  dashBoard.appendChild(h2);

  const listContent = data
    .map((employee) => {
      const propertyKey = filterKey.toLowerCase();
      const displayValue =
        filterKey === "All"
          ? `${employee.role} (${employee.department})`
          : employee[propertyKey];

      return `
      <div class="box">
        <h3>Name : ${employee.name}</h3>
        <h4>${filterKey} : ${displayValue}</h4>
      </div>
    `;
    })
    .join("");

  dashBoard.insertAdjacentHTML("beforeend", listContent);
}

empFilter.addEventListener("change", (e) => {
  const selected = e.target.value;
  displayUI(employees, selected);
});

displayUI(employees, "All");
