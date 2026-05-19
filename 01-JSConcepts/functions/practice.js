// Que1
// let n = prompt("Enter a string :");

function word(n) {

    for (let val of n) {
        if (val === "u" || val === "a" || val === "e" || val === "o") {
            console.log(val);
        }
    }

}

word("ruturaj");

//arrrow function 

let fun = (n) => {
    for (let val of n) {
        if (val === "u" || val === "a" || val === "e" || val === "o") {
            console.log(val);
        }
    }
}

fun("hello");


//que2

let num = [1, 2, 3, 5, 4, 6];

num.forEach((val) => {
    let sq = val * val;
    console.log(`square is ${sq}`);
});


//que3
let mar = [93, 46, 97, 45, 77, 34];

let op = mar.filter((val) => {
    return val > 90;
})
console.log(op);



//que4

// let numb = prompt("enter anumber:");
let n = 5;
let arr = [];
arr[0] = 1;

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(sum);


let fact = arr.reduce((res, curr) => {
    return res * curr;
})
console.log(fact);
