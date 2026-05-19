//Strings in Js

//create a string
let str = "Ruturaj";
let str2 = "powar";

//string length
console.log(str.length);

//string indices
console.log(str[0]);   //index 0 - R

//for-of in String
for (let i in str) {
    console.log(str[i]);
}


//templete literals

console.log(`Name is ${str}`);      //string interpolation



//string methods

console.log(str.toUpperCase());  //UpperCase
console.log(str2.toLowerCase());  //LowerCase

let n = "    shree ram    ";  // trim() removes whitespaces
let s = n.trim();
console.log(s);

console.log(str.slice(0, 4)); //slice()
console.log(str.concat(str2)); //concat() join two strings

console.log(str.replace("u", "a")); //replace()

console.log(str.charAt(6));
