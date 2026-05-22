//Dates in js

let myDates = new Date()
console.log(myDates)           //2026-05-22T07:43:01.853Z
console.log(myDates.toDateString())   //Fri May 22 2026
console.log(myDates.toISOString())  //2026-05-22T07:43:01.853Z
console.log(myDates.toString())    //Fri May 22 2026 13:13:01 GMT+0530 (India Standard Time)

console.log(myDates.toJSON())     //2026-05-22T07:43:01.853Z
console.log(myDates.toLocaleString())     //22/5/2026, 1:13:01 pm
console.log(myDates.toLocaleDateString()) //22/5/2026

console.log(typeof myDates);   //object


let newDate = new Date(2013,5,23)
console.log(newDate.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDates.getTime());
console.log(Math.floor(Date.now()/1000));


let myNewDate = new Date()

// console.log(myNewDate);
// console.log(myNewDate.getMonth()+1);
// console.log(myNewDate.getDay());
console.log(myNewDate.toLocaleString('default',{
    weekday:"long",
})
);






