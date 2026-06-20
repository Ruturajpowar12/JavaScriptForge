// Task 1
const employees = [
  { id: 1, name: "A", salary: 50000 },
  { id: 2, name: "B", salary: 70000 },
  { id: 3, name: "C", salary: 40000 },
];
const employeeNames = employees.map((emp) => {
  return emp.name;
});
console.log(employeeNames);

//task2
const salaryGreater = employees.filter((emp) => emp.salary > 50000);
console.log(salaryGreater);

//task3
const findId = employees.find((emp) => emp.id === 2);
console.log(findId);

//task4
const totalSalary = employees.reduce((tot, curr) => tot + curr.salary, 0);
console.log(totalSalary);

//task 5

const techs = ["react", "node", "react", "js", "node"];
const countingOccurrence = techs.reduce((acc, tech) => {
  acc[tech] = (acc[tech] || 0) + 1;
  return acc;
}, {});
console.log(countingOccurrence);
