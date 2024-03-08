/**
 * The current user will be logged in.
 */
async function login() {
  await findUserInUsersArray();
  if (user) {
    console.log(user);
    let globalUserId = user.email;

    await setGlobalUserId("currentUserId", globalUserId);
    window.location.assign("pages/summary.html");
  } else {
    console.log("Benutzer nicht gefunden");
  }
}

/**
 * Matching the entries in the "Users" array.
 */
async function findUserInUsersArray() {
  let loginInputMail = document.getElementById("loginInputMail");
  let loginInputPassword = document.getElementById("loginInputPassword");

  await loadUsers();

  user = users.find(
    (userIndex) =>
      userIndex.email === loginInputMail.value &&
      userIndex.password === loginInputPassword.value
  );
}

/**
 * Den Schlüssel im Backend setzen, um nach der Weiterleitung auf die main-page, den Benutzer als ein Objekt matchen zu können.
 * Set the key in the backend in order to be able to match the user as an object after redirection to the main page.
 * @param {The key is intended for remote storage.} currentUserId
 * @param {The user's email for use as an identification} globalUserId
 */
async function setGlobalUserId(currentUserId, globalUserId) {
  await setItem(currentUserId, globalUserId);
}

/**
 * Switch back from login page to register page. (Into index.html)
 */
function redirectToRegister() {
  let registerMain = document.getElementById("registerMain");
  let loginMain = document.getElementById("loginMain");
  loginMain.style.display = "none";
  registerMain.style.display = "flex";
}

/**
 * To hide or show currentpassword in any fild.
 * @param {each input from origin HTML-element} passwordId
 * @param {each inputImage from origin HTML-element} imageId
 */
function changeToShowCurrentPassword(passwordId, imageId) {
  let hideThePassword = document.getElementById(passwordId);
  let hideThePasswordImage = document.getElementById(imageId);

  if (hideThePassword.type == "password") {
    hideThePassword.type = "text";
    hideThePasswordImage.src = "/assets/img/login/visibilityOff.svg";
  } else {
    hideThePassword.type = "password";
    hideThePasswordImage.src = "/assets/img/login/lock.svg";
  }
}
