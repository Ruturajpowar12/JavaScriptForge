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





