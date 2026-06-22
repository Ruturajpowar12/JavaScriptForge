// 🚀 Topic 2: Search (Very Important)
//task1
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Monitor" },
];

const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");

function renderProducts(data) {
  productList.innerHTML = data
    .map((product) => `<div><h3>${product.name}</h3></div>`)
    .join("");
}

searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();

  const filterEmployee = products.filter((product) =>
    product.name.toLowerCase().includes(keyword),
  );
  renderProducts(filterEmployee);
});

//task2

const students = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Sneha" },
  { id: 4, name: "Rahul" },
];

const searchName = document.getElementById("searchName");
const studentList = document.getElementById("studentList");

function renderStudent(data) {
  studentList.innerHTML = data
    .map((student) => `<div><h3>${student.name}</h3></div>`)
    .join("");
}

searchName.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();

  const filterName = students.filter((student) =>
    student.name.toLowerCase().includes(keyword),
  );
  renderStudent(filterName);
});

//task3
const movies = [
  { id: 1, title: "Avengers" },
  { id: 2, title: "Interstellar" },
  { id: 3, title: "Batman" },
  { id: 4, title: "Joker" },
];

const searchMovie = document.getElementById("searchMovie");
const movieList = document.getElementById("movieList");

function renderMovie(data) {
  if (data.length === 0) {
    movieList.innerHTML = "<div><h3>No Found Movie</h3></div>";
    return;
  }
  movieList.innerHTML = data
    .map((movie) => `<div><h3>${movie.title}</h3></div>`)
    .join("");
}
searchMovie.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();

  const filterMovie = movies.filter((movie) =>
    movie.title.toLowerCase().includes(keyword),
  );
  renderMovie(filterMovie);
});

//mini challenge
const employees = [
  {
    id: 1,
    name: "Rohit",
    department: "HR",
  },
  {
    id: 2,
    name: "Virat",
    department: "IT",
  },
  {
    id: 3,
    name: "Dhoni",
    department: "Finance",
  },
  {
    id: 4,
    name: "Hardik",
    department: "Marketing",
  },
];

const searchEmployee = document.getElementById("searchEmployee");
const employeeList = document.getElementById("employeeList");

function renderEmployee(data) {
  if (data.length === 0) {
    employeeList.innerHTML = `<div><h3>Employee not found</h3></div>`;
    return;
  }
  employeeList.innerHTML = data
    .map(
      (employee) =>
        `<div><h3>${employee.name} : ${employee.department}</h3></div>`,
    )
    .join("");
}

searchEmployee.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();

  const filterEmployee = employees.filter((employee) =>
    employee.name.toLowerCase().includes(keyword),
  );
  renderEmployee(filterEmployee);
});
