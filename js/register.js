let users = [];

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

function registerUser() {
  // let RegisterBtn = document.getElementById("RegisterBtn");
  // meinButton.disabled = true;
}

function addNewUser() {
  let registerInputName = document.getElementById("registerInputName");
  let registerInputEmail = document.getElementById("registerInputEmail");
  let registerInputPassword = document.getElementById("registerInputPassword");
  let colorCode = "#ff3d00"; // Setzen Sie die Standardfarbe hier, falls erforderlich. BESSER EINE FUNKTION GENERAGE RENDOM

  // Überprüfen Sie, ob alle erforderlichen Felder ausgefüllt sind.
  // in der if abfrage validieren????????????????
  if (registerInputName.value && registerInputEmail.value && password.value) {
    // Hier erstellen Sie einen neuen Benutzer mit der createUser-Funktion
    const newUser = createUser(
      registerInputName.value,
      registerInputEmail.value,
      registerInputPassword.value,
      colorCode
    );
    registerInputName.value = "";
    registerInputEmail.value = "";
    registerInputPassword.value = "";
  } else {
    console.error("Bitte füllen Sie alle erforderlichen Felder aus.");
  }
}

// Aus dem Call !!!
function getRandomColor(color) {
  var letters = "123456789ABCDE";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 14)];
  }
  return color;
}