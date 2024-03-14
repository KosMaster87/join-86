/* SHOW SINGLE CONTACT JS */

async function loadShowSingleContact(contactId) {
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
  let contacts = await user.contacts;
  let contactId = currentContactId;
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    if (contact.contactId === await contactId) {
      console.log('SELEKTIERTER KONTAKT', user.contacts[i])
      return user.contacts[i];
    } else {
      console.log('ContactId was not found.')
    }
  }
}

async function fillAllVariables(contactId) {
  let contact = await getCurrentContact(contactId);
  console.log('Contact lesbar ?', contact)  
  console.log('Name', contact.name);

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

