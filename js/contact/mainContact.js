
async function initMainContact() {
  await loadCurrentUserAlsoUsersAsObject();
  await includeHTML();
  setActiveLink("navContacts");
  await initListContact();
  createUserSignatureIcon();
  preparePopupEvent();
}

function getWindowWidth() {
  return window.innerWidth || documentElement.clientWidth || document.body.clientWidth;
}

let result = "";

/**
 *
 */
async function initWidthContacts() {
  let screenWidth = getWindowWidth()

  if (screenWidth <= 1219) {
    result = "mobileVersion";
  } else {
    result = "desktopVersion";
  }
}
