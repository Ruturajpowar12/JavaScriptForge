const input = document.querySelector("input")
const btn = document.querySelector("button")
const p3 = document.querySelector("#p3")
const p4 = document.querySelector("#p4")
const p5 = document.querySelector("#p5")

const GameNumber = Math.floor(Math.random() * 100) + 1
let noOfGuess = 0
const guessedNum = []

const play = () => {
    const userNum = Number(input.value)
    
    if (isNaN(userNum) || userNum < 1 || userNum > 100) {
        alert("Enter a valid number between 1 - 100")
        return
    }

    guessedNum.push(userNum)
    noOfGuess++

    if (userNum > GameNumber) {
        p3.textContent = "Your guess is too High"
        p4.textContent = `No.Of Guesses : ${noOfGuess}`
        p5.textContent = `Guessed Numbers are : ${guessedNum.join(", ")}`
    } else if (userNum < GameNumber) {
        p3.textContent = "Your guess is too Low"
        p4.textContent = `No.Of Guesses : ${noOfGuess}`
        p5.textContent = `Guessed Numbers are : ${guessedNum.join(", ")}`
    } else if (userNum === GameNumber) {
        p3.textContent = "Yippi You Win!"
        p4.textContent = `The Number was : ${GameNumber}`
        p5.textContent = `You Guessed it in ${noOfGuess} guesses`
    }
    
    input.value = ""
}

btn.addEventListener("click", () => {
    play()
})