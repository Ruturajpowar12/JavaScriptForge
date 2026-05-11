// dom in js


//attributes

let div = document.querySelector("div");

// console.log(div);

let id = div.getAttribute("id");           //getAttribute(arr) to get attribute value
console.log(id);

let ids = div.setAttribute("id", "hsj");         //set Attribute(attr,value) to set attribute value
console.log(ids);


//style

div.style.backgroundColor = "pink";             //node.style

div.innerText = "Ruturaj";

let btn = document.createElement("button");  //create element

btn.innerText = "click";

console.log(btn);

div.after(btn);





