const loginForm = document.getElementById("login-form");
const input = loginForm.querySelector("input");
const button = loginForm.querySelector("button");
const greeting = document.getElementById("greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function submitWithLoginBtn(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = input.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginForm.classList.remove(HIDDEN_CLASSNAME);
// loginForm.addEventListener("submit",submitWithLoginBtn);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",submitWithLoginBtn);
} else {
    paintGreetings(savedUsername);
}