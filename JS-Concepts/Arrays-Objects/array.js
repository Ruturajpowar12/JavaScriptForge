//Arrays in Js

let student = ["ruturaj", "swarup", "sanskar", "piyush"];
let marsks = [98, 67, 98, 54];

console.log(student);
console.log(marsks.length);  //property
console.log(student[2]);   //index

for (let val in student) {      //print by for-in
    console.log(val);           // index number
}

for (let val of student) {      //print by for-of
    console.log(val);           //value of index
}


//Array Methods

let add = student.push("Ram"); // push - add to end
console.log(add);

let remove = marsks.pop(); // delete from end & return
console.log(remove);

let str = student.toString();  // convert into string
console.log(str);

let hero = student.concat(marsks); // concat
console.log(hero);

let addStart = marsks.unshift(25);  // add  to Start
console.log(addStart);

let rmStart = student.shift();   // remove from start & return
console.log(rmStart);



let slice = student.slice(2, 4);
console.log(slice);



let splice = marsks.splice(1, 3, 5);
console.log(splice);



