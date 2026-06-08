// Level 3: Async JavaScript & Fetch API

const { use } = require("react");

// Challenge 1: Fetch Users

const getData = async() =>{

    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await responce.json()

    const names = data.map( val => val.name)
    console.log(names);
    } catch (error) {
        console.log(error); 
    } 
}
getData()


// Challenge 2: Parallel API Calls

async function fetchParallelData() {
  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);

    const [users, posts] = await Promise.all([
      usersResponse.json(),
      postsResponse.json()
    ]);

    console.log({
      usersCount: users.length,
      postsCount: posts.length
    });
    
  } catch (error) {
    console.error(error.message);
  }
}

fetchParallelData();


// Challenge 3: User Posts

const fetchData = async () => {
  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);

    const [users, posts] = await Promise.all([
      usersResponse.json(),
      postsResponse.json()
    ]);

    const newArray = users.map((user) => {
      const userPosts = posts.filter((post) => post.userId === user.id);
      return {
        user: user.name,
        posts: userPosts.length
      };
    });

    console.log(newArray);
  } catch (error) {
    console.error(error);
  }
};

fetchData();


// Level 4: Closures
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
counter();
//1
//2
//3 
// whay : because counter initialize outer loop and counter()  is () is returns inner loop



// Create Your Own Closure

function createBank(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log(balance);
    },
    balance() {
      console.log(balance);
    }
  };
}

const bank = createBank(1000);
bank.deposit(500);  
bank.withdraw(200); 
bank.balance();


// Level 5: this, call, apply, bind
const user = {
  name: "Ruturaj",
  greet() {
    console.log(this.name);
  }
};
const fn = user.greet;
fn(); //undefined

const boundFn = fn.bind(user);  // fix the problem using bind()
boundFn();


// user.greet() -> Called on user, so this is user.
// fn() -> Called on nothing, so this is the global environment.



// Level 6: OOP?
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log("Vehicle is starting");
  }
}
class Car extends Vehicle {
  constructor(brand) {
    super(brand);
  }
  start() {
    console.log(`${this.brand} is starting`);
  }
}
const car = new Car("BMW");
car.start();



// Level 7: Pure JavaScript Interview Challenge
const arr = [1, 2, 2, 3, 4, 4, 5];

const uniqueArr = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});

console.log(uniqueArr);

// Level 8: Senior-Level Array Challenge
const students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 95 },
  { name: "C", marks: 70 },
  { name: "D", marks: 95 }
];

const res = students.filter((val)=> val.marks === 95)
console.log(res);
