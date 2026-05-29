const h1 = document.querySelector("h1")
const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")

increase.addEventListener("click",(e)=>{
    h1.innerText++
   console.log(h1.innerText);
   
    
})

decrease.addEventListener("click",()=>{
    if(h1.innerText != 0){
     h1.innerText--
    }
     console.log(h1.innerText);
})