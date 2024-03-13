/**
 * Load the content of the legal-notice.
 */
async function initLegalNotice() {
  await loadCurrentUserAlsoUsersAsObject();
  await includeHTML();
  setActiveLink("navLegalNotice");
  await getAllContactsFromCurrentUserSorted();
  createUserSignatureIcon();

  if (user) {
    preparePopupEvent();
  } else {
    users = [];
    user = [];
    let menuItemBox = document.getElementById("menuItemBox");
    let userSymbolContainerID = document.getElementById(
      "userSymbolContainerID"
    );
    menuItemBox.style.display = "none";
    userSymbolContainerID.style.display = "none";
  }
}

/**
 * Ohne sich angemeldet zu haben, die privat-policy lesen.
 */
function offlineLegality() {
  window.location.assign("pages/legality.html");
}
