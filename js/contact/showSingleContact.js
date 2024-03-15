/* SHOW SINGLE CONTACT JS */

async function loadShowSingleContact(contactId) {
  console.log('singleContact Z. 4 contactId / Ankuft bei singleC', contactId);
  await loadCurrentUserAlsoUsersAsObject();
  await getCurrentContact(contactId);
  await fillAllVariables(contactId);
}

async function setCurrentContactEmail(email) {
  await setItem("currentContactEmail", email);
}

async function getCurrentContactEmail() {
  return await getItem('currentContactEmail');
}

async function getCurrentContact(currentContactId) {
  console.log('RES ContactId Speicher SingleContact Z. 18',currentContactId);
  let contacts = user.contacts;
  console.log('RES user.contacts SingleContact Z. 18',user.contacts);
  let contactId = currentContactId;
  console.log('RES',contactId);
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    if (contact.contactId === contactId) {
      console.log('RES MÖGLICHER KONTAKT ?', user.contacts[i])
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
  await setItem('currentContactId', []);
  document.getElementById("showSingleContactContainer").style.display = "none";
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "flex";
  document.getElementById("mobileBtnAddContact").style.display = "block";
  document.getElementById("mobileBtnSelectOptions").style.display = "none";
  document.getElementById("mobileBtnThreePoints").style.display = "none";
}

async function goFromShowSingleContactToEditContact() {
  initEditContact();
  document.getElementById("mobileBtnThreePoints").style.display = "none";
  document.getElementById("mobileBtnSelectOptions").style.display = "none";
  document.getElementById("showSingleContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("editContactContainer").style.display = "flex";
}

function closeShowSingleContactContainer() {
  document.getElementById("showSingleContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
}

