/**
 * Just open a popup menu.
 */
function toggleHeaderSubMenu() {
  let headerSubMenu = document.getElementById("headerSubMenu");
  headerSubMenu.style.display = "flex";
}

/**
 * When you log out, the value of the remote key is deleted.
 */
async function logOut() {
  await setGlobalUserId("currentUserId", []);
  localStorage.removeItem('showedLoginGreeting');
  window.location.assign("../index.html");
}