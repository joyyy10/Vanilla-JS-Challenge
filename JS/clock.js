const clock = document.getElementById("clock");
const time = clock.querySelector("h1#time");
const day = clock.querySelector("h4#date");
var week = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

function timeUp() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const whatDay = week[date.getDay()];
    day.innerText = `${date.getMonth()+1}/${date.getDate()} ${whatDay}`;
    time.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(timeUp, 1000);