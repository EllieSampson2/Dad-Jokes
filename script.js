async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { 
      "Accept": "application/json",
      "User-Agent": "DadJokesApp (https://github.com/)"
    }
  });

  const data = await response.json();
  document.getElementById("joke").innerText = data.joke;
}

getJoke();
