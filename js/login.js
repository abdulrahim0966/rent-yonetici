// config.js'den API_URL çekiliyor

function F1() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const message = document.getElementById("loginMessage");

  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const found = data.find(row => row.kullanici === user && row.sifre === pass);
      if (found) {
        localStorage.setItem("girisYapildi", "yes");
        localStorage.setItem("kullanici", user);
        window.location.href = "karkas.html";
      } else {
        message.textContent = "Kullanıcı adı veya şifre yanlış.";
      }
    })
    .catch(() => {
      message.textContent = "Sunucu hatası.";
    });
}

