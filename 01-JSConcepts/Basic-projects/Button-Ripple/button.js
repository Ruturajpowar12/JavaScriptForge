const btn = document.querySelector(".btn");

btn.addEventListener("mousemove", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
});