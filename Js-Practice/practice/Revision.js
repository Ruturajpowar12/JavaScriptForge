//1. Variables & Scope

console.log(a);
var a = 10;      // output - undefined (hoisting)

console.log(b);
let b = 20;      // error initialization first

let  a = "ruturaj"; //global scope/variable
const myFunction = ()=>{
    let age =21     //function scope/variable
    console.log(age);
    console.log(a);
}

{
    let ba="hi" //block scope/variable
}


//2. Functions

//normal function
function sayHello(){

}

//arrow functions
const myfunction = () =>{

}

//higher-order functions
map();
reduce()
filter()

//closures
//example-1
function outer(){
    let count = 0
    function inner(){
        count++;
        console.log(count);
        
    }
    return inner;
}

const newClosure = outer()
newClosure()
newClosure()

//example-2

function bankBal(inbalance){
     balance = inbalance
    return{
        deposit(amount){
            balance += amount
            console.log("Deposit Balance :",balance);   
        },
        withdrawal(amount){
            balance -= amount
            console.log("Withdrawal Balance :",balance); 
        }
    }
}
const check = bankBal(2000)
check.deposit(200)
check.withdrawal(500)



//3. Arrays & Array Methods
const nums = [10,17,20,29,30,9,40];

//map
const mapMethod = nums.map((val)=>{ 
   return val * 2;
})
console.log(mapMethod);

//filter
const res = nums.filter((val)=>{
    return val % 2 !=0
})
console.log(res);

//reduce
const res2 = nums.reduce((prev,curr)=>{
    return prev+ curr
})
console.log("Sum is ':",res2);

//find
const res3 = nums.find((val)=>{
    return val < 10
})
console.log(res3);

//some
const res4 = nums.some((val)=>{
    return val % 2 !=0
})
console.log(res4); //true  checks some number is odd

//every
const res5 = nums.every((val)=>{
    return val % 2 ===0
})
console.log(res5); // false checks all/ every element is even

//chaining
let num = [10,20,30,40,50]

const ans = num
    .filter(val => val>20)
    .map(n=> n*2)
console.log(ans);



//4. Objects & this

//object methods
const car = {
    name : "thar",
    model :"AVU78g",
    display(){
        console.log(this.name);
    }
}
console.log(car.display());

//destructuring
const{ name , model,display } = car
console.log(name);
console.log(model);

//spread operator
let arr1 = [1,2,3,4,5]
let arr2 = [ 6,7,8,9]
console.log(...arr1,...arr2);

const newcar = {
    ...car,
    des:"hi"
}
console.log(newcar);

//this
const user = {
   name:"Ruturaj",
   greet(){
      console.log(this.name);
   }
}


