
async function initMainContact() {
  await loadCurrentUserAlsoUsersAsObject();
  await includeHTML();
  setActiveLink("navContacts");
  await initListContact();
  createUserSignatureIcon();
  preparePopupEvent();
}

function getWindowWidth() {
  return window.innerWidth || documentElement.clientWidth || document.body.clientWidth;
}

let result = "";

/**
 *
 */
async function initWidthContacts() {
  let screenWidth = getWindowWidth()

  if (screenWidth <= 1219) {
    result = "mobileVersion";
  } else {
    result = "desktopVersion";
  }
}

function checkAllInputFields(siteInitial, name, email, phone) {
  if (checkInputName(siteInitial, name) === true && checkInputEmail(siteInitial, email) === true && checkInputPhone(siteInitial, phone) === true) {
    return true
  } else {
    console.log('Ein Element ist auf false gesetzt')
    return false;
  }
}

function checkInputName(siteInitial, input) {
  let name = input;
  if (name == "") {
    showInputMessage(siteInitial+ 'ContactMessageName', 'Please enter a name');
    removeFocusBorder(siteInitial, 'Name');
    showAlertBorder(siteInitial + 'ContactInputContainerName');
  } else {
    resetInputMessage(siteInitial + 'ContactMessageName');
    resetAlertBorder(siteInitial + 'ContactInputContainerName');
    return true;
  }
}

function checkInputEmail(siteInitial, input) {
  let email = input;
  if (email === "") {
    return true;
  } else if (validateEmail(email) === false) {
    showInputMessage(siteInitial + 'ContactMessageEmail', 'Please enter a valid e-mail address');
    removeFocusBorder(siteInitial, 'Email');
    showAlertBorder(siteInitial + 'ContactInputContainerEmail');
    return false;
  } else {
    resetInputMessage(siteInitial + 'ContactMessageEmail');
    resetAlertBorder(siteInitial + 'ContactInputContainerEmail');
    return true;
  }
}

function validateEmail(input) {
  let email = input;
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}

function checkInputPhone(siteInitial, phone) {
  let phoneNumber = phone;
  const regex = /^[\d ()+-]+$/;

  if (phoneNumber === "") {
    return true;
  } else if (regex.test(phoneNumber)) {
    resetInputMessage(siteInitial + 'ContactMessagePhone');
    resetAlertBorder(siteInitial + 'ContactInputContainerPhone');
    return true;
  } else {
    removeFocusBorder(siteInitial, 'Phone');
    showInputMessage(siteInitial + 'ContactMessagePhone', 'Phone number ist not valid');
    showAlertBorder(siteInitial + 'ContactInputContainerPhone');
    return false;
  }
}

function resetInputFields(siteInitial) {
  document.getElementById(siteInitial + 'ContactInputName').value = '';
  document.getElementById(siteInitial + 'ContactInputEmail').value = '';
  document.getElementById(siteInitial + 'ContactInputPhone').value = '';
}


function showInputMessage(inputField, message) {
  document.getElementById(inputField).innerText = message;
}

function resetInputMessage(inputField) {
  document.getElementById(inputField).innerText = '';
}

function resetAllInputMessages(siteInitial) {
  resetInputMessage(siteInitial + 'ContactMessageName');
  resetInputMessage(siteInitial + 'ContactMessageEmail');
  resetInputMessage(siteInitial + 'ContactMessagePhone');
}

function showAlertBorder(inputContainer) {
  document.getElementById(inputContainer).classList.add('alertBorder');
}

function resetAlertBorder(inputContainer) {
  document.getElementById(inputContainer).classList.remove('alertBorder');
}

function resetAllAlertBorders(siteInitial) {
  resetAlertBorder(siteInitial + 'ContactInputContainerName');
  resetAlertBorder(siteInitial + 'ContactInputContainerEmail');
  resetAlertBorder(siteInitial + 'ContactInputContainerPhone');
}

// AUTOFOKUS BEIM ANKLICKEN DES INPUTFELDES 
function editFocusBorder(siteInitial, idFocus, idRemoveFocus, idDeleteFocus) {
  addFocusBorder(siteInitial,idFocus);
  removeFocusBorder(siteInitial, idRemoveFocus);
  removeFocusBorder(siteInitial, idDeleteFocus)
}

function addFocusBorder(siteInitial, containerId) {
  let input = document.getElementById(siteInitial + 'ContactInputContainer' + containerId);
  if (input) {
    console.log('input', input);
    input.classList.add('focus');
  } else {
    console.error('Input element not found!');
  }
}

function removeFocusBorder(siteInitial, containerId) {
  let input = document.getElementById(siteInitial +'ContactInputContainer' + containerId);
  if (input.classList.contains('focus')) {
    input.classList.remove('focus');
  }
}
