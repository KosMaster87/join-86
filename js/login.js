let user;

/**
 * Change border color from parent element.
 * @param {string} containerId
 */
function changeBorderColor(containerId) {
  let FocusContainer = document.getElementById(containerId);
  FocusContainer.classList.add("active");
}

/**
 * Change border color from parent element.
 * @param {string} containerId
 */
function resetBorderColor(containerId) {
  let FocusContainer = document.getElementById(containerId);
  FocusContainer.classList.remove("active");
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
    hideThePasswordImage.src = "/assets/img/login/visibility_off.svg";
  } else {
    hideThePassword.type = "password";
    hideThePasswordImage.src = "/assets/img/login/lock.svg";
  }
}

/**
 * Switch to register page.
 */
function redirectToRegister() {
  // Hier den Pfad zur Ziel-HTML-Seite eintragen
  window.location.href = "registrierungsseite.html";
}

function login() {
  let loginInputMail = document.getElementById("loginInputMail");
  let loginInputPassword = document.getElementById("loginInputPassword");

  loadUsers();

  user = users.find(
    (userIndex) =>
      userIndex.email === loginInputMail.value &&
      userIndex.password === loginInputPassword.value
  );
  console.log(user);

  if (user) {
    console.log("user gefunden");

    redirectToRegister();
  }
}
