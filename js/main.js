function selectRole(role) {
  if (role === 'student') window.location.href = 'login_student.html';
  else if (role === 'driver') window.location.href = 'login_driver.html';
  else if (role === 'admin') window.location.href = 'login_admin.html';
}

// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});
