/**
 * Starten des Programms für die Kontakte.
 */
async function initMainContact() {
  // let userId = getGlobalUserId();
  await loadCurrentUserAlsoUsersAsObject();
  await includeHTML();
  setActiveLink("navContacts");

  // updateBackgroundColorMain(isListContactActive);
  await initListContact();
  createUserSignatureIcon();
  // document.getElementById("listContactContainer").style.display = "block";
}
