// Challenge 1: Event Delegation

const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});


// Debounce Function


function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = debounce(() => {
  console.log("Searching...");
}, 1000);

search();
search();
search();
search();


// Challenge 3: Custom Map
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};
const output = [1, 2, 3].myMap(x => x * 2);
console.log(output);

// Challenge 4: Custom Filter
Array.prototype.myFilter = function(callback) {
    const res =[]

    for(let i =0; i<this.length;i++){
       if (callback(this[i], i, this)) {
      
      res.push(this[i]);
    }
    }
    return res
    
};

let res1= [1,2,3,4].myFilter(x => x % 2 === 0);
console.log(res1);


// Challenge 5: Flatten Array
const arr = [1, [2, 3], [4, [5, 6]]];

function flatten(array) {
  return array.reduce((acc, current) => {
    return acc.concat(Array.isArray(current) ? flatten(current) : current);
  }, []);
}

const res = flatten(arr);
console.log(res);


//Challenge 6: Group Users
const users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
  { name: "D", role: "user" }
];

const whoUser= {
    admin:users.filter(val =>  val.role === "admin" ),
    user:users.filter(val =>  val.role === "user" )
}
console.log(whoUser);


// Challenge 7: Memoization

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
const square = memoize((n) => n * n);
console.log(square(5)); 
console.log(square(5)); 
console.log(square(5));


// Challenge 8: Promise Chain

function step1() {
  return new Promise((resolve) => {
    console.log("Step 1");
    resolve();
  });
}
function step2() {
  return new Promise((resolve) => {
    console.log("Step 2");
    resolve();
  });
}
function step3() {
  return new Promise((resolve) => {
    console.log("Step 3");
    resolve();
  });
}
step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => {
    console.log("Done");
  });



  //Challenge 9: React-Level Data Transformation
const products = [
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Mouse", price: 500, inStock: false },
  { id: 3, name: "Keyboard", price: 1500, inStock: true }
];

const result = products
  .filter(product => product.inStock)
  .map(product => `${product.name} - ₹${product.price}`);

console.log(result);


// Challenge 10: Hard Interview Question

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

