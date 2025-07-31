const apiKey = 'YOUR_EXCHANGERATE_API_KEY';
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
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (amount === "" || isNaN(amount)) {
    alert("Please enter a valid amount");
    return;
  }

  const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;

  fetch(url, {
    headers: {
      "apikey": apiKey
    }
  })
    .then(response => response.json())
    .then(data => {
      resultDiv.innerText = `${amount} ${from} = ${data.result.toFixed(2)} ${to}`;
    })
    .catch(error => {
      resultDiv.innerText = "Error converting currency.";
    });
}
