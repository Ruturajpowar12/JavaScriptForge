const employees = [
  { id: 1, name: "Rohit", department: "IT", experience: 3, salary: 45000 },
  { id: 2, name: "Priya", department: "HR", experience: 5, salary: 60000 },
  { id: 3, name: "Aman", department: "IT", experience: 2, salary: 40000 },
  { id: 4, name: "Sneha", department: "Finance", experience: 4, salary: 55000 },
  { id: 5, name: "Ruturaj", department: "IT", experience: 1, salary: 35000 },
];

const task1Sort = document.getElementById("task1Sort");
const task1Container = document.getElementById("task1Container");

const task2Sort = document.getElementById("task2Sort");
const task2Container = document.getElementById("task2Container");

const task3Sort = document.getElementById("task3Sort");
const task3Container = document.getElementById("task3Container");

const miniDeptFilter = document.getElementById("miniDeptFilter");
const miniSortControl = document.getElementById("miniSortControl");
const miniContainer = document.getElementById("miniContainer");

function generateHTML(data) {
  if (data.length === 0) {
    return `<h4>No employees found</h4>`;
  }
  return data
    .map(
      (employee) => `
    <div class="box">
      <h3>Name: ${employee.name}</h3>
      <h4>Dept: ${employee.department}</h4>
      <p>Experience: ${employee.experience} years</p>
      <p>Salary: ₹${employee.salary}</p>
    </div>
  `,
    )
    .join("");
}

task1Sort.addEventListener("change", (e) => {
  const value = e.target.value;
  let data = [...employees];
  if (value === "lowHigh") {
    data.sort((a, b) => a.experience - b.experience);
  } else if (value === "highLow") {
    data.sort((a, b) => b.experience - a.experience);
  }

  task1Container.innerHTML = generateHTML(data);
});

task2Sort.addEventListener("change", (e) => {
  const value = e.target.value;
  let data = [...employees];
  if (value === "lowHigh") {
    data.sort((a, b) => a.salary - b.salary);
  } else if (value === "highLow") {
    data.sort((a, b) => b.salary - a.salary);
  }
  task2Container.innerHTML = generateHTML(data);
});

task3Sort.addEventListener("change", (e) => {
  const value = e.target.value;
  let data = [...employees];
  if (value === "nameAZ") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  }
  task3Container.innerHTML = generateHTML(data);
});

function processMiniChallenge() {
  const dept = miniDeptFilter.value;
  const sort = miniSortControl.value;

  let data = [...employees];

  if (dept !== "All") {
    data = data.filter((emp) => emp.department === dept);
  }

  if (sort === "expLowHigh") {
    data.sort((a, b) => a.experience - b.experience);
  } else if (sort === "expHighLow") {
    data.sort((a, b) => b.experience - a.experience);
  } else if (sort === "salLowHigh") {
    data.sort((a, b) => a.salary - b.salary);
  } else if (sort === "salHighLow") {
    data.sort((a, b) => b.salary - a.salary);
  } else if (sort === "nameAZ") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  }

  miniContainer.innerHTML = generateHTML(data);
}

miniDeptFilter.addEventListener("change", processMiniChallenge);
miniSortControl.addEventListener("change", processMiniChallenge);
