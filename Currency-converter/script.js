

const url = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";

const amountInput = document.getElementById("input-am");
const dropdowns = document.querySelectorAll(".dropdown");
const resultElement = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");

function showResult(message, isError = false) {
    resultElement.innerText = message;
    resultElement.style.color = isError ? "#d8000c" : "#333";
}

async function convertCurrency() {
    const amount = parseFloat(amountInput.value.trim());
    if (Number.isNaN(amount) || amount <= 0) {
        showResult("Please enter a valid amount greater than 0.", true);
        return;
    }

    if (dropdowns.length < 2) {
        showResult("Currency selectors are not available.", true);
        return;
    }

    const fromCurrency = dropdowns[0].value;
    const toCurrency = dropdowns[1].value;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        const rates = data.rates || {};
        const baseCurrency = (data.base || "EUR").toUpperCase();

        const rateFrom = fromCurrency === baseCurrency ? 1 : rates[fromCurrency];
        const rateTo = toCurrency === baseCurrency ? 1 : rates[toCurrency];

        if (rateFrom == null || rateTo == null) {
            showResult("Unable to find conversion rate for the selected currencies.", true);
            return;
        }

        const convertedAmount = (amount / rateFrom) * rateTo;
        const rateText = (1 / rateFrom) * rateTo;

        showResult(
            `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency} \n` +
            `1 ${fromCurrency} = ${rateText.toFixed(4)} ${toCurrency}`
        );
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        showResult("Error fetching exchange rates. Please try again later.", true);
    }
}

convertBtn.addEventListener("click", convertCurrency);


