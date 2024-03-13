/* SHOW SINGLE CONTACT JS */
/*
async function initSingleContactColumn(userId, contactId, name, email, phone, signature, userColor) {
  fillAllVariables(name, email, phone, signature, userColor);
  await setCurrentContactId(contactId);
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

async function getCurrentContactInfos() {

  return getItem('currentContactInfos');
}

function fillAllVariables(name, email, phone, signature, userColor) {
  document.getElementById('singleContactName').innerText = name;
  document.getElementById('singleContactEmail').innerText = email;
  document.getElementById('singleContactPhone').innerText = phone;
  document.getElementById('singleContactSignature').innerText = signature;
  document.getElementById('singleContactSignature').style.backgroundColor = userColor;

  setCurrentContactEmail(email);
}

async function openEmailProgram() {
  let email = await getCurrentContactEmail();
  window.open('mailto: ' + email);
}

async function showSingleContactInfos() {
  document.getElementById('singleContactCol').display = "flex";
}

/* SHOW SINGLE CONTACT - evtl. RAUSWERFEN *//*
async function goFromSingleContactToListContactContainer() {
  await setCurrentContactId([]);
  await initListContact();
  document.getElementById("listContactContainer").style.display = "flex";
  document.getElementById("mobileBtnAddContact").style.display = "block";
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

}*/