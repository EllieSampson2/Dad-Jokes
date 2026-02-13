const jokeElement = document.getElementById("joke");
const button = document.querySelector("button");
const counterElement = document.getElementById("counter");

let jokeCount = 0;

async function getJoke() {
  try {
    jokeElement.innerText = "Loading dad-level humor...";
    button.disabled = true;

    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json",
        "User-Agent": "DadBirthdayApp (github pages project)"
      }
    });

    if (!response.ok) {
      throw new Error("API error");
    }

    const data = await response.json();
    jokeElement.innerText = data.joke;

    jokeCount++;
    counterElement.innerText = `Dad Jokes Served: ${jokeCount}`;

  } catch (error) {
    jokeElement.innerText = "Even dads run out of jokes sometimes. Try again!";
  } finally {
    button.disabled = false;
  }
}

function shareJoke() {
  const text = jokeElement.innerText;

  if (navigator.share) {
    navigator.share({
      title: "Dad Joke",
      text: text
    });
  } else {
    alert("Sharing not supported on this device.");
  }
}

getJoke();
