const h1 = document.querySelector("h1")
const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")
const reset = document.querySelector("#reset")

function updateButtonState() {
    if (h1.innerText === "0") {
        decrease.style.backgroundColor = "grey"
        decrease.style.pointerEvents = "none" 
    } else {
        decrease.style.backgroundColor = "" 
        decrease.style.pointerEvents = "auto"
    }
}

increase.addEventListener("click", () => {
    h1.innerText++
    updateButtonState()
})

decrease.addEventListener("click", () => {
    if (h1.innerText != 0) {
        h1.innerText--
    }
    updateButtonState()
})

reset.addEventListener("click", () => {
    h1.innerText = 0
    updateButtonState()
})

updateButtonState()