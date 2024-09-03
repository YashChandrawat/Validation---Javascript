let username = document.querySelector("#username");
let data = JSON.parse(localStorage.getItem("userData"));
username.innerHTML = data.username;

let email = document.querySelector("#email");
email.innerHTML = data.email;
