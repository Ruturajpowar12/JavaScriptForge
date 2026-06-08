// Level 1: ES6+ & Array Methods Challenge
// Challenge 1: User Data Transformation

const users = [
  { id: 1, name: "Ruturaj", age: 21, active: true },
  { id: 2, name: "Abhishek", age: 19, active: false },
  { id: 3, name: "Rushikesh", age: 22, active: true },
  { id: 4, name: "Akash", age: 18, active: true }
];


// Tasks
// 1.Create an array containing only user names.
const userName =[]
users.filter((val)=>{
    userName.push(val.name)
})
console.log(userName);

let newUsers = users.map((val)=>{
  return val.name
})
console.log(newUsers);



// 2.Get users whose age is greater than 20.
let res= users.filter((val)=>{
  return val.age >20
})
console.log(res);


// 3.Find the user whose id is 3.
let res2 = users.find((val)=>val.id===3)
console.log(res2);

// 4.Check if every user is active.
let res3 = users.every((val)=>{
  return val.active === true
})
console.log("every user is active :",res3);


// 5.Check if at least one user is inactive.
let res4 = users.some((val)=>{
  return val.active === true
})
console.log("least one user is inactive :",res4);


// 6.Create a new array with ages increased by 1.

let newArray =users.map((val)=>{

 return val.age +1
}
)
console.log(newArray);


// 7.Calculate the total age of all users.
let total = users.reduce((prev , curr)=>{
  return prev + curr.age

},0)
console.log("total age of all users :",total);



// Challenge 2: Destructuring
const student = {
  name: "Ruturaj",
  course: "BCA",
  marks: {
    js: 90,
    react: 85,
    node: 88
  }
};
 const {name} = student
 const {course} = student
 const {js} = student.marks
 const {react} = student.marks
 const {node} = student.marks

 console.log(name);
 console.log(course);
 console.log(js);
 console.log(react);
 console.log(node);
 