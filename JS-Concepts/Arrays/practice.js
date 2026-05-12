// //que1

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }

// console.log(`average is : ${sum / marks.length}`);


// //que2

// let items = [250, 645, 300, 900, 501];

// for (let val of items) {
//     let dis = val * (10 / 100);
//     let final = val - dis;
//     console.log(final);
// }

// //que3

let com = ["Blommberg", "Microsoft", "Uber", "Google", "IBM"];

let rmfirst = com.shift();
console.log(rmfirst);

let splice = com.splice(2, 1, "pla");
console.log(splice[2]);

let addEnd = com.push("Amazon");
console.log(addEnd);