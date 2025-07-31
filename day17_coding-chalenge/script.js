function generateJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            const joke = `${data.setup} - ${data.punchline}`;
            document.getElementById("jokeText").innerText = joke;
        })
        .catch(err => {
            document.getElementById("jokeText").innerText = "Oops! Couldn't load a joke.";
        });
}
