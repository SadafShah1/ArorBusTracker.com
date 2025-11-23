// Auto redirect based on saved role
window.onload = () => {
  const role = localStorage.getItem("role");
  if (role === "student") window.location.href = "student.html";
  else if (role === "driver") window.location.href = "driver.html";
  else if (role === "admin") window.location.href = "admin.html";
};

function studentLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      localStorage.setItem("role", "student");
      window.location.href = "student.html";
    })
    .catch(err => alert("Login failed: " + err.message));
}

function adminLogin() {
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      localStorage.setItem("role", "admin");
      window.location.href = "admin.html";
    })
    .catch(err => alert("Login failed: " + err.message));
}

function sendOTP() {
  const phone = document.getElementById("phone").value;
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  auth.signInWithPhoneNumber(phone, window.recaptchaVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent!");
    })
    .catch(error => alert(error.message));
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;
  window.confirmationResult.confirm(otp)
    .then(() => {
      localStorage.setItem("role", "driver");
      window.location.href = "driver.html";
    })
    .catch(err => alert("Invalid OTP: " + err.message));
}

function forgotPassword() {
  const email = document.getElementById("email").value;
  if (!email) return alert("Enter email first!");
  auth.sendPasswordResetEmail(email)
    .then(() => alert("Password reset link sent!"))
    .catch(err => alert("Error: " + err.message));
}
