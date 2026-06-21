// Topic 1: Syntax & Code Structure (4 Tasks)
// Task 1
// Create a "Student Profile" program.
// Store student name, age, course, city and whether the student is active.
// Print the information in a readable format.
function studentProfile() {
  const name = "Ruturaj";
  const age = 22;
  const course = "Full Stack";
  const city = "Kolhapur";
  const isActive = true;

  console.log(`Student Name: ${name}`);
  console.log(`Student Age: ${age}`);
  console.log(`Student Course: ${course}`);
  console.log(`Student City: ${city}`);
  console.log(`Student Is Active: ${isActive}`);
}
studentProfile();

// Task 2
// Create a "Movie Ticket" program.
// Store movie name, ticket price and number of tickets.
// Print the total amount.
function movieTicket() {
  const movieName = "Kill";
  const ticketPrice = 300;
  const tickets = 40;

  console.log(`Total Amount is: ${ticketPrice * tickets}`);
}
movieTicket();

// Task 3
// Create a "Company Employee Card".
// Create meaningful variables for employee id, employee name,
// department and salary.
// Print all information.
function employeeCard() {
  const employeeId = 101;
  const employeeName = "Ruturaj";
  const Department = "IT";
  const salary = 50000;
  console.log("Employee Id :", employeeId);
  console.log("Employee Name :", employeeName);
  console.log("Department :", Department);
  console.log("Employee Salary :", salary);
}
employeeCard();

// Task 4
// Create a "Shopping Bill" program.
// Store 3 product names and their prices.
// Print the final bill in a structured format.
function shoppingBill() {
  const item1 = "book";
  const price1 = 50;

  const item2 = "pen";
  const price2 = 40;

  const item3 = "pencil";
  const price3 = 20;
  const total = price1 + price2 + price3;

  console.log("==========================");
  console.log("     Shopping Bill");
  console.log("==========================");
  console.log("item                  price");
  console.log(`${item1}                   ${price1}`);
  console.log(`${item2}                    ${price2}`);
  console.log(`${item3}                 ${price3}`);
  console.log("--------------------------");
  console.log("Total               ", total);
}
shoppingBill();
