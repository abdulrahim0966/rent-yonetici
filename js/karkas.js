function kontrolEt() {
  if (localStorage.getItem("girisYapildi") !== "yes") {
    window.location.href = "index.html";
  }
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function cikis() {
  localStorage.clear();
  window.location.href = "index.html";
}
