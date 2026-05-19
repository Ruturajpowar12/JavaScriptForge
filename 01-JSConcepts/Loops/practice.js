//que1

for (let i = 0; i <= 100; i++) {  //by for loop
    if (i % 2 == 0) {
        console.log(i);
    }
}

let num = 0;

while (num <= 100) {    //by while loop
    console.log(num);
    num += 2;
}


// que2

let gameNum = 25;

let userNum = prompt("Guess the ga,e Number: ");

while (userNum !== gameNum) {
    userNum = prompt(" you entersd wrong Num ,Guess again! : ");
}

console.log("congratulations, you enterd the right number");


//que3

let fullName = "Ruturaj powar";

let len = fullName.length;

console.log(`@${fullName}${len}`)

