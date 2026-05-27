//Printing Output using console.log()

console.log("I am learning JavaScript");
console.log(100);

//Variables in JavaScript

const myName ="Ruturaj"
let age = 21
const myCity = "Kolhapur"

let score = 50
score +=10
console.log(score);

const country = "India";

let population = 140;

population = 141;

console.log(country);  //India
console.log(population); //141

//Data Types

let favoriteMovie = "Ironman"
let price = 999
let isJavaScriptFun = true

console.log(typeof favoriteMovie);
console.log(typeof price);
console.log(typeof isJavaScriptFun);

console.log(typeof "100"); //string
console.log(typeof 100); //Number
console.log(typeof false);//boolean

const studentName ="Ram"
const marks = 80
const passed = true

console.log(studentName);
console.log(typeof studentName);
console.log(marks);
console.log(typeof marks);
console.log(passed);
console.log(typeof passed);

//Operators in JavaScript

let a = 20;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


console.log(10 == "10"); //true : convert into string and check
console.log(10 === "10"); //false : number ≠ string
console.log(5 > 2 && 10 < 20); // true : both are true
console.log(!(5 > 2)); //false

const username = "admin";
const password = "1234";

console.log(username === "admin" && password === "1234");//true
console.log(username === "admin" || password === "1234");//true
console.log(!(username === "admin" && password === "1234")); //false


//Conditional Statements

let number = 7;
number % 2 === 0 ? console.log("Even"):console.log("Odd")


let temperature = 35;
if(temperature>30){
    console.log("Hot"); 
}else{
    console.log("Cool");    
}

let marks = 85;
if(marks>=90){
    console.log("A");  
}else if(marks>=75){
    console.log("B")
}else{
    console.log("C")
}

const email = "test@gmail.com";
const enteredPassword = "abcd1234";

if(enteredPassword.length >=8){
    console.log("Strong Password");
}else{
    console.log("Weak Password");
}


//Loops in JavaScript

for(let i=1;i<=10;i++){
    console.log(i);  
}

for(let i=10;i>=1;i--){ //using for 10 to 1
    console.log(i);  
}
 let m1 =10;     //using while 10 to 1
 while(m>=1){
    console.log(m1);
    m1--;
 }
 for(let i=1;i<=20;i++){ //using for even numbers
   if( i%2===0){
    console.log(i)
 }
}

let m2 =1;     //using while even numbers
 while(m2<=20){
   if( m%2===0){
    console.log(m2)
 }m2++;
    
 }

let sum = 0;
for(let i=1;i<=100;i++){
    sum+=i;
}
console.log("1 to 100 Sum :",sum);

let n = 5;                    //multiplication table of 5.
for(let i =1;i<=10;i++){
    console.log(`${n} x ${i} = ${n * i} `)
}



//Functions in JavaScript

function sayHello (){                   //using function
    console.log("Hello JavaScript");
}
sayHello()

const sayHello2 = () =>{               // using Arrow function
    console.log("Hello JavaScript");
}
sayHello2()


const square = (num) =>{
    return num *num
}
let res = square(5)
console.log(res);


const isEven = (num) => {
    return num % 2 === 0;
}
let res2 = isEven(6) //false
console.log(res2);


function calculateTotal(price, tax){
    return price + tax
}
let res3 = calculateTotal(200 , 10) //210
console.log(res3);



//Arrays in JavaScript

const colors = ["Red","Green","Blue"];
console.log(colors[0]); //Red
console.log(colors[2]); //Blue

const numbers = []
numbers.push(10)
numbers.push(20)
numbers.push(30)
console.log(numbers);   //[ 10, 20, 30 ]
numbers.pop();       //30 is remove
console.log(numbers);  //[ 10, 20 ]


const marks = [89,56,76,90,45]
console.log(marks);                 //[ 89, 56, 76, 90, 45 ]

for(let i = 0 ;i<marks.length;i++){
    console.log(marks[i]); 
}

for(let value of marks){
    console.log(value);
}

let sum = 0
for(let i = 0 ;i<marks.length;i++){
    sum += marks[i] 
}
console.log(sum);


//Objects in JavaScript

const car = {
    brand :"Swift",
    model :"AB2026",
    price : 2000000
}

for(let val in car){
    console.log(car[val]);
}
car.price = 3000000

// for(let val in car){
//     console.log(car[val]);
// }
car.color = "Red"

// for(let val in car){
//     console.log(car[val]);
// }

const student = {
    name :"Ruturaj",
    marks:[50,60,70],
    isPassed : true
}
console.log(student["name"]); //Ruturaj

let sum=0
for(let val of student["marks"]){
 sum += val;
}
console.log(sum);



//String Methods in JavaScript

let name = "Ruturaj";    
console.log(name.length);    //7

let city = "mumbai";
console.log(city.toUpperCase());  //MUMBAI

let text = "HELLO";
console.log(text.toLowerCase());  //hello

let email = "test@gmail.com";
console.log(email.includes("@"));  //true

let language = "JavaScript";
console.log(language.startsWith("Java")); //true 
console.log(language.endsWith("Script")); //true  

let username = "   Ruturaj   ";
console.log(username.trim());      //Ruturaj

let text = "JavaScript";
console.log(text.slice(0, 4));   //Java

let msg = "Hello World";
console.log(msg.replace("World", "JavaScript")); //Hello JavaScript

let name = "Ruturaj";
let age = 21;
console.log(`My name is ${name} and I am ${age}`);  //My name is Ruturaj and I am 21


const language = "JavaScript    ";
console.log(language.toUpperCase());
console.log(language.toLowerCase());
console.log(language.length);
console.log(language.includes("@"));
console.log(language.trim());

const message = "I love JavaScript";

console.log(message.slice(0,6)); //6 charcter  
console.log(message.replace("JavaScript","Coding"));
console.log(message.startsWith("I"));





//Array Methods (VERY IMPORTANT)

 
const nums = [1, 2, 3];       //forEach()
nums.forEach((value) => {
    console.log(value);
});


const numbers = [1, 2, 3];             //map()
const doubled = numbers.map((num) => {
    return num * 2;
});
console.log(doubled);


const ages = [12, 18, 25, 15];         //filter()
const adults = ages.filter((age) => {
    return age >= 18;
});
console.log(adults);

const users = ["Ram", "Shyam", "Ruturaj"];  //find()
const result = users.find((user) => {
    return user === "Ruturaj";
});
console.log(result);


const fruits = ["Apple", "Mango"];        //includes()
console.log(fruits.includes("Apple"));


const nums = [10, 20, 30];                    //reduce()
const total = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(total);


const fruts =["mango","banana","apple"]

fruts.forEach((val)=>{
    console.log(val);
    
})

const SqNum = [1,2,3,4,5]
const square = SqNum.map((val)=>{
    return val*val
})
console.log(square);


let numbers=[23,87,46,90,34,67]
const gerterNum = numbers.filter((val)=>{
    return val > 50;
})
console.log(gerterNum);


const products = [100, 200, 300];
const totPrice = products.reduce((a , c)=>{
    return a + c
})
console.log(totPrice);



//Asynchronous JavaScript


// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 1000);

// console.log("C");
// //A
// //C
// //B

// const myPromise = new Promise((resolve,reject)=>{

//     let success= true;

//     if(success){
//         resolve("data is successful")
//     }else{
//         reject("data is rejected")
//     }

// })

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//   function getData() {

//     return new Promise((resolve) => {

//         setTimeout(() => {
//             resolve("Hello hello");
//         }, 2000);

//     });
// }
// async function fetchData() {

//     const result = await getData();

//     console.log(result);
// }

// fetchData();


// function getProducts(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Products Loaded")
//         },2000)
//     })
// }

// const giveData = async ()=>{
//     const res = await getProducts()
//     console.log(res)
// }

// giveData()




//Fetch API & Real API Calls

const fetchData = async()=>{    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1") 

    const data = await response.json()

    console.log(data["title"]);
    } catch (error) {
        console.log("Error :",error);
        
    }
}

fetchData()


async function getUsers() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/4"); 
    const data = await response.json();

    
    data.forEach((val) => {
        
        console.log(`ID: ${val.id}, Title: ${val.title}`);
    });
}

getUsers();



//ES6+ Advanced JavaScript

const student2 = {
    name:"Ruturaj",
    age:21
}

const {name , age }= student2
console.log(name);
console.log(age);


const arr1 = [1,2,3]
const arr2 = [7,8,3]
const merged = [...arr1, ...arr2];
console.log(merged);


const sum = (...num) => {

    let total = 0;

    num.forEach((val) => {
        total += val;
    });

    return total;
}
console.log(sum(1,23,45,6));


const student = {
   name: "Ruturaj",
   marks: 90
}
const {name , marks }= student

const newObject ={
    ...student,
    city: "Kolhapur"
}
 console.log(newObject);
 

//Advanced Array Methods

const users = [
    {id:1, name:"Ram"},
    {id:2, name:"Ruturaj"},
    {id:3, name:"Ganesh"}
];

let res = users.find((user)=>{
    return user.id === 3
})
console.log(res); 


let num = [10,345,34,653,101];
let res2 = num.some((val)=>{
    return val >100;
})
console.log(res2);


let res3 = num.every((val)=>{
   return val >0;
})
console.log(res3);


let numbers = [10,20,30,40,50]

let res4 = numbers
    .filter((val)=>{
        return val >20
    })
    .map((val)=>{
        return val*2
    })
console.log(res4);



//Scope & Hoisting

let  a = "ruturaj"; //global variable
const myFunction = ()=>{
    let age =21     //function variable
    console.log(age);
    console.log(a);
}
myFunction()

// Test hoisting with : var
console.log(b);
var b = 10       //undefined

//Test hoisting with : let
console.log(c);
let c = 10       //Cannot access 'c' before initialization


var x = 10;
function test() {
    console.log(x);
    var x = 20;
}
test();         //undefined





