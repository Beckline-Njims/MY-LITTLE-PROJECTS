const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

async function fetchQuote() {
    try {
        quoteText.textContent = "Loading...";
        authorText.textContent = "";

        // Use CORS proxy before the API URL
        const proxy = 'https://api.allorigins.win/get?url=';
        const apiUrl = encodeURIComponent('https://zenquotes.io/api/random');

        const response = await fetch(`${proxy}${apiUrl}`);
        const data = await response.json();
        const parsed = JSON.parse(data.contents);

        quoteText.textContent = `"${parsed[0].q}"`;
        authorText.textContent = `— ${parsed[0].a}`;
    } catch (error) {
        quoteText.textContent = "Failed to fetch quote.";
        authorText.textContent = "";
        console.error("Quote fetch error:", error);
    }
}

fetchQuote();
