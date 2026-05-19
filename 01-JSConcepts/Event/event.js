//events in Js

// the change in the state of an objects is known as an event.





let btn = document.querySelector("#btn");

let current = "light";

btn.addEventListener("click", () => {

    if (current === "light") {
        current = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        current = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(current);
});


