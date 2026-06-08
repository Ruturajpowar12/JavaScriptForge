const passBox = document.querySelector("input")
const copyBtn = document.querySelector("#copy")
const btn = document.querySelector("#gen-pass")
const popup = document.querySelector(".box .c")

const length = 12

const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvxyz"
const number ="0123456789"
const Symbol = "@#$%^&*()_+|<>{}[]/?=-"

const allChars = upperCase + lowerCase + number + Symbol

function craetePassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += Symbol[Math.floor(Math.random() * Symbol.length)]

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passBox.value = password
}

btn.addEventListener("click",()=>{
    craetePassword()
})

copyBtn.addEventListener("click",()=>{
    if(passBox.value === "") return;
    
    passBox.select()
    document.execCommand("copy")
    
    popup.classList.add("show")
    setTimeout(()=>{
        popup.classList.remove("show")
    }, 1500)
})