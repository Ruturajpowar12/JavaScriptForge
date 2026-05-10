//Loops in Js

//for Loop

for (let i = 1; i <= 5; i++) {
    console.log("apna collage");
}



// while Loop

let count = 1;

while (count <= 10) {
    console.log(count);
    count++;
}


//do-while Loop

do {
    console.log(count);
    count++;
} while (count <= 3);



// for-of Loop


let fname = "ram";

for (let val of fname) {    //r
    console.log(val);       //a
}                           //m


//for-in Loop

let num = [120, 27, 34, 5, 65, 78];   //array

for (let i in num) {
    console.log(num[i]);
}


let student = {       //objects
    name: "Ruturaj",
    age: 23
}

for (let val in student) {
    console.log(student[val]);
}