async function getWeather() {
    const city = document.getElementById('city').value;
    const API_KEY = 'your_api_key'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
        const result = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
        document.getElementById('result').innerHTML = result;
    } else {
        document.getElementById('result').innerHTML = `<p>${data.message}</p>`;
    }
}