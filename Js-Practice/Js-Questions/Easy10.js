// Easy Level (10 Questions)


/*
Q1. Create a variable called name and store your name in it.
Display it.
*/
let name ="Ruturaj"
console.log(name);



/*
Q2. Take two numbers and print their sum, difference,
multiplication, and division.
*/
const num1 =10
const num2 =5

console.log(num1 + num2); //15
console.log(num1 - num2); //5
console.log(num1 * num2); //50
console.log(num1 / num2); //2
console.log(num1 % num2); //0


/*
Q3. Check whether a number is even or odd using if-else.
*/
let num = 18
if(num % 2 ===0){
    console.log("Number is Even");
}else{
     console.log("Number is Odd");
}


/*
Q4. Write a program to find the largest of two numbers.
*/
if(num1>num2){
    console.log(num1," is largest");
}else{
     console.log(num2," is largest");
}


/*
Q5. Use a for loop to print numbers from 1 to 10.
*/
for(let i =1;i<=10;i++){
    console.log(i);  
}


/*
Q6. Use a while loop to print numbers from 10 to 1.
*/
let n=10
while(n>0){
    console.log(n);
    n--
}

/*
Q7. Create an array of 5 fruits and print all fruits
using a loop.
*/

const fruits =["mango","apple","greps","Banana","lemon"]
for(let val of fruits){
    console.log(val);  
}


/*
Q8. Create an object called student with properties:
name, age, and course. Print all values.
*/
 const student ={
    name:"Ruturaj",
    age:23,
    course:"javascript"
 }
 console.log(student);
 

/*
Q9. Write a function called greet() that prints:
"Welcome to JavaScript".
*/
function greet(){
    console.log("Welcome to JavaScript");
    
}
greet()



/*
Q10. Take a string and find its length.
*/

let str ="hello world"
console.log(str.length);
