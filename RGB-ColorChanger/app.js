// 1. Select the DOM elements
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const rgbText = document.getElementById('rgb-text');


function changeBackgroundColor() {

    const r = red.value;
    const g = green.value;
    const b = blue.value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

   
    rgbText.textContent = `rgb(${r}, ${g}, ${b})`;
}


red.addEventListener('input', changeBackgroundColor);
green.addEventListener('input', changeBackgroundColor);
blue.addEventListener('input', changeBackgroundColor);