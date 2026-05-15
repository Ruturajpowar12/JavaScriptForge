

const container = document.querySelector(".container");

const choice = ["Developer", "Hacker", "Programmer", "Dancer"];

let choiceIndex = 0;

let charIdx = 0;

update();

function update() {
    charIdx++;
    container.innerHTML = `<h1> I Am a ${choice[choiceIndex].slice(0, charIdx)}<h1>`;

    if (charIdx === choice[choiceIndex].length) {
        choiceIndex++
        charIdx = 0;
    }
    if (choiceIndex === choice.length) {
        choiceIndex = 0;
    }
    setTimeout(update, 400);
}



