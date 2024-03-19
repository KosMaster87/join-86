const contactColors = ["var(--red)", "var(--yellow)", "var(--orangeIcons)", "var(--green)", "var(--pink)", "var(--mintGreen)"];

async function initAddContact() {
  await setContactId([]);
  resetInputFields();
  resetAllInputMessages();
  resetAllAlertBorders();
  editFocusBorder('add','Name', 'Email', 'Phone');
}

async function initSaveProcess() {
  let name = (document.getElementById('addContactInputName').value).trim();
  let email = (document.getElementById('addContactInputEmail').value).trim();
  let phone = (document.getElementById('addContactInputPhone').value).trim();

  if (checkAllInputFields('add', name, email, phone) === true) {
    await saveContactAddContact(name, email, phone);
    await addContactIsSavedGoToSingleContact()
    resetInputFields('add');
    console.log('Abschluss Datenspeicherung')
  } else {
    console.log('Fehlerhafter Dateneintrag - Abbruch Datenspeicherung')
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
  document.getElementById('overlayContactIsCreated').style.display = "flex";
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

function disableSaveProcess() {
  document.getElementById("addContactContainer").style.display = "block";
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
  resetInputFields('add');
  editFocusBorder('add', 'Name', 'Email', 'Phone');
  resetAllInputMessages('add');
  resetAllAlertBorders('add');
  await initListContact();
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "none"; 
  document.getElementById("showSingleContactContainer").style.display = "flex";
  document.getElementById("singleContactCol").style.display = "none";
}

async function closeAddContactContainer() {
  resetInputFields('add');
  editFocusBorder('add', 'Name', 'Email', 'Phone');
  resetAllInputMessages('add');
  resetAllAlertBorders('add');
  await initListContact();
  document.getElementById("addContactContainer").style.display = "none";
  document.getElementById("mobileBtnAddContact").style.display = "block";
}

async function saveContactAtAddContactDesktop() {
  console.log('Start Speicherprozess - Desktop')
  await initSaveProcess();
}

async function saveContactAtAddContactMobile() {
  console.log('Start Speicherprozess - Mobil')
  await initSaveProcess();

}

async function addContactIsSavedGoToSingleContact() {
  let contactId = await getContactId();
  await loadShowSingleContact(contactId); 
  if (result === "mobileVersion") { 
    document.getElementById("listContactContainer").style.display = "none";
    document.getElementById("addContactContainer").style.display = "none";
    document.getElementById("mobileBtnAddContact").style.display = "none"; 
    document.getElementById("mobileBtnThreePoints").style.display = "block";
    document.getElementById("showSingleContactContainer").style.display = "flex";
    /*document.getElementById("overlayContactIsCreated").style.display = "flex";*/
  } else {
    await initListContact();
    document.getElementById("listContactContainer").style.display = "flex";
    document.getElementById("showSingleContactContainer").style.display = "flex";
    document.getElementById("addContactContainer").style.display = "none";
    document.getElementById("mobileBtnAddContact").style.display = "none"; 
    document.getElementById("singleContactCol").style.display = "flex";
  }
}



