let Reddit = document.querySelector("#Reddit");
let Facebook = document.querySelector("#Facebook");
let Youtube = document.querySelector("#Youtube");
let Netflix = document.querySelector("#Netflix");
let Ae27ff = document.querySelector("#Ae27ff");

let clock = document.querySelector("#clock");


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
setInterval(updateTime, 1000);
