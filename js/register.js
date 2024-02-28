/**
 * Durch die redirectToIndex(); wird die login.html laufzeit beendet und der Massiv "users;" gelöscht.
 * Through the redirectToIndex(); the login.html runtime is terminated and the massive "users;" deleted.
 */
let users = [];

// TODO validate
/**
 * The registration of a new user.
 */
function registerNewUser() {
  let registerInputName = document.getElementById("registerInputName");
  let registerInputEmail = document.getElementById("registerInputEmail");
  let registerInputPassword = document.getElementById("registerInputPassword");
  let registerInputPasswordConfirm = document.getElementById(
    "registerInputPasswordConfirm"
  );
  let registerBtn = document.getElementById("registerBtn");
  let colorCode = "#ff3d00";

  registerBtn.disabled = true;
  users.push({
    name: registerInputName.value,
    email: registerInputEmail.value,
    password: registerInputPassword.value,
    colorCode,
  });
  console.log(users);
  secondaryFunctions();
}

async function secondaryFunctions() {
  await setItem("users", JSON.stringify(users));
  resetForm();
  redirectToLoin();
}

/**
 * Reset registration form values.
 */
function resetForm() {
  registerInputName.value = "";
  registerInputEmail.value = "";
  registerInputPassword.value = "";
  registerInputPasswordConfirm.value = "";
  registerBtn.disabled = false;
}

/**
 * Switch back from register page to login page.
 */
function redirectToLoin() {
  // window.location.assign("../pages/login.html"); // Alte version.
  let registerMain = document.getElementById("registerMain");
  let loginMain = document.getElementById("loginMain");

  // registerMain.classList.remove("show");
  // registerMain.classList.add("hide");
  loginMain.style.display = "flex";

  // loginMain.classList.remove("hide");
  // loginMain.classList.add("show");
  registerMain.style.display = "none";
}

// ---------------------------------------------------------------------------

// TODO
function getRandomColor(color) {
  var letters = "123456789ABCDE";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 14)];
  }
  return color;
}

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

// Kann man auch für Popups benutzen. Mit
/**
 * Change border color from parent element.
 * @param {string} containerId
 */
function changeBorderColor(containerId) {
  let focusContainer = document.getElementById(containerId);
  focusContainer.classList.add("active");
}

/**
 * Change border color from parent element.
 * @param {string} containerId
 */
function resetBorderColor(containerId) {
  let focusContainer = document.getElementById(containerId);
  focusContainer.classList.remove("active");
}

// ---------------------------------------------------------------------------
