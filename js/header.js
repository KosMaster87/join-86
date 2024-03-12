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
 * When you log out, the value of the remote key is deleted:
 * setGlobalUserId is intended to set the user in remote storage as logged out.
 * And the user's greeting is removed from the storage.
 */
async function logOut() {
  await setGlobalUserId("currentUserId", []);
  sessionStorage.removeItem("showedLoginGreeting");
  window.location.assign("../index.html");
}

/**
 * header info animate images.
 * @param {Image to animate whit hover} element
 */
function changeInfoImage(element) {
  const img = element.querySelector(".headerInfoAnimateProgramm");
  img.classList.contains("InfoImage");
  img.src = "../assets/img/header/helpHover.svg";
}

/**
 * header info animate images.
 * @param {Image to animate whit hover} element
 */
function changeInfoImageBack(element) {
  const img = element.querySelector(".headerInfoAnimateProgramm");
  img.classList.contains("editImage");
  img.src = "../assets/img/header/help.svg";
}


function createUserSignatureIcon(){
  let container = document.getElementById(`userSignature`);
  let nameParts = user.name.split(' ');
  let initials = '';
  for (let v = 0; v < nameParts.length; v++) {
    initials += nameParts[v].charAt(0).toUpperCase();
  }
  container.innerHTML = initials;
}