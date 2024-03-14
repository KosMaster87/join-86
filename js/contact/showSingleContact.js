/* SHOW SINGLE CONTACT JS */



async function loadShowSingleContact(contactId, name, email, phone, signature, userColor) {
  loadCurrentUserAlsoUsersAsObject()
  let currentUserId = await getGlobalUserId();
  await setCurrentContactEmail(await email);
  await setCurrentContactId(contactId);
  console.log('Ausgabe showSingleContact - Contact Inhalte', userId, contactId, name, email, phone, signature, userColor);
  await fillAllVariables(contactId, name, email, phone, signature, userColor);
  console.log('fillAllVariables()', await fillAllVariables(contactId, name, email, phone, signature, userColor));
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


async function getCurrentContactEmail() {

  return await (getItem('currentContactEmail'));
}


async function getCurrentContactId() {
  return await getItem('currentContactId');
}


async function getGlobalUserId() {
  let currentUserId = await getItem('currentUserId');

  return currentUserId;
}

/* Variante Daten auslesen aus user.contacts)
async function getContactInfos() {
  let contacts = await user.contacts;
  console.log('RESPONSE USER.CONTACTS:', user.contacts);
  let currentContactId = await getCurrentContactId()
  console.log('RESPONSE currentContactId:', await currentContactId);
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    console.log('EINZELNER KONTAKT', contact);
    debugger;
    if (contact.contactId === await currentContactId) {
      return user.contacts[i].contactId;
    } else {
      console.log('ContactId was not found.')
    }
  }
}*/

async function fillAllVariables(userId, contactId, name, email, phone, signature, userColor) {
 /* let contact = await getContactInfos();Alternativlösung: Kontaktinfos auslesen aus user.contacts */
 /* let email = contact.email; */
  let userIdPlaceholder = userId; /* nur als Platzhalter zum überbrücken */
  let contactIdPlaceholder = contactId; /* nur als Platzhalter zum überbrücken */

  document.getElementById('singleContactName').innerText = await name;
  document.getElementById('singleContactEmail').innerText = await email;
  document.getElementById('singleContactPhone').innerText = await phone;
  document.getElementById('singleContactSignature').innerText = await signature;
  document.getElementById('singleContactSignature').style.backgroundColor = await userColor;

  setCurrentContactEmail(await email);
/*
  document.getElementById('singleContactNameN').innerText = await name;
  document.getElementById('singleContactEmailN').innerText = await email;
  document.getElementById('singleContactPhoneN').innerText = await phone;
  document.getElementById('singleContactSignatureN').innerText = await signature;
  document.getElementById('singleContactSignatureN').style.backgroundColor = await userColor;

  setCurrentContactEmail(await email);*/

  return "AUSGABE FUNKTION WIRD AUSGELÖST" + name; /* TEST ZUR AUSGABE */
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

