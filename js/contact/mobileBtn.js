async function setCurrentContactId(contactId) {
  await setItem('currentContactId', contactId);
} 

async function getCurrentContactId() {
  return await getItem('currentContactId');
} 

async function goToTopOfSite() {
  window.scrollTo(0,0);
}

/* MOBILE BUTTON ADD CONTACT */
function openAddContactContainer() {
  document.getElementById("addContactContainer").style.display = "block";
  document.getElementById("mobileBtnAddContact").style.display = "none";
  console.log("Open Add Contact Container");
}

/* MOBILE BUTTON THREE POINTS */

function showMobileSelectBtns() {
  document.getElementById("mobileBtnThreePoints").style.display = "none";
  document.getElementById("mobileBtnSelectOptions").style.display = "block";
  console.log('Change Button To Select Button');
}

/* DESKTOP BUTTON ADD NEW CONTACT */

function openAddContactContainerDesktop() {
  document.getElementById("desktopAddContactContainer").style.display = "block";
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

/* SINGLE CONTACT */
async function goFromSingleContactToListContactContainer() {
  await setCurrentContactId([]);
  goToTopOfSite()
  initListContact();
  document.getElementById("mobileBtnSelectOptions").style.display = "none";
  document.getElementById("mobileBtnThreePoints").style.display = "none";
  document.getElementById("showSingleContactContainer").style.display = "none";
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "block";
  document.getElementById("mobileBtnAddContact").style.display = "block";
  console.log('Close Single Contact Container and open list Contact Container!');
} //Final

async function goFromShowSingleContactToEditContact() {
  initEditContact();
  document.getElementById("mobileBtnThreePoints").style.display = "none";
  document.getElementById("mobileBtnSelectOptions").style.display = "none";
  document.getElementById("showSingleContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("editContactContainer").style.display = "block";
}

function closeShowSingleContactContainer() {
  goToTopOfSite();
  document.getElementById("showSingleContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
  console.log('Close Show Single Contact Container');
}





/* ADD CONTACT BUTTONS MOBILE*/
async function closeAddContactAndGoToShowSingleContactContainer() {
  let userId = await getCurrentContactId();
  goToTopOfSite();
  loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor)
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "none";
  document.getElementById("mobileBtnThreePoints").style.display = "block";
  document.getElementById("showSingleContactContainer").style.display = "block";
} //final

async function closeAddContactContainerWithoutAddingNewContact() {
  await initListContact();
  goToTopOfSite();
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
  
} //final

async function closeAddContactContainer() {
  await initListContact();
  goToTopOfSite();
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
  
  console.log('Close Add Contact Container');
}

/* DESKTOP ADD CONTACT BUTTONS DESKTOP */
async function desktopCloseAddContactAndGoToShowSingleContactContainer() {
  goToTopOfSite();
  document.getElementById("desktopAddContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
  //document.getElementById("mobileBtnAddContact").style.display = "none";
  //document.getElementById("mobileBtnThreePoints").style.display = "block";
  document.getElementById("showSingleContactContainer").style.display = "block";
} //final

async function desktopCloseAddContactContainerWithoutAddingNewContact() {
  await initListContact();
  goToTopOfSite();
  document.getElementById("addContactContainer").style.display = "none";
  //document.getElementById("mobileBtnAddContact").style.display = "block";
  
} //final

async function desktopCloseAddContactContainer() {
  await initListContact();
  goToTopOfSite();
  document.getElementById("addContactContainer").style.display = "none";
  //document.getElementById("mobileBtnAddContact").style.display = "block";
  
  console.log('Close Add Contact Container');
}

async function desktopOpenAddContactContainer() {
  goToTopOfSite();
  document.getElementById("desktopAddContactContainer").style.display = "block";
  document.getElementById("test").style.display = "block";
  document.getElementById("test").classList.add('show');
  //document.getElementById("mobileBtnAddContact").style.display = "none";
  //document.getElementById("mobileBtnThreePoints").style.display = "block";
  document.getElementById("showSingleContactContainer").style.display = "none";
} //final


