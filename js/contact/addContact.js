const contactColors = ["var(--red)", "var(--yellow)", "var(--orangeIcons)", "var(--green)", "var(--pink)", "var(--mintGreen)"];

async function initAddContact() {
  await setContactId([]);
  resetInputFields();
  editFocusBorder('Name', 'Email', 'Phone');
  resetAllInputMessages();
  resetAllAlertBorders();
}

async function initSaveProcess() {
  let name = (document.getElementById('addContactInputName').value).trim();
  let email = (document.getElementById('addContactInputEmail').value).trim();
  let phone = (document.getElementById('addContactInputPhone').value).trim();

  if (checkAllInputFields(name, email, phone) === true) {
    
    await saveContactAddContact(name, email, phone);
    resetInputFields();
  } else {
    console.log('Fehlerhafter Dateneintrag')
    disableSaveProcess();
  }
}

async function getAllContactsFromCurrentUser() {

  return await getAllContactsFromCurrentUserSorted();
}

/* Alternativer Speicherprozess */
async function saveContactAddContact(name, email, phone) {
  let contactId = generateRandomId();
  let userColor = getRandomColor(contactColors);
  let signature = getSignature(name);
  let currentusers = users;
  for (let i = 0; i < currentusers.length; i++) {
    if (currentusers[i].email === user.email) {
      let contact = {
        userId: user.email,
        contactId: contactId,
        name: name,
        email: email,
        phone: phone,
        userColor: userColor,
        signature: signature
      };
      user.contacts.push(contact);
    }
  } 
  await setItem('users', users);
  await setContactId(contactId);
  /*closeAddContactAndGoToShowSingleContactContainer(contactId);*/
  /*document.getElementById('overlayFrame').style.display = "flex";  TODO: PRÜFEN, OB NOCH KORREKT */ 
}

function resetInputFields() {
  document.getElementById('addContactInputName').value = '';
  document.getElementById('addContactInputEmail').value = '';
  document.getElementById('addContactInputPhone').value = '';
}

function getRandomColor(userColors) {
  let randomIndex = Math.floor(Math.random() * userColors.length);
  let randomColor = userColors[randomIndex];

  return randomColor;
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

function generateRandomId() {
  let id = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!/%?';
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }

  return id;
}

function checkAllInputFields(name, email, phone) {
  if (checkInputName(name) === true && checkInputEmail(email) === true && checkInputPhone(phone) === true) {
    return true
  } else {
    console.log('Ein Element ist auf false gesetzt')
    return false;
  }
}

function checkInputName(input) {
  let name = input;
  if (name == "") {
    showInputMessage('addContactMessageName', 'Please enter a name');
    showAlertBorder('addContactInputContainerName');
  } else {
    resetInputMessage('addContactMessageName');
    resetAlertBorder('addContactInputContainerName');
    return true;
  }
}

function checkInputEmail(input) {
  let email = input;
  if (email === "") {
    return true;
  } else if (checkAtSymbolExists(email) === false) {
    showInputMessage('addContactMessageEmail', 'The @ sign is missing');
    showAlertBorder('addContactInputContainerEmail');
    return false;
  } else {
    return true;
  }
}

function checkAtSymbolExists(input) {
  let email = input;
  if (email.indexOf('@') != -1) {
    return true;
  } else {
    return false;
  }
}

function checkInputPhone(phone) {
  let phoneNumber = phone;
  const regex = /^[\d ()+-]+$/;

  if (phoneNumber === "") {
    return true;
  } else if (regex.test(phoneNumber)) {
    resetInputMessage('addContactMessagePhone');
    resetAlertBorder('addContactInputContainerPhone');
    return true;
  } else {
    showInputMessage('addContactMessagePhone', 'Phone number ist not valid');
    showAlertBorder('addContactInputContainerPhone');
    return false;
  }
}

function showInputMessage(inputField, message) {
  document.getElementById(inputField).innerText = message;
}

function resetInputMessage(inputField) {
  document.getElementById(inputField).innerText = '';
}

function resetAllInputMessages() {
  resetInputMessage('addContactMessageName');
  resetInputMessage('addContactMessageEmail');
  resetInputMessage('addContactMessagePhone');
}

function showAlertBorder(inputContainer) {
  document.getElementById(inputContainer).classList.add('alertBorder');
}

function resetAlertBorder(inputContainer) {
  document.getElementById(inputContainer).classList.remove('alertBorder');
}

function resetAllAlertBorders() {
  resetAlertBorder('addContactInputContainerName');
  resetAlertBorder('addContactInputContainerEmail');
  resetAlertBorder('addContactInputContainerPhone');
}


// AUTOFOKUS BEIM ANKLICKEN DES INPUTFELDES 
function editFocusBorder(idFocus, idRemoveFocus, idDeleteFocus) {
  addFocusBorder(idFocus);
  removeFocusBorder(idRemoveFocus);
  removeFocusBorder(idDeleteFocus)
}

function addFocusBorder(containerId) {
  let input = document.getElementById('addContactInputContainer' + containerId);
  input.classList.add('focus');
}

function removeFocusBorder(containerId) {
  let input = document.getElementById('addContactInputContainer' + containerId);
  input.classList.remove('focus');
}

function disableSaveProcess() {
  document.getElementById("addContactContainer").style.display = "block";
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "none";
}

async function closeAddContactAndGoToShowSingleContactContainer(contactId) {
  loadShowSingleContact(contactId);
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "none";
  document.getElementById("mobileBtnThreePoints").style.display = "block";
  document.getElementById("showSingleContactContainer").style.display = "block";
}

async function closeAddContactContainerWithoutAddingNewContact() {
  await initListContact();
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
  document.getElementById("overlayFrame").style.display = 'none';
}

async function closeAddContactContainerDesktop() {
  resetInputFields();
  editFocusBorder('Name', 'Email', 'Phone');
  resetAllInputMessages();
  resetAllAlertBorders();
  await initListContact();
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "none"; 
  document.getElementById("showSingleContactContainer").style.display = "flex";
  document.getElementById("singleContactCol").style.display = "none";
}

async function closeAddContactContainer() {
  resetInputFields();
  editFocusBorder('Name', 'Email', 'Phone');
  resetAllInputMessages();
  resetAllAlertBorders();
  await initListContact();
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
}

async function saveContactAtAddContactDesktop() {
  await initSaveProcess();
  await initListContact();
  let contactId = await getContactId();
  await loadShowSingleContact(contactId);
  document.getElementById("showSingleContactContainer").style.display = "flex";
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "none"; 
  document.getElementById("singleContactCol").style.display = "block";
}

async function saveContactAtAddContactMobile() {
  console.log('Speicherprozess')
  await initSaveProcess();
  let contactId = await getContactId();
  await initListContact();
  await loadShowSingleContact(contactId);
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "none"; 
  document.getElementById("showSingleContactContainer").style.display = "block";
}



