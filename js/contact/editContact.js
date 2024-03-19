//Edit Contact JS
async function initEditContact() {
  await getCurrentContactNew();
  await initializeAllVariables();
}

async function getContactId() {
  return await getItem('contactId');
}

async function initializeAllVariables() {
  let contact = await getCurrentContactNew();
  let signature = contact.signature
  document.getElementById('editContactInputName').value = contact.name;
  document.getElementById('editContactInputEmail').value = contact.email;
  document.getElementById('editContactInputPhone').value = contact.phone;
  document.getElementById('editContactHeaderSignature').innerText = signature;
  document.getElementById('editContactHeaderSignature').style.backgroundColor = contact.userColor;
  document.getElementById('editContactBodySignature').innerText = signature;
  document.getElementById('editContactBodySignature').style.backgroundColor = contact.userColor;
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

  if (checkAllInputFields('edit', inputName, inputEmail, inputPhone) === true) {
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
          await editContactIsSavedGoToSingleContact(); 
          console.log('SPEICHERN ABGESCHLOSSEN');
        } else {
          console.log('Response currentContactId: ' + inputContactId + ' not found.')
        }
      }
    } else {
      console.log('Response contact not found.')
    }
  }
}


async function editContactIsSavedGoToSingleContact() {
  let contactId = await getContactId();
  let result = getWindowWidth(); 
  console.log(getWindowWidth());
  await loadShowSingleContact(contactId);
  if (result < 1200) {
    document.getElementById("listContactContainer").style.display = "none";
    document.getElementById("editContactContainer").style.display = "none";
    document.getElementById("mobileBtnAddContact").style.display = "none"; 
    document.getElementById("mobileBtnThreePoints").style.display = "block";
    document.getElementById("showSingleContactContainer").style.display = "block";
  } else {
    await initListContact();
    document.getElementById("showSingleContactContainer").style.display = "flex";
    document.getElementById("editContactContainer").style.display = "none";
    document.getElementById("singleContactCol").style.display = "flex";
  }
}

function startPageUpdate() {
  location.reload();
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
}
/*
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
}*/

async function deleteAtEditContactDesktop() {
  await deleteContact();
  await initListContact();
  await setContactId([]);
  document.getElementById('editContactContainer').style.display = "none";
  document.getElementById('showSingleContactContainer').style.display = "none";
  document.getElementById('listContactContainer').style.display = "flex";
  document.getElementById('mobileBtnSelectOptions').style.display = "none";
  document.getElementById('mobileBtnAddContact').style.display = "block";
}

async function saveChangesAtEditContactMobile() {
  await saveChangesAtEditContact();
}

