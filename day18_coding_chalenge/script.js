const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');

const currencies = ["USD", "EUR", "GBP", "CAD", "NGN", "JPY", "AUD", "CNY", "INR", "ZAR"];

currencies.forEach(currency => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.value = option2.value = currency;
    option1.text = option2.text = currency;
    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
});

fromCurrency.value = "USD";
toCurrency.value = "EUR";

function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (!amount || isNaN(amount)) {
        alert("Please enter a valid amount");
        return;
    }

    // API: Frankfurter.app (no API key needed)
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[to];
            resultDiv.innerText = `${amount} ${from} = ${rate.toFixed(2)} ${to}`;
        })
        .catch(() => {
            resultDiv.innerText = "Conversion failed. Try again.";
        });
}
