//conditional statements

//if statement

let age = 20;

if (age > 18) {
    console.log("Adult");
}


//if-else statement

if (age > 18) {
    console.log("you can vote!");
} else {
    console.log("you can't vote!");
}

let num = 15;

if (num % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}



//else-if statement

if (age < 18) {
    console.log("junior");

}
else if (age > 60) {
    console.log("senior");
} else {
    console.log("middle");
}


//ternary operator

age > 18 ? "adult" : "not adult";


//switch

let ch = 2;

switch (ch) {
    case 1: console.log("mon");
        break;
    case 2: console.log("tue");
        break;
    default: console.log("invalid");
}
