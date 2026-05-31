// 1. Variables
// What will be printed?
const name = "Ruturaj";
console.log(name); 
//Ruturaj



// 2. Data Types
// What is the output?
console.log(typeof 100);      //number
console.log(typeof "100");    //string



// 3. Operators
// What is the value of result?
let result = 10 + 5 * 2;
console.log(result);   //20 because of operator precedence



// 4. Comparison
// What will be printed?
console.log(10 == "10");  //true because "10" == "10"  automatic converts into sting 
console.log(10 === "10"); // false  strictly  checks datatype



// 5. If-Else
// What is the output?
let age = 20;
if(age >= 18){
    console.log("Adult");
}else{
    console.log("Minor");
}
//Adult




// 6. Loop
// How many times will the loop run?
for(let i = 1; i <= 5; i++){
    console.log(i);
}
//5 times



// 7. While Loop
// What is the final value of count?
let count = 1;
while(count < 4){
    count++;
}
console.log(count); 
//4



// 8. Function
// What is returned?
function add(a,b){
    return a + b;
}
console.log(add(2,3));  //5


// 9. Arrow Function
// What will be printed?
const square = num => num * num;
console.log(square(4)); //16


// 10. Array
// What is the output?
const fruits = ["Apple","Banana","Mango"];
console.log(fruits[1]);  //Banana


// 11. Array Methods
// What will numbers become?
const numbers = [10,20];
numbers.push(30);
console.log(numbers);  //[10,20,30]



// 12. Object
// What is printed?
const user = {
    name:"Ram",
    age:21
};
console.log(user.name);   //Ram


// 13. String Methods
// What is the output?
const msg = "JavaScript";
console.log(msg.toUpperCase());  //JAVASCRIPT


// 14. map()
// What is the result?
const nums = [1,2,3];
const result2 = nums.map(num => num * 2);
console.log(result2);
//[2,4,6]



// 15. filter()
// What will be printed?
const nums2 = [10,20,30,40];
const result3 = nums2.filter(num => num > 20);
console.log(result3);
//[30,40]



// 16. Destructuring
// What are the values of name and marks?
const student = {
    name:"Banana",
    marks:95
};

const {name: studentName, marks} = student;

console.log(studentName); //Banana
console.log(marks);   //95


// 17. Async JavaScript
// Predict the output order
console.log("A");
setTimeout(() => {
    console.log("B");
},0);
console.log("C");
//A
//C
//B




// 18. Promise
// What is printed?
Promise.resolve("Hello")
.then(data => console.log(data));
//Hello



// 19. Class
// What is the output?
class Student{
    constructor(name){
        this.name = name;
    }
}
const s1 = new Student("Ruturaj");
console.log(s1.name);
//Ruturaj




// 20. Closure
// What is printed?
function outer(){
    let count2 = 0;
    return function(){
        count2++;
        console.log(count2);
    }
}
const counter = outer();
counter();
counter();

//1
//2


// BONUS
// Write a function that returns the sum of all numbers in an array.



function sumArray(arr){
    let sum = 0
    for(val in arr){
        sum+=arr[val]
    }
return sum
}
const myArr = [10,20,30,40,50,60]
console.log(sumArray(myArr));

//210