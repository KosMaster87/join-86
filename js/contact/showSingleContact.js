/* SHOW SINGLE CONTACT JS */

async function loadShowSingleContact(contactId) {
  await loadCurrentUserAlsoUsersAsObject()
  await getCurrentContact(contactId);
  await setCurrentContactEmail(await email);
  await fillAllVariables(contactId);
}

async function setCurrentContactEmail(email) {
  await setItem('currentContactEmail', email);
}

async function getCurrentContactEmail() {
  return await getItem('currentContactEmail');
}

async function getCurrentContact(currentContactId) {
  let contacts = await user.contacts;
  console.log('RESPONSE USER.CONTACTS:', user.contacts);
  let contactId = currentContactId;
  console.log('RESPONSE currentContactId:', await contactId);
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    console.log('EINZELNER KONTAKT', contact);
    debugger;
    if (contact.contactId === await contactId) {
      return user.contacts[i].contactId;
    } else {
      console.log('ContactId was not found.')
    }
  }
}

async function fillAllVariables(contactId) {
  let contact = await getCurrentContact(contactId);

  document.getElementById('singleContactName').innerText = await contact.name;
  document.getElementById('singleContactEmail').innerText = await contact.email;
  document.getElementById('singleContactPhone').innerText = await contact.phone;
  document.getElementById('singleContactSignature').innerText = await contact.signature;
  document.getElementById('singleContactSignature').style.backgroundColor = await contact.userColor;

  setCurrentContactEmail(await contact.email);

  console.log("AUSGABE FUNKTION WIRD AUSGELÖST", contact.name); /* TEST ZUR AUSGABE */
}

async function openEmailProgram() {
  let email = await getCurrentContactEmail();
  window.open('mailto: ' + email);
}

/* SHOW SINGLE CONTACT TO LIST CONTACT CONTAINER */
async function goFromSingleContactToListContactContainer() {
  await initListContact();
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

