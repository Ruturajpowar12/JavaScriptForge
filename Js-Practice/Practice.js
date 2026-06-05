// Today's Hard Practice

// What will be the output?
let a = 10;
let b = 5;
console.log(a + b); //15


let age = 16;
if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}                           //Minor


for(let i = 1; i <= 3; i++){
    console.log(i);
}
// 1
// 2
// 3


function multiply(a,b){
    return a*b
}
 let res = multiply(5,4)  //20
 console.log(res);
 

//level 2

 let x = 10;
x += 5;
console.log(x); //15


let marks = 70;
if(marks >= 35){
    console.log("Pass");
}else{
    console.log("Fail");     //pass
}


for(let i = 2; i <= 10; i += 2){
    console.log(i);
}
//2
//4
//6
//8
//10


function square(n){
    return n* n
}
 console.log(square(5)); //25
 

 let name = "Ruturaj";
console.log(name.length); //7


let arr = [10,20,30];
console.log(arr[1]); //20


//array

let arr = [5,10,15];
console.log(arr[2]); //15

let colors = ["Red","Blue"];
colors.push("Green");
console.log(colors); //[ 'Red', 'Blue', 'Green' ]


let nums = [1,2,3,4];
console.log(nums.length);  //4

let arr2 = ["HTML","CSS","JavaScript"]
console.log(arr2[2]);   //JavaScript


let arr = [10,20,30];
arr.pop();
console.log(arr); //[10,20]

function firstElement(arr3){
    return arr3[0]
}
console.log(firstElement([100,200,300]));


//Array Methods

// 1. forEach())
let nums = [10,20,30];
nums.forEach(function(num){
    console.log(num);
});
//10
//20
//30

// 2. map()
let nums = [1,2,3];
let result = nums.map(function(num){
    return num * 2;
});
console.log(result); //[2,4,6]

// 3. filter()
let nums = [10,20,30,40];
let result = nums.filter(function(num){
    return num > 20;
});
console.log(result); //[30,40]


// 4. find()
let nums = [10,20,30,40];
let result = nums.find(function(num){
    return num > 20;
});
console.log(result); //30


let nums = [1,2,3];
nums.forEach((val)=>{
    console.log(val);
}) 
//1
//2
//3

let nums = [2,4,6];
let result = nums.map(function(num){
    return num + 1;
});
console.log(result); //[3,5,7]


let nums = [5,10,15,20];
let result = nums.filter(function(num){
    return num >= 15;
});
console.log(result); //[15,20]

let nums = [10,20,30,40];
let result = nums.find(function(num){
    return num > 25;
});
console.log(result); //30


let arr = [1,2,3,4]
let res =arr.map((val)=>{
    return val *10
})
console.log(res);


let arr= [1,2,3,4,5,6]
let res = arr.filter((val)=>{
    return val % 2 === 0
})
console.log(res);



//Objects

const student = {
    name: "Ravi",
    age: 18
};
console.log(student.name); //Ravi

const car = {
    brand: "Toyota",
    model: "Camry"
};
console.log(car["brand"]);//Toyota

const user = {
    name: "Ruturaj",
    age: 20
};
user.age = 21;
console.log(user.age); //21


const course ={
    name: "JavaScript",
    type: "Programming Language"
}
console.log(course.type);


const product = {
    name: "Laptop",
    price: 50000
};
product.discount = 10;
console.log(product); 
// {
//     name: "Laptop",
//     price: 50000,
//     discount:10
// }


function getName(user) {
    console.log(user["name"])
}

getName({
    name: "Ruturaj",
    age: 20
});

//Destructuring

const user = {
    name: "Ravi",
    age: 18
};
const { name } = user;
console.log(name); //Ravi


const nums = [1,2,3];
const newNums = [...nums,4];
console.log(newNums);  //[1,2,3,4]


const student = {
    name: "Amit",
    age: 20
};
const { age } = student;
console.log(age);


const arr1 = [10,20];
const newArr = [...arr1,30,40]
console.log(newArr);


const user = {
    name: "Ruturaj",
    age: 20
};
const copy = {
    ...user,
    city: "Kolhapur"
};
console.log(copy);
//{ name:"Ruturaj",age:20,city:"Kolhapur"}


function greet(name){
    return "Hello " + name;
}

const greet = (name) => {
    return`Hello ${name}`
}

console.log(greet("ram"));


const fun = () =>{
    const arr = [
  {name: "Ruturaj", age: 20},
  {name: "Amit", age: 22},
  {name: "Rahul", age: 19}
]

let res = arr.map((val)=>{
    return val["name"]
}) 
console.log(res);

}

fun()


//Async JavaScript

const promise = Promise.resolve("JavaScript");
promise.then(data => {
    console.log(data);
});     //JavaScript


const promise = new Promise((resolve,reject)=>{
    resolve("Javascript")
})
promise.then((data)=>{
    console.log(data);
})

async function greet(){
    return "Hello";
}
greet().then(data => console.log(data));
//Hello

async function getName(){
    return "Ruturaj";
}
getName().then(data => {
    console.log(data);
});


const promise = new Promise((resolve , reject)=>{
    resolve("Success")
})
promise.then((data)=>{
    console.log(data);
    
})


const arr = [1,2,3];
const result = arr.map(num => num * 2);
console.log(result); //[2,4,6]

const users = [
    {name: "Ruturaj", age: 20},
    {name: "Amit", age: 22},
    {name: "Rahul", age: 19}
];
const res = users.filter(user => user.age >= 20);
console.log(res);



// DOM Manipulation

const heading = document.querySelector("#heading")
// const heading = document.getElementById("heading")

const btn = document.querySelector("#btn")
// const btn = document.getElementById("btn")


heading.innerText ="Welcome"

heading.style.color ="blue"

btn.addEventListener("click",()=>{
    console.log("Clicked")
    heading.innerText="JavaScript Master"
})

