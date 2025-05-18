// config.js'den API_URL çekiliyor

function checkAccess() {
  if (localStorage.getItem("girisYapildi") !== "yes") {
    window.location.href = "index.html";
  }
}

function changePassword() {
  const newPass = document.getElementById("newPassword").value.trim();
  const confirmPass = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("message");
  const username = localStorage.getItem("kullanici");

  if (!newPass || !confirmPass) {
    message.textContent = "Alanlar boş bırakılamaz.";
    return;
  }

  if (newPass !== confirmPass) {
    message.textContent = "Şifreler uyuşmuyor.";
    return;
  }

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "updatePassword",
      kullanici: username,
      yeniSifre: newPass
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(res => {
      message.style.color = "green";
      message.textContent = "Şifreniz başarıyla değiştirildi.";
    })
    .catch(err => {
      message.textContent = "Bir hata oluştu.";
    });
}
