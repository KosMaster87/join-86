let user;

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

/**
 * The current user will be logged in.
 */
async function login() {
  let loginInputMail = document.getElementById("loginInputMail");
  let loginInputPassword = document.getElementById("loginInputPassword");

  await loadUsers();

  user = users.find(
    (userIndex) =>
      userIndex.email === loginInputMail.value &&
      userIndex.password === loginInputPassword.value
  );
  console.log(user);

  if (user) {
    console.log("Benutzer gefunden");
    window.location.assign("pages/summary.html");
  } else {
    console.log("Benutzer nicht gefunden");
  }
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
