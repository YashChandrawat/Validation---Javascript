function formSubmit() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill all the details");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password didnt matched");
      return;
    }

    const userData = {
      username: username,
      email: email,
      password: password,
      confirmPassword,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    window.location.href = "../otp/otp.html";
  });
}

formSubmit();
