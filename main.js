//Access the html divs ich
let Youtube = document.querySelector("#youtube");
let Reddit = document.querySelector("#reddit");
let Netflix = document.querySelector("#netflix");
let Github = document.querySelector("#github");
let Facebook = document.querySelector("#facebook");
let Ae = document.querySelector("#ae");
let Joke = document.querySelector(".Joke");

//API
const api = "https://official-joke-api.appspot.com/jokes/programming/random";

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
    });
}

//Goes to the hyperlink connected to the image if clicked
Youtube.addEventListener("click", () => {
self.location.href = "https://www.youtube.com";});

Reddit.addEventListener("click", () => {
  self.location.href = "https://www.Reddit.com";
});

Netflix.addEventListener("click", () => {
  self.location.href = "https://www.Netflix.com";
});

Github.addEventListener("click", () => {
  self.location.href = "https://www.Github.com";
});

Facebook.addEventListener("click", () => {
  self.location.href = "https://www.Facebook.com";
});

Ae.addEventListener("click", () => {
  self.location.href = "http://ae27ff.meme.tips";
});
