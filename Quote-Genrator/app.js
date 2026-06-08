const h3 = document.querySelector("h3");
const quote = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    getdata();
});

const getdata = async () => {
    try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        
        const quotesArray = data.quotes;
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        const randomQuote = quotesArray[randomIndex];

        updateUi(randomQuote);
    } catch (error) {
        quote.innerText = "Failed to load quote. Try again!";
    }
};

const updateUi = (data) => {
    if (!data) return; 
    
    quote.innerText = `"${data.quote}"`;
    h3.innerText = `-${data.author}`;
};