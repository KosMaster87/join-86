async function initMainContact() {
    let userId = getGlobalUserId();
    loadCurrentUserAlsoUsersAsObject()
    await includeHTML();
    setActiveLink("navContacts");
    updateBackgroundColorMain(isListContactActive);
    await initListContact();
    createUserSignatureIcon();
    document.getElementById("listContactContainer").style.display = "block";
  } 