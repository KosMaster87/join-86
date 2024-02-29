function toggleHeaderSubMenu() {
  let headerSubMenu = document.getElementById("headerSubMenu");
  headerSubMenu.style.display = "flex";
}

function logOut() {
  localStorage.clear();
  window.location.assign("../index.html");
}
