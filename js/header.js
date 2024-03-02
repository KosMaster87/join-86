function toggleHeaderSubMenu() {
  let headerSubMenu = document.getElementById("headerSubMenu");
  headerSubMenu.style.display = "flex";
}

async function logOut() {
  await setGlobalUserId('currentUserId', []);
  await getGlobalUserId('currentUserId');
  window.location.assign("../index.html");

}

async function getGlobalUserId() {   
  return await getItem('currentUserId');
}
