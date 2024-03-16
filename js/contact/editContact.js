//Edit Contact JS

async function initEditContact() {
  await getCurrentContactNew();
  await initializeAllVariables()
}

async function getContactId() {
  return await getItem('contactId');
}

async function initializeAllVariables() {
  let contact = await getCurrentContactNew();
  let signature = (contact.signature).toString();
  document.getElementById('editContactInputName').value = contact.name;
  document.getElementById('editContactInputEmail').value = contact.email;
  document.getElementById('editContactInputPhone').value = contact.phone;
  /*document.getElementById('editContactSignature').innerText = signature;*/
  /*document.getElementById('editContactSignature').style.backgroundColor = contact.userColor;*/
}

function getSignature(name) {
  let arrayName = splitName(name);
  let signature = getFirstChars(arrayName);

  return signature;
}

function splitName(name) {
  let arrayName = [];
  let string = name;
  arrayName = string.toUpperCase().split(" ");

  return arrayName;
}

function getFirstChars(arrayName) {
  let firstChars = '';
  for (let i = 0; i < arrayName.length; i++) {
    firstChars += arrayName[i][0];
  }

  return firstChars;
}

async function deleteContact() {
  let contactId = await getContactId();
  let contacts = await user.contacts;
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    if (contact['contactId'] === contactId) {
      contacts.splice(i, 1);
    }
  }

  await setItem('users', JSON.stringify(users));
  await setContactId([]);
}

/* Auslesen des aktuellen Kontakts über ContactId und aktuellen User */
async function getCurrentContactNew() {
  let contactId = await getContactId();
  let contacts = await user.contacts;
  if (contactId) {
    let contact = contacts.find(contact => contact.contactId === contactId);
    if (contact) {
      return contact;
    } else {
      console.log('Kontakt nicht gefunden');
    }
  } else {
    console.log('CurrentContactId existiert nicht');
  }
}

/* ANFANG PRÜFUNG DER DATENEINGABE */
function checkAllInputFieldsForEditContact(name, phone, email) {
  if (checkInputNameForEditContact(name) === true && checkInputEmailForEditContact(email) === true && checkInputPhoneForEditContact(phone)) {
    return true
  } else {
    console.log('Fehlerhafte Dateneingabe')
    return false;
  }
}

function checkInputNameForEditContact(input) {
  let name = input;
  if (name == "") {
    showInputMessage('editContactMessageName', 'Please enter a name');
    showAlertBorder('editContactInputContainerName');
  } else {
    resetInputMessage('editContactMessageName');
    resetAlertBorder('editContactInputContainerName');
    return true;
  }
}

function checkInputEmailForEditContact(input) {
  let email = input;
  if (email === "") {
    return true;
  } else if (checkAtSymbolExistsForEditContact(email) === false) {
    showInputMessage('editContactMessageEmail', 'The @ sign is missing');
    showAlertBorder('editContactInputContainerEmail');
    return false;
  } else {
    return true;
  }
}

function checkAtSymbolExistsForEditContact(input) {
  let email = input;
  if (email.indexOf('@') != -1) {
    return true;
  } else {
    return false;
  }
}

function checkInputPhoneForEditContact(phone) {
  let phoneNumber = phone;
  const regex = /^[\d ()+-]+$/;

  if (phoneNumber === "") {
    return true;
  } else if (regex.test(phoneNumber)) {
    resetInputMessage('editContactMessagePhone');
    resetAlertBorder('editContactInputContainerPhone');
    return true;
  } else {
    showInputMessage('editContactMessagePhone', 'Phone number ist not valid');
    showAlertBorder('editContactInputContainerPhone');
    return false;
  }
}

/* ENDE PRÜFUNG DER DATENEINGABE */

/* ANFANG - AUSGABE UND ZURÜCKSETZEN DER FEHLERMELDUNGEN */

function showInputMessage(inputField, message) {
  document.getElementById(inputField).innerText = message;
}

function resetInputMessage(inputField) {
  document.getElementById(inputField).innerText = '';
}

function resetAllInputMessages() {
  resetInputMessage('editContactMessageName');
  resetInputMessage('editContactMessageEmail');
  resetInputMessage('editContactMessagePhone');
}
/* ENDE - AUSGABE UND ZURÜCKSETZEN DER FEHLERMELDUNGEN*/


/* ANFANG - ANZEIGEN UND ZURÜCKSETZEN DER BORDERFARBE */
function showAlertBorder(inputContainer) {
  document.getElementById(inputContainer).classList.add('alertBorder');
}

function resetAlertBorder(inputContainer) {
  document.getElementById(inputContainer).classList.remove('alertBorder');
}

function resetAllAlertBorders() {
  resetAlertBorder('editContactInputContainerName');
  resetAlertBorder('editContactInputContainerEmail');
  resetAlertBorder('editContactInputContainerPhone');
}
/* ANFANG - ANZEIGEN UND ZURÜCKSETZEN DER BORDERFARBE */

/* ANFANG - AUTOFOKUS BEIM ANKLICKEN DES INPUTFELDES */
function editFocusBorder(idFocus, idRemoveFocus, idDeleteFocus) {
  addFocusBorder(idFocus);
  removeFocusBorder(idRemoveFocus);
  removeFocusBorder(idDeleteFocus);
}

function addFocusBorder(containerId) {
  let input = document.getElementById('editContactInputContainer' + containerId);
  input.classList.add('focus');
}

function removeFocusBorder(containerId) {
  let input = document.getElementById('editContactInputContainer' + containerId);
  input.classList.remove('focus');
}
/* ENDE - AUTOFOKUS BEIM ANKLICKEN DES INPUTFELDES */

async function saveChangesAtEditContact() {
  let currentContact = await getCurrentContactNew();
  let inputContactId = await getContactId();
  let inputUserId = await user.email;
  let contacts = await user.contacts;
  let inputUserColor = await currentContact.userColor;
  let inputName = (document.getElementById('editContactInputName').value).trim();
  let inputPhone = (document.getElementById('editContactInputPhone').value).trim();
  let inputEmail = (document.getElementById('editContactInputEmail').value).trim();
  let inputSignature = getSignature(inputName);

  /* */
  if (checkAllInputFieldsForEditContact(inputName, inputPhone, inputEmail) === true) {

    if (inputContactId) {
      for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        if (contact.contactId === inputContactId) {
          user.contacts[i].contactId = inputContactId,
            user.contacts[i].userId = inputUserId,
            user.contacts[i].name = inputName,
            user.contacts[i].email = inputEmail,
            user.contacts[i].phone = inputPhone,
            user.contacts[i].signature = inputSignature;
          user.contacts[i].userColor = inputUserColor;

          await setItem('users', JSON.stringify(users));
        } else {
          console.log('Response currentContactId: ' + inputContactId + ' not found.')
        }
      }
    } else {
      console.log('Response contact not found.')
    }
  }
}


async function goFromDeleteContactToListContact() {
  await setContactId([]);
  await deleteContact();
  await initListContact();
  document.getElementById('editContactContainer').style.display = "none";
  document.getElementById('showSingleContactContainer').style.display = "none";
  document.getElementById('listContactContainer').style.display = "flex";
  document.getElementById('mobileBtnSelectOptions').style.display = "none";
  document.getElementById('mobileBtnAddContact').style.display = "block";
}

async function desktopCloseAddContactContainerWithoutAddingNewContact() {
  /* alles ggf. zurücksetzen */
  document.getElementById('editContactContainer').style.display = "none";
  document.getElementById('showSingleContactContainer').style.display = "flex";
  document.getElementById('mobileBtnSelectOptions').style.display = "none";
  document.getElementById('mobileBtnAddContact').style.display = "none";
}

async function saveChangesDesktop() {
  let contactId = await getContactId();
  await saveChangesAtEditContact();
  startPageUpdate();
  await initListContact();
  await loadShowSingleContact(contactId);
  document.getElementById('editContactContainer').style.display = "none";
  document.getElementById('showSingleContactContainer').style.display = "none";
  document.getElementById('listContactContainer').style.display = "flex";
  document.getElementById('mobileBtnSelectOptions').style.display = "none";
  document.getElementById('singleContactCol').style.display = "block";
  document.getElementById('mobileBtnAddContact').style.display = "none";
}

async function saveChangesMobile() {
  let contactId = await getContactId();
  await saveChangesAtEditContact();
  await initListContact();
  await loadShowSingleContact(contactId);
  document.getElementById('editContactContainer').style.display = "none";
  document.getElementById('showSingleContactContainer').style.display = "flex";
  document.getElementById('listContactContainer').style.display = "none";
  document.getElementById('mobileBtnSelectOptions').style.display = "none";
  document.getElementById('singleContactCol').style.display = "none";
  document.getElementById('mobileBtnAddContact').style.display = "none";
}

function startPageUpdate() {
  location.reload();
}