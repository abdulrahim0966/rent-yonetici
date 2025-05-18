function showForgotPassword() {
  document.getElementById("forgot-password").style.display = "block";
}

function F1() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    document.getElementById("error").textContent = "Lütfen tüm alanları doldurun.";
    return;
  }

  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec")
    .then(res => res.json())
    .then(data => {
      const user = data.find(user => user.kullanici === username && user.sifre === password);
      if (user) {
        localStorage.setItem("girisYapildi", "yes");
        localStorage.setItem("kullanici", username);
        window.location.href = "karkas.html";
      } else {
        document.getElementById("error").textContent = "Kullanıcı adı veya şifre hatalı.";
      }
    })
    .catch(err => {
      document.getElementById("error").textContent = "Bağlantı hatası.";
      console.error(err);
    });
}
