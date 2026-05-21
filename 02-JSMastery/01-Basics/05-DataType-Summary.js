
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