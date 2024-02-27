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
 * Switch to index.html.
 */
function redirectToIndex() {
  const urlParams = new URLSearchParams(window.location.search);
  const msg = urlParams.get("msg");

  if (msg) {
    console.log("Weiterleitung zur index.html");
    window.location.href = "index.html";
  } else {
    console.log("Keine Weiterleitung erfolgt!");
  }
}

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
    redirectToIndex();
  } else {
    console.log("Benutzer nicht gefunden");
  }
}
