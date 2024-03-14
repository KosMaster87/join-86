const contactColors = ["var(--red)", "var(--yellow)", "var(--orangeIcons)", "var(--green)", "var(--pink)", "var(--mintGreen)"];
let allContactsFromAllUsers = [];
let userId = getGlobalUserId();

async function initAddContact() {
  resetInputFields();
  editFocusBorder('Name', 'Email', 'Phone');
  resetAllInputMessages();
  resetAllAlertBorders();
}


async function initSaveProcess() {
  await loadCurrentUserAlsoUsersAsObject();
  let name = (document.getElementById('addContactInputName').value).trim();
  let email = (document.getElementById('addContactInputEmail').value).trim();
  let phone = (document.getElementById('addContactInputPhone').value).trim();

  if (checkAllInputFields(name, email, phone) === true) {

    await saveContact(name, email, phone);
    resetInputFields();
  } else {
    console.log('Fehlerhafter Dateneintrag')
  }
}

async function getGlobalUserId() {
  let currentUserId = await getItem('currentUserId');

  return currentUserId;
}

async function saveContact(name, email, phone) {
  let contactId = generateRandomId();
  let userColor = getRandomColor(contactColors);
  let signature = getSignature(name);
  let userId = await getGlobalUserId();

  let contact = {
    userId: userId,
    contactId: contactId,
    name: name,
    email: email,
    phone: phone,
    userColor: userColor,
    signature: signature
  };

  user.contacts.push(contact);
  setItem("users", users);
  closeAddContactAndGoToShowSingleContactContainer(userId, contactId, name, email, phone, signature, userColor);
  document.getElementById('overlayFrame').style.display = "flex";
}

async function getAllContactsFromCurrentUser() {

  return await getAllContactsFromCurrentUserSorted();
}

async function getAllContactsFromCurrentUser() {
  let currentUserId = await getGlobalUserId();
  let users = await getAllContactsFromAllUsers();
  const contactsArray = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.email == currentUserId) {
      for (let j = 0; j < user.contacts.length; j++) {
        const contact = user.contacts[j];
        if (contact.userId == currentUserId) {
          contactsArray.push(contact);
        }
      }
      break;
    }
  }
  return contactsArray;
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
  if (checkInputName(name) === true && checkInputEmail(email) === true && checkInputPhone(phone)) {
    return true
  } else {
    console.log('Fehlerhafte Dateneingabe')
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

async function closeAddContactAndGoToShowSingleContactContainer(userId, contactId, name, email, phone, signature, userColor) {
  loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor)
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

async function closeAddContactContainer() {
  await initListContact();
  resetInputFields();
  editFocusBorder('Name', 'Email', 'Phone');


  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
}


