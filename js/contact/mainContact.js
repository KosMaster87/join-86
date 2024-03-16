
async function initMainContact() {
  await loadCurrentUserAlsoUsersAsObject();
  await includeHTML();
  setActiveLink("navContacts");
  await initListContact();
  createUserSignatureIcon();
}
