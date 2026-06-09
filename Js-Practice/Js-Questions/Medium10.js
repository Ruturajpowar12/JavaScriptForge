//  MEDIUM LEVEL (10 Questions)
/*
Q11. Reverse a string without using reverse().
Example:
Input: "hello"
Output: "olleh"
*/
let str ="hello"
let str2 =""
for(let i=str.length;i>=0;i--){
    str2 += str.charAt(i)
}
console.log(str2);



/*
Q12. Find the largest number in an array.
Example:
[10, 5, 80, 20]
Output: 80
*/
let arr =[10, 5, 80, 20]
let max = arr[0]

for(val of arr){
    if(val > max){
        max = val
    }
}
console.log(max);


/*
Q13. Count the number of vowels in a string.
*/
let strVowel ="Hello JavaScript"
let count = 0
for(let i =0;i<strVowel.length;i++){
    let ch = strVowel.charAt(i)
    if(ch ==='a'||ch==='e'||ch==='o'||ch==="A"||ch==="E"||ch==='O'||ch==='i'||ch==='I'||ch==="u"||ch==='U'){
         count++
    }      
    }
console.log(count);


/*
Q14. Check whether a string is a palindrome.
Example:
"madam" => true
*/
let pal ="madam"
let rev =""

for(val in pal){
    rev += pal[val]
}

if(pal === rev){
    console.log("It is palindrome");
}else{
    console.log("It is  not palindrome");
}



/*
Q15. Remove duplicate values from an array.
Example:
[1,2,2,3,4,4]
Output:
[1,2,3,4]
*/
let arr2=[1,2,2,3,4,4]
let unique = [...new Set(arr2)] // new Set() gets unique value
console.log(unique);

let unique2 = arr2.filter((val,idx)=>{
   return arr2.indexOf(val) === idx
})
console.log(unique2);

/*
Q16. Find the factorial of a number using a function.
*/
let num = 5
let fact = 1

for(let i =1;i<=num;i++){
    fact *=i;
}
console.log(fact);

/*
Q17. Sort an array in ascending order without using sort().
*/
let descArr2 = [1,5,2,9,4,8,3]

for(let i =0;i<descArr2.length-1;i++){
   for(let j =0;j<descArr2.length-i-1;j++) {
        if(descArr2[j]>descArr2[j+1]){
            let temp = descArr2[j]
            descArr2[j]= descArr2[j+1]
            descArr2[j+1]=temp
        }
   }
}
console.log(descArr2);




/*
Q18. Find the second largest number in an array.
*/
let descArr = [1,5,2,9,4,8,3]

let largest = -Infinity;
let second = -Infinity;    //new concept

for (let i = 0; i < descArr.length; i++) {
    let current = descArr[i];

    if (current > largest) {
        second = largest; 
        largest = current; 
    } 
    else if (current > second && current !== largest) {
        second = current; 
    }
}

console.log(second);

/*
Q19. Create a calculator function that performs:
+, -, *, /
using switch case.
*/

function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
             return num1 + num2;
            break;
        case "-":
            return  num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return "Invalid operator.";
    }

   
}


console.log(calculator(10, 5, "+")); // Output: 15
console.log(calculator(10, 5, "-")); // Output: 5
console.log(calculator(10, 5, "*")); // Output: 50
console.log(calculator(10, 5, "/")); // Output: 2
console.log(calculator(10, 2, "/")); // Output: Error: Division by zero is not allowed.
console.log(calculator(10, 5, "%")); // Output: Error: Invalid operator...

/*
Q20. Count how many times each character appears in a string.
Example:
"hello"
Output:
{
  h:1,
  e:1,
  l:2,
  o:1
}
*/
let s1 = "hello";
let newObj = {};

for (let i = 0; i < s1.length; i++) {
    let char = s1[i];

    if (newObj[char]) {
        newObj[char]++;
    } 
    else {
        newObj[char] = 1;
    }
}
console.log(newObj);
