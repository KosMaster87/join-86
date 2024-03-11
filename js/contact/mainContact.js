async function initMainContact() {
    let userId = getGlobalUserId();
    loadCurrentUserAlsoUsersAsObject()
    await includeHTML();
    setActiveLink("navContacts");
    updateBackgroundColorMain(isListContactActive);
    await initListContact();
    document.getElementById("listContactContainer").style.display = "block";
  } 