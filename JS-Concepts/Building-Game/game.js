let userScore = 0;
let compScore = 0;



let you = document.querySelector("#you");
let com = document.querySelector("#com");


const imgs = document.querySelectorAll("img");


let msg = document.querySelector(".msg");

let user = document.querySelector("#you");
let computer = document.querySelector("#com");


const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
}

const drawgame = () => {
    console.log("game was draw.");
    msg.innerText = "game was draw!";
    msg.style.backgroundColor = "#0e084d";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        you.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        com.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (chId) => {
    console.log("user chioce :", chId);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice :", compChoice);

    if (chId === compChoice) {
        //draw game
        drawgame();
    } else {
        let userWin = true;
        if (chId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (chId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

imgs.forEach((img) => {

    img.addEventListener("click", () => {
        const chId = img.getAttribute("id");
        // console.log("choice was clicked", chId);
        playGame(chId);
    });
});



