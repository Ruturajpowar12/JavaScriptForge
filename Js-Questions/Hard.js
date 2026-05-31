//   HARD LEVEL (10 Questions)
  
/*
Q21. Implement your own version of Array.map().
*/
let arr = [10,20,30,40]
const newMap = arr.map((val)=>{
    return val * 2
})
console.log(newMap);


/*
Q22. Implement your own version of Array.filter().
*/
const newFilter = arr.filter((val)=>{
    return val >20
})
console.log(newFilter);
/*
Q23. Flatten a nested array without using flat().
Example:
[1,[2,[3,4]],5]
Output:
[1,2,3,4,5]
*/
let arr2= [1,[2,[3,4]],5]
let flatted = arr2.toString().split(',').map(Number);
console.log(flatted);


/*
Q24. Find the first non-repeating character in a string.
Example:
"aabbcdde"
Output:
c
*/
let str = "aabbcdde";
function firstNonRepeatingChar(s) {
    let charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null; 
}
console.log(firstNonRepeatingChar(str)); 


/*
Q25. Group array objects by a property.
Example:
[
 {name:"A", dept:"IT"},
 {name:"B", dept:"HR"},
 {name:"C", dept:"IT"}
]

Output:
{
 IT:[...],
 HR:[...]
}
*/

let employees = [
    { name: "A", dept: "IT" },
    { name: "B", dept: "HR" },
    { name: "C", dept: "IT" }
];

let grouped = {};

employees.forEach((emp) => {
    if (!grouped[emp.dept]) {
        grouped[emp.dept] = [];
    }
    grouped[emp.dept].push(emp);
});

console.log(grouped);