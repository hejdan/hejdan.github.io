let Reddit = document.querySelector("#Reddit");
let Facebook = document.querySelector("#Facebook");
let Youtube = document.querySelector("#Youtube");
let Netflix = document.querySelector("#Netflix");
let Ae27ff = document.querySelector("#Ae27ff");
let Github = document.querySelector("#Github");

let clock = document.querySelector("#clock");

let Joke = document.querySelector(".Joke");

const api = 'https://official-joke-api.appspot.com/jokes/programming/random';




Reddit.addEventListener("click", () => {
    self.location.href = "https://www.reddit.com";
});

Facebook.addEventListener("click", () => {
    self.location.href = "https://www.facebook.com";
});

Youtube.addEventListener("click", () => {
    self.location.href = "https://www.youtube.com";
});

Netflix.addEventListener("click", () => {
    self.location.href = "https://www.netflix.com";
});

Ae27ff.addEventListener("click", () => {
    self.location.href = "http://ae27ff.meme.tips";
});

Github.addEventListener("click", () => {
    self.location.href = "https://www.github.com";
});


function updateTime() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var t_str = hours + ":" + minutes + ":" + seconds;
    clock.innerHTML = t_str;

}
setInterval(updateTime, 1);

function GenerateJoke() {
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            Joke.innerHTML = data[0].setup;

            Joke.addEventListener("click", () => {

                if (Joke.innerHTML == data[0].setup) {
                    Joke.innerHTML = data[0].punchline;
                } else if (Joke.innerHTML == data[0].punchline) {
                    Joke.innerHTML = data[0].setup;
                }

            });

        })
}
