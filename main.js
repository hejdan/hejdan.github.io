let Youtube = document.querySelector("#youtube");
let Reddit = document.querySelector("#reddit");
let Netflix = document.querySelector("#netflix");
let Github = document.querySelector("#github");
let Facebook = document.querySelector("#facebook");
let Ae = document.querySelector("#ae");
let Body = document.querySelector("#body");

//Goes to the hyperlink connected to the image if clicked

Youtube.addEventListener("click", () => {
  self.location.href = "https://www.youtube.com";
});

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

//Changes the bodys background color depending of which image mouse is over

Youtube.addEventListener("mouseenter", () => {
  body.style.background = "#911f00";
});

Reddit.addEventListener("mouseenter", () => {
  body.style.background = "#cf6400";
});

Netflix.addEventListener("mouseenter", () => {
  body.style.background = "#0f0f0f";
});

Github.addEventListener("mouseenter", () => {
  body.style.background = "#2b2b2b";
});

Facebook.addEventListener("mouseenter", () => {
  body.style.background = "#335bff";
});

Ae.addEventListener("mouseenter", () => {
  body.style.background = "green";
});

//removing bodys background color
Youtube.addEventListener("mouseout", () => {
  body.style.background = "#484848";
});

Reddit.addEventListener("mouseout", () => {
  body.style.background = "#484848";
});

Netflix.addEventListener("mouseout", () => {
  body.style.background = "#484848";
});

Github.addEventListener("mouseout", () => {
  body.style.background = "#484848";
});

Facebook.addEventListener("mouseout", () => {
  body.style.background = "#484848";
});

Ae.addEventListener("mouseout", () => {
  body.style.background = "#484848";
});
