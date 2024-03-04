// --------------------------------------------------------

// --------------------------------------------------------

/**
 * The registration of a new user.
 */
/**
 * The registration of a new user.
 */
async function registerNewUser() {
  let registerInputName = document.getElementById("registerInputName");
  let registerInputEmail = document.getElementById("registerInputEmail");
  let registerInputPassword = document.getElementById("registerInputPassword");
  let registerInputPasswordConfirm = document.getElementById(
    "registerInputPasswordConfirm"
  );
  let registerBtn = document.getElementById("registerBtn");
  let colorCode = "#ff3d00";

  try {
    // Laden Sie zuerst die Benutzerdaten, bevor Sie auf die Länge von "users" zugreifen.
    await loadUsers();

    const IndexForUser = users.length + 1; // +1 ist Optional.

    registerBtn.disabled = true;

    users.push({
      index: IndexForUser,
      name: registerInputName.value,
      email: registerInputEmail.value,
      password: registerInputPassword.value,
      colorCode,
      tasks: [],
    });

    console.log(users);
    await secondaryFunctions(IndexForUser);
  } catch (error) {
    console.error("Fehler bei der Registrierung:", error);
    // Fügen Sie hier ggf. eine entsprechende Fehlerbehandlung hinzu.
  }
}

/**
 * Im backand mit dem Schlüssel das Array speichern.
 * @param {object} users
 */
async function secondaryFunctions(IndexForUser) {
  await setItem("users", JSON.stringify(users));
  await setItem("currentIndex", IndexForUser);
  resetForm();
  redirectToLoin();
}

// --------------------------------------------------------

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
  let registerMain = document.getElementById("registerMain");
  let loginMain = document.getElementById("loginMain");
  loginMain.style.display = "flex";
  registerMain.style.display = "none";
}

// --------------------------------------------------------

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
