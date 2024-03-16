async function setCurrentContactId(contactId) {
  await setItem('currentContactId', contactId);
}

async function getCurrentContactId() {
  return await getItem('currentContactId');
}

async function goToTopOfSite() {
  window.scrollTo(0, 0);
}
/* DESKTOP BUTTON ADD NEW CONTACT */

function desktopBtnGoFromListContactToAddContact() {
  document.getElementById("addContactContainer").style.display = "block";
  document.getElementById("overlayFrame").style.display = 'block';
  setTimeout(function() {
    document.getElementById("overlayFrame").classList.add("overlayVisible");
  }, 50);
  document.getElementById("mobileBtnAddContact").style.display = "none";
}

/* EDIT CONTACT */

async function closeEditContactAndGoToListContactContainer() {
  await setCurrentContactId([]);
  goToTopOfSite();
  document.getElementById("mobileBtnSelectOptions").style.display = "none";
  document.getElementById("editContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
  document.getElementById("listContactContainer").style.display = "block";
}

function saveEditContact() {
  document.getElementById("editContact").style.display = "none";
}

/* DESKTOP ADD CONTACT BUTTONS DESKTOP */
async function desktopCloseAddContactAndGoToShowSingleContactContainer() {
  goToTopOfSite();
  document.getElementById("desktopAddContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("showSingleContactContainer").style.display = "block";
}







