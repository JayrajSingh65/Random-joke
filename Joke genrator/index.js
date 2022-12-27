let jokeCointainer = document.getElementById("joke");
let jokeButton = document.getElementById("btn");

let jokeUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single"

let getJoke = () => {
    fetch(jokeUrl)
    .then(data => data.json())
    .then(item => {
        jokeCointainer.textContent = `${item.joke}`

    })
}

btn.addEventListener('click', getJoke);
getJoke();
