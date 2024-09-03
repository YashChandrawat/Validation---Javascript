document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Retrieve values from the form inputs
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  // Retrieve user data from localStorage
  let userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    alert("No user data found");
    return;
  }

  let emailStorage = userData.email;
  let passwordStorage = userData.password;

  console.log(email); // For debugging
  console.log(emailStorage); // For debugging

  // Validate email and password
  if (email !== emailStorage) {
    alert("Invalid Email");
    return;
  }

  if (password !== passwordStorage) {
    alert("Incorrect Password");
    return;
  }

  alert("Login Successful");

  window.location.href = "../profile/profile.html";
});
