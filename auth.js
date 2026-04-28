let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;

  document.getElementById("form-title").innerText = isLogin
    ? "Login"
    : "Registrasi";
  document.querySelector("button").innerText = isLogin ? "Login" : "Daftar";

  document.getElementById("toggle-text").innerHTML = isLogin
    ? 'Belum punya akun? <a href="#" onclick="toggleForm()">Daftar</a>'
    : 'Sudah punya akun? <a href="#" onclick="toggleForm()">Login</a>';
}

document.getElementById("auth-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (isLogin) {
    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("pass");

    if (user === storedUser && pass === storedPass) {
      alert("Login berhasil!");
      window.location.href = "home.html";
    } else {
      alert("Username atau password salah!");
    }
  } else {
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    alert("Registrasi berhasil! Silakan login.");
    toggleForm();
  }
});
