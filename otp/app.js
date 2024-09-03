let otp = null;

// Retrieve and parse user data from localStorage
let userData = JSON.parse(localStorage.getItem("userData"));
let usernameData = document.querySelector("#usernameDisplay");

// Set the username display
if (userData && userData.username) {
  usernameData.innerHTML = userData.username;
} else {
  usernameData.innerHTML = "User"; // Fallback if username is not available
}

// Function to generate a random 4-digit OTP
function generateRandomOTP() {
  return Math.floor(Math.random() * 9000) + 1000;
}

// Attach event listener to the "Generate OTP" button
let generateOtpButton = document.querySelector("#generateOtp");
generateOtpButton.addEventListener("click", () => {
  otp = generateRandomOTP();
  let generatedOtp = document.querySelector("#generatedOtp");
  generatedOtp.innerHTML = otp;
});

// Attach event listener to the OTP form submission
document.querySelector("#otpForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  let otpHere = document.querySelector("#otpHere").value;

  // Convert otpHere to a number for comparison
  if (otp === null || otp !== parseInt(otpHere, 10)) {
    alert("OTP is not valid");
    return;
  } else {
    alert("OTP Validated");
    window.location.href = "../login/login.html";
  }
});
