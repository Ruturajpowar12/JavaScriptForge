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

