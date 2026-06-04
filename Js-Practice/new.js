//practice js

// global scope 

let x ="hello"
function example(){
    console.log(x); 
}
console.log(x);
 example()


 //function scope
function exmple1(){
    let fd="functional scope"
    console.log(fd); 
}
console.log(fd); //fd is not defined
 exmple1()


 //block scope
 function exam1(){
    if(true){
        let bb= "block"
        console.log(bb)
    }
    console.log(bb); //bb is not defined

 }
exam1()


//callback function

function display(res){
    console.log(res)    
}

function add(num1,num2, callback){
    let sum = num1+num2
    callback(sum)
}
add(10,20, display)

//anonymous function

 let sum = function(a ,b){
    return a + b
 }
 console.log(sum(12,12));

//example-2
(
    function(){
        console.log("Welcome to GreateStack");
    }
)();
 
//3
setTimeout(()=>{
    console.log("hello ");
    
},2000)



//objects

const car = {
    name3:"thar",
    model:1990
}

console.log(car)

car.age =28
console.log(car["name3"])
console.log(car)

delete car.model
console.log(car);


for(let val in car){
    console.log(`${val} is ${car[val]}`);
    
}