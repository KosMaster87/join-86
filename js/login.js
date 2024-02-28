let user;
let currentlyLastPageAndPosition = wert;
  /**
   * Change border color from parent element.
   * @param {string} containerId
   */
  function changeBorderColor(containerId) {
    let FocusContainer = document.getElementById(containerId);
    FocusContainer.classList.add("active");
  };

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
    redirectToIndex();
  } else {
    console.log("Benutzer nicht gefunden");
  }
}

// TODO register login hidden; und 2x w3 und mainContent show.
/**
 * If user login, then switch to loin area. show/hide
 */
function redirectToIndex() {
  // window.location.href = "../index.html";
  let loginMain = document.getElementById("loginMain");
  let mainHeader = document.getElementById("mainHeader");
  let mainMenu = document.getElementById("mainMenu");
  let mainContent = document.getElementById("mainContent");

  loginMain.classList.remove("show");
  loginMain.classList.add("hide");

  mainHeader.style.display = "flex";
  mainMenu.style.display = "flex";
  mainContent.style.display = "flex";

  thanLoadCurrentlyPage();
}

/**
 * Switch back from login page to register page. (Into index.html)
 */
function redirectToRegister() {
  // window.location.assign("../pages/register.html"); // Alte version.
  let registerMain = document.getElementById("registerMain");
  let loginMain = document.getElementById("loginMain");

  loginMain.classList.remove("show");
  loginMain.classList.add("hide");

  registerMain.classList.remove("hide");
  registerMain.classList.add("show");
}

function thanLoadCurrentlyPage() {
  if (currentlyLastPageAndPosition) {
  }
}
