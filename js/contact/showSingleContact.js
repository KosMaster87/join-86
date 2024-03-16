/* SHOW SINGLE CONTACT JS */
async function loadShowSingleContact(contactId) {
  await getCurrentContact(contactId);
  await fillAllVariables(contactId);
  await setContactId(contactId);
  await getContactId();
}

async function setCurrentContactEmail(email) {
  await setItem("currentContactEmail", email);
}

async function getCurrentContactEmail() {
  return await getItem('currentContactEmail');
}

async function setContactId(contactId) {
  await setItem('contactId', contactId)
}

async function getContactId() {
  await getItem('contactId');
}

async function getCurrentContact(currentContactId) {
  let contacts = user.contacts;
  let contactId = currentContactId;
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    if (contact.contactId === contactId) {
      return user.contacts[i];
    } else {
    }
  }
}

async function fillAllVariables(contactId) {
  let contact = await getCurrentContact(contactId);
  document.getElementById('singleContactName').innerText = contact.name;
  document.getElementById('singleContactEmail').innerText = contact.email;
  document.getElementById('singleContactPhone').innerText = contact.phone;
  document.getElementById('singleContactSignature').innerText = contact.signature;
  document.getElementById('singleContactSignature').style.backgroundColor = contact.userColor;

  setCurrentContactEmail(contact.email);
}

async function openEmailProgram() {
  let email = await getCurrentContactEmail();
  window.open('mailto: ' + email);
}

/* SHOW SINGLE CONTACT TO LIST CONTACT CONTAINER */
async function goFromSingleContactToListContactContainer() {
  
  await initListContact();
  await setContactId([]);
  document.getElementById("showSingleContactContainer").style.display = "none";
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "flex";
  document.getElementById("mobileBtnAddContact").style.display = "block";
  document.getElementById("mobileBtnSelectOptions").style.display = "none";
  document.getElementById("mobileBtnThreePoints").style.display = "none";
}

async function goFromShowSingleContactToEditContact() {
  let contactId = await getContactId()
  initEditContact(contactId);
  document.getElementById("mobileBtnThreePoints").style.display = "none";
  document.getElementById("mobileBtnSelectOptions").style.display = "none";
  document.getElementById("showSingleContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("editContactContainer").style.display = "block";
  document.getElementById("editOverlayFrame").style.display = "flex";
}

function closeShowSingleContactContainer() {
  document.getElementById("showSingleContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
}

/* MOBILE BUTTON THREE POINTS */

function showMobileSelectBtns() {
  document.getElementById("mobileBtnThreePoints").style.display = "none";
  document.getElementById("mobileBtnSelectOptions").style.display = "block";
}

/* OPEN EDIT CONTACT  */

async function openEditContactContainer() {
  await initEditContact()
  document.getElementById("editContactContainer").style.display = "block";
  document.getElementById("editOverlayFrame").style.display = "block";
  document.getElementById("mobileBtnAddContact").style.display = "none";
}

async function deleteContactAtSingleContactDestkop() {
  await deleteContact();
  await initListContact();
  document.getElementById("mobileBtnThreePoints").style.display = "none";
  document.getElementById("mobileBtnSelectOptions").style.display = "none";
  document.getElementById("showSingleContactContainer").style.display = "flex";
  document.getElementById("listContactContainer").style.display = "flex";
  document.getElementById("singleContactCol").style.display = "none";
}

async function openEditContactAtSingleContactDesktop() {
  await initEditContact();
  document.getElementById("editContactContainer").style.display = "block";
  document.getElementById("editOverlayFrame").style.display = "block";
  document.getElementById("mobileBtnAddContact").style.display = "none";
}

async function deleteContactAtShowSingleContactMobile() {
  await getContactId();
  await deleteContact();
  await initListContact();
  document.getElementById("mobileBtnThreePoints").style.display = "none";
  document.getElementById("mobileBtnSelectOptions").style.display = "none";
  document.getElementById("showSingleContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "flex";
  document.getElementById("singleContactCol").style.display = "none";
}
