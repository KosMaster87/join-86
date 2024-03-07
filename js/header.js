/**
 * Just open a popup menu.
 */
function toggleHeaderSubMenu() {
  let headerSubMenu = document.getElementById("headerSubMenu");
  headerSubMenu.style.display = "flex";
}

/**
 * Hide popup.
 */
function closeHeaderSubMenu() {
  let headerSubMenu = document.getElementById("headerSubMenu");
  headerSubMenu.style.display = "none";
}

/**
 * Add event listeners to respond to clicks outside the popup
 */
function preparePopupEvent() {
  document.addEventListener("click", function (event) {
    if (userClicksOutsideOfPopup(event)) {
      closeHeaderSubMenu();
    }
  });
}

/**
 * Function to check if the click occurred outside the popup.
 * @param {Popup click event.} event
 * @returns true or false
 */
function userClicksOutsideOfPopup(event) {
  let headerSubMenu = document.getElementById("headerSubMenu");
  return (
    !headerSubMenu.contains(event.target) &&
    !document.getElementById("headerProfile").contains(event.target)
  );
}

/**
 * When you log out, the value of the remote key is deleted.
 */
async function logOut() {
  await setGlobalUserId("currentUserId", []);
  localStorage.removeItem("showedLoginGreeting");
  window.location.assign("../index.html");
}
