
// Primitive DataType

// 7 Types : String , Number, BigInt , Boolean ,Null,Undefined,Symbol.

const score = 100
const ScoreValue = 100.3

const isLoggedIn =  false 
const  isNull = null        //object

const id = Symbol('123')

const bigNumber = 2454946649

//typeof - checks which  datatype 
console.log(typeof (score)); //Number



//Non-Primitive  (Reference)  DataType

// Array , Objects ,  Functions.

const arr = ["Ram", "Sham","hanuman"]

const student ={
    name:"Ruturaj",
    age:21
}

function Myfunction(){ //1

}

const MyFun = function (){  //2

}

const arrowFunction = ()=>{ //2

}



// *******************************************************************

// Memory  Allocation.

// Memory types - stack (Primitive) , Heap (Non-Primitive)

// stack -
     let myName = "Ruturaj"
     let anotherName = myName
     anotherName = "swarup"
     console.log(myName);
     console.log(anotherName);


//heap -

    let userOne = {
        email:"user@gamil.com",
        upi:"user@bl"
    }

    let userTwo = userOne

    userTwo.email ="ram@gaml.com"
    console.log(userOne.email);
    console.log(userTwo.email);
    
     
