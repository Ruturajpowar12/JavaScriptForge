const inputTask  = document.querySelector("input")
const addBtn = document.querySelector("#addBtn")
const taskList = document.querySelector("#taskList")


addBtn.addEventListener("click",() =>{

    //if input is empty then no value return
    if(inputTask.value === ""){
        return
    }

    //creating li and assign input value to li and append in ul
    const li = document.createElement("li")
    li.innerText = inputTask.value
    taskList.appendChild(li)

    //creating delete btn and add in li
    const delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    li.append(delBtn)

    delBtn.addEventListener("click",()=>{
        li.remove()
    })

    li.addEventListener("click",()=>{
        li.style.textDecoration="line-through"
    })


 inputTask.value = ""

})