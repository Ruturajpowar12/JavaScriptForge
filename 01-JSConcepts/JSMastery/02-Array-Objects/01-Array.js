// // Array in Js 

const myArr = [0,2,3,4,5,6,8];  //number
const heros =["ram","sham"];

const myArr2 = new Array(1,2,3,4,5)

const mix = [1,3,"hello",4,"js"]

console.log(myArr[5]); //6


//Array methods

myArr.push(9)         // add element in last
console.log(myArr);
myArr.pop()         // remove element from last
console.log(myArr);
myArr.unshift(2)         // add element from start
console.log(myArr);
myArr.shift()         // remove element from start
console.log(myArr);


console.log(myArr.includes(2)); //true
console.log(myArr.indexOf(2));  //1 index

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);


// //slice , splice

console.log("A ",myArr);

const myn1= myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);



console.log("A ",myArr);

const myn1= myArr.splice(1,3)

console.log(myn1);
console.log("B ",myArr);




