async function setCurrentContactId(contactId) {
  await setItem('currentContactId', contactId);
}

async function getCurrentContactId() {
  return await getItem('currentContactId');
}

async function goToTopOfSite() {
  window.scrollTo(0, 0);
}

/* MOBILE BUTTON ADD CONTACT */
function openAddContactContainer() {
  initAddContact();
  document.getElementById("addContactContainer").style.display = 'flex';
  document.getElementById("overlayFrame").style.display = 'flex';
  document.getElementById("mobileBtnAddContact").style.display = "none";
}

/* MOBILE BUTTON THREE POINTS */

function showMobileSelectBtns() {
  document.getElementById("mobileBtnThreePoints").style.display = "none";
  document.getElementById("mobileBtnSelectOptions").style.display = "block";
  console.log('Change Button To Select Button');
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

function openEditContactContainer() {
  document.getElementById("editContactContainer").style.display = "block";
  document.getElementById("mobileBtnAddContact").style.display = "none";
  console.log("Open Edit Contact Container ist erfolgt!");
}

async function closeEditContactAndGoToListContactContainer() {
  await setCurrentContactId([]);
  goToTopOfSite();
  document.getElementById("mobileBtnSelectOptions").style.display = "none";
  document.getElementById("editContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
  document.getElementById("listContactContainer").style.display = "block";
  console.log("Open Edit Contact Container ist erfolgt!");
}


function saveEditContact() {
  document.getElementById("editContact").style.display = "none";
}


function openShowSingleContactContainer(userId, contactId, name, email, phone, signature, userColor) {
  goToTopOfSite();
  document.getElementById("showSingleContactContainer").style.display = "block";
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "none";
  document.getElementById("mobileBtnThreePoints").style.display = "block";
  console.log('Open Show Single Contact Container');
  loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor);
}


/* DESKTOP ADD CONTACT BUTTONS DESKTOP */
async function desktopCloseAddContactAndGoToShowSingleContactContainer() {
  goToTopOfSite();
  document.getElementById("desktopAddContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
  //document.getElementById("mobileBtnAddContact").style.display = "none";
  //document.getElementById("mobileBtnThreePoints").style.display = "block";
  document.getElementById("showSingleContactContainer").style.display = "block";
}







