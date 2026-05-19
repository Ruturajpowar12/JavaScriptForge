//que1

let h2 = document.querySelector("h2");
console.dir(h2);


h2.innerText = h2.innerText + " from apna college";



//que 2

let boxy = document.querySelectorAll(".box");

boxy[0].innerText = "shh";
boxy[1].innerText = "wjshh";
boxy[2].innerText = "ybo";

for (val of boxy) {
    console.log(val.innerHTML);
}