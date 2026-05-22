// Strings in Js

const name = "Ruturaj"
const sirName = "Powar"

console.log(`My Name is  ${name} ${sirName}`)


const gameName = new String("Cricket")

console.log(gameName);  //Cricket
console.log(gameName[0]);   //C
console.log(gameName.__proto__); //{}

console.log(gameName.length);  //7

console.log(gameName.toUpperCase());  //UpperCase
console.log(gameName.toLowerCase());  //LowerCase

console.log(gameName.charAt(2));  //i

console.log(gameName.substring(4)); //ket
console.log(gameName.substring(0,4)); //Cric

console.log(gameName.slice(0,-1));


const name2= " Rammesh  hi  "

console.log(name2.trim());
console.log(name2.trimStart());
console.log(name2.trimEnd());

const url = "https://ruturaj.com/ruturaj%20Powar"

console.log(url.replace('%20','-'));           //https://ruturaj.com/ruturaj-Powar
console.log(url.replaceAll('ruturaj','sam'));  //https://sam.com/sam%20Powar

const idNa = "hi- hello-thansk"

console.log(idNa.split('-')); // [ 'hi', ' hello', 'thansk' ]










