//Edit Contact JS
//TODO:form einbinden
//TODO: implement form validation
    //let globalUserId = getCurrentUserId();
    //let globalContactId = getCurrentContactId();

 
async function initEditContact() {
    await loadCurrentUserAlsoUsersAsObject();
    let currentContact = await getCurrentContactNew();
    let currentContactId = await getCurrentContactId();
    await getCurrentContactId();
    console.log('Ausgabe aktuelle KontaktID: ',getCurrentContactId);
    /*let allContactsFromAllUsers = await loadAllContactsFromAllUsers();*/
    let allContactsFromCurrentUser = await getGlobalAllContactsFromCurrentUser();
    /*let currentContact = await getCurrentContact(contactId, allContactsFromCurrentUser);//leer*/
    initializeAllVariables(await currentContact)
}


async function setCurrentContactIdAndUpdate(contactId) {
    await setCurrentContactId(contactId);
    globalContactId = contactId;
    await initEditContact();
}


async function getCurrentUserId() {
    let currentUserId = await getItem('currentUserId');

    return currentUserId;
}
    
    
async function setCurrentContactId(contactId) {
    await setItem('currentContactId', contactId);
} 


async function getCurrentContactId() {
    return await getItem('currentContactId');
} 


async function loadAllContactsFromAllUsers() {
    let allContactsFromAllUsers = await getItem('mockUpAllUserContacts');

    return JSON.parse(allContactsFromAllUsers);
}


async function getGlobalAllContactsFromCurrentUser() {
    return getItem('globalAllContactsFromCurrentUser');
}
    
    
// function getAllContactsFromCurrentUser(userId, allUserContacts) {
//     let currentUserId = userId;
//     let allContacts = allUserContacts;
//     let allContactsFromCurrentUser = [];
//     for (let i = 0; i < allContacts.length; i++) {
//         const contact = allContacts[i];
//         if (contact['userId'] == currentUserId) {
//             allContactsFromCurrentUser.push(contact);
//         }        
//     }
    
//     return allContactsFromCurrentUser;
// }


async function getCurrentContact(selectedId, allContactsFromCurrentUser) {
    let contactId = await selectedId;
    console.log('Response: contactId', contactId);
    let users = await allContactsFromCurrentUser;
    console.log('contactId: ', contactId);
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if(user.contactId == contactId) {
            console.log('Response Username', user.name);
        }
    } 
}   
    

function initializeAllVariables(contact) {
    document.getElementById('editContactInputName').value = contact.name;
    document.getElementById('editContactInputEmail').value = contact.email;
    document.getElementById('editContactInputPhone').value = contact.phone;
    document.getElementById('editContactHeaderSignature').innerText = contact.signature;
    document.getElementById('editContactHeaderSignature').style.backgroundColor = contact.userColor;

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
    for(let i = 0; i < arrayName.length; i++) {
        firstChars += arrayName[i][0];
    }
    
    return firstChars;
}  


async function deleteContact() {
    let contactId = await getCurrentContactId();
    console.log('RES aktuelle contactId: ', contactId);
    let contacts = await user.contacts;
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        if (contact['contactId'] === contactId) {
            console.log('RES NAME DES KONTAKTS:', contact['name']);
            console.log('RES KONTAKTID DES KONTAKTS:', contact['contactId']);
            contacts.splice(i, 1);
        }
    }

    await setItem('users', JSON.stringify(users)); 
    await setItem('currentContactId', JSON.stringify(''));
}


async function saveReducedContactArrayBackend(allContactsFromAllUsers) {
    await setItem('mockUpAllUserContacts', JSON.stringify(allContactsFromAllUsers));
}


async function goToShowSingleContactAfterEditContact(currentContactId) {
    let allContactsFromAllUsers = await getAllContactsFromAllUsers();
    let contactId = await getCurrentContactId();
    let userId = await getGlobalUserId();
    let currentContact = await getCurrentContactNew();
    let name = currentContact.name;
    let email = currentContact.email;
    let phone = currentContact.phone;
    let signature = currentContact.signature;
    let userColor = currentContact.userColor;
    
    await loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor )
    
    document.getElementById('editContactContainer').style.display = "none";
    document.getElementById("showSingleContactContainer").style.display = "block";
    document.getElementById("mobileBtnSelectOptions").style.display = "none";
    document.getElementById("mobileBtnThreePoints").style.display = "block"; 
}


/* Auslesen des aktuellen Kontakts über ContactId und aktuellen User */
async function getCurrentContactNew() {
    await loadCurrentUserAlsoUsersAsObject();
    let currentContactId = await getCurrentContactId();
    let contacts = await user.contacts;
    if (currentContactId) {
        let contact = contacts.find(contact => contact.contactId === currentContactId);
        if(contact) {
            return contact;           
        } else {
            console.log('Kontakt nicht gefunden Eins');
        }
    } else {
        console.log('CurrentContactId existiert nicht');
    }          
}


async function bufferCurrentContact() {
    await loadCurrentUserAlsoUsersAsObject();
    let currentContact = await getCurrentContactNew();
    let inputUserId = await getGlobalUserId();
    let inputContactId = await getCurrentContactId();
    let inputUserColor = await currentContact.userColor;
    let inputName = (document.getElementById('editContactInputName').value).trim();
    let inputPhone = (document.getElementById('editContactInputPhone').value).trim();
    let inputEmail = (document.getElementById('editContactInputEmail').value).trim();
    let inputSignature = getSignature(inputName); 

    let contact = (
        {
            userId: inputUserId,
            contactId: inputContactId,
            name: inputName,
            email: inputEmail,
            phone: inputPhone,
            userColor: inputUserColor,
            signature: inputSignature,

    });

    console.log('buffered contact: ', contact);
    return contact;
}
  

async function getCurrentIndex() {
    await loadCurrentUserAlsoUsersAsObject();
    let currentContactId = await getCurrentContactId();
    let contacts = await user.contacts

    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        if (contact.contactId === currentContactId) {
            return i;
        } else {
            console.log('contactId not found.')
        }
    }
}

/* ANFANG PRÜFUNG DER DATENEINGABE */ /*
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
    showInputMessage('editContactMessageName', 'Please enter a name');
    showAlertBorder('editContactInputContainerName');
  } else {
    resetInputMessage('editContactMessageName');
    resetAlertBorder('editContactInputContainerName');
    return true;
  }
}

function checkInputEmail(input) {
  let email = input;
  if (email === "") {
    return true;
  } else if (checkAtSymbolExists(email) === false) {
    showInputMessage('editContactMessageEmail', 'The @ sign is missing');
    showAlertBorder('editContactInputContainerEmail');
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
/*
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
/* ENDE - AUSGABE UND ZURÜCKSETZEN DER FEHLERMELDUNGEN*/


/* ANFANG - ANZEIGEN UND ZURÜCKSETZEN DER BORDERFARBE */
/*function showAlertBorder(inputContainer) {
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
/* ANFANG - ANZEIGEN UND ZURÜCKSETZEN DER BORDERFARBE */

/* ANFANG - AUTOFOKUS BEIM ANKLICKEN DES INPUTFELDES */ 
/*function editFocusBorder(idFocus, idRemoveFocus, idDeleteFocus) {
  addFocusBorder(idFocus);
  removeFocusBorder(idRemoveFocus);
  removeFocusBorder(idDeleteFocus)
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

async function saveChanges() {
    await loadCurrentUserAlsoUsersAsObject();
    let currentContact = await getCurrentContactNew();
    let currentContactId = await getCurrentContactId();
    let contacts = await user.contacts;
    let inputUserId = await getGlobalUserId();
    let inputContactId = await getCurrentContactId();
    let inputUserColor = await currentContact.userColor;
    let inputName = (document.getElementById('editContactInputName').value).trim();
    let inputPhone = (document.getElementById('editContactInputPhone').value).trim();
    let inputEmail = (document.getElementById('editContactInputEmail').value).trim();
    let inputSignature = getSignature(inputName); 

    /* */
    if (checkAllInputFields(inputName, inputPhone, inputEmail) === true) {

      if (await currentContactId) {
        for (let i = 0; i < contacts.length; i++) {
            const contact = contacts[i];   
            if (contact.contactId === await currentContactId) {
                user.contacts[i].contactId = inputContactId,
                user.contacts[i].userId = inputUserId, 
                user.contacts[i].name = inputName,
                user.contacts[i].email = inputEmail,
                user.contacts[i].phone = inputPhone, 
                user.contacts[i].signature = inputSignature;
                user.contacts[i].userColor = inputUserColor;

                await setItem('users', JSON.stringify(users));
                console.log('Speichervorgang konnte abgeschlossen werden!');
                await goToShowSingleContactAfterEditContact(currentContactId)
            } else {
                console.log ('Response currentContactId: ' + await currentContactId + ' not found.')
            }
        }
      } else {
        console.log('Response contact not found.')
      }
    }
  }


  /* DELETE BUTTON AUF EDIT-CONTACT */

  async function goFromDeleteContactToListContact() {
    await deleteContact();
    await initListContact();

    document.getElementById('editContactContainer').style.display = "none";
    document.getElementById('showSingleContactContainer').style.display = "none";
    document.getElementById('listContactContainer').style.display = "block";
    document.getElementById('mobileBtnSelectOptions').style.display = "none";
    document.getElementById('mobileBtnAddContact').style.display = "block";
}
