/* SHOW SINGLE CONTACT JS */

async function loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor) {
  loadCurrentUserAlsoUsersAsObject()
  let currentUserId = await getGlobalUserId();
  await setCurrentContactId(contactId);
  console.log('Ausgabe showSingleContact: ', userId, contactId, name, email, phone, signature, userColor);
  await fillAllVariables();
  console.log('fillAllVariables()', fillAllVariables(name, email, phone, signature, userColor));
}

async function setCurrentContactId(contactId) {
  await setItem('currentContactId', contactId);
}

async function getCurrentContactId() {
  return await getItem('currentContactId');
}


async function setCurrentContactEmail(email) {
  await setItem('currentContactEmail', email);
}


async function getCurrentContactEmail(email) {

  return await (getItem('currentContactEmail'));
}


async function getCurrentContactId() {
  return await getItem('currentContactId');
}


async function getGlobalUserId() {
  let currentUserId = await getItem('currentUserId');

  return currentUserId;
}

async function getContactInfos() {
  let contacts = await user.contacts;
  let currentContactId = await getCurrentContactId()
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    if (contact.contactId === await currentContactId) {
      return contact;
    } else {
      console.log('ContactId was not found.')
    }
  }
}




async function fillAllVariables() {
  let contact = await getContactInfos();
  let email = contact.email;
  document.getElementById('singleContactName').innerText = contact.name;
  document.getElementById('singleContactEmail').innerText = contact.email;
  document.getElementById('singleContactPhone').innerText = contact.phone;
  document.getElementById('singleContactSignature').innerText = contact.signature;
  document.getElementById('singleContactSignature').style.backgroundColor = contact.userColor;

  setCurrentContactEmail(email);
}

async function openEmailProgram() {
  let email = await getCurrentContactEmail();
  window.open('mailto: ' + email);
}


/* SHOW SINGLE CONTACT */
async function goFromSingleContactToListContactContainer() {
  await setCurrentContactId([]);
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

