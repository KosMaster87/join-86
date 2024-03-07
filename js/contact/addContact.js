const contactColors = ["var(--red)", "var(--yellow)", "var(--orangeIcons)", "var(--green)", "var(--pink)", "var(--mintGreen)"];
let allContactsFromAllUsers = [];
let userId = getGlobalUserId();

async function initSaveProcess() {
    await loadCurrentUserAlsoUsersAsObject();
    let name = (document.getElementById('addContactInputName').value).trim();
    let email = (document.getElementById('addContactInputEmail').value).trim();
    let phone = (document.getElementById('addContactInputPhone').value).trim();

    if (checkAllInputFields(name, email, phone) == true) {
        await saveContact(name, email, phone);
        resetInputFields();   
    } else {
        console.log('Speichervorgang ist aufgrund eines Fehler abgebrochen worden.')
    }   
}


async function getGlobalUserId() {
    let currentUserId = await getItem('currentUserId');

    return currentUserId;
}


async function saveContact(name, email, phone) {
    /*let allContactsFromAllUsers = await loadAllContactsFromAllUsers();  muss überall ersetzt werden*/
    let contactId = generateRandomId();
    let userColor = getRandomColor(contactColors);
    let signature = getSignature(name);
    let userId = await getCurrentUserId();

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
}


async function getAllContactsFromCurrentUser() {
    
    return await getAllContactsFromCurrentUserSorted();
}
  
    
async function getAllContactsFromCurrentUser() {
    let currentUserId = await userId;
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
    }}
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
    for(let i = 0; i < arrayName.length; i++) {
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
    if (checkInputName(name) === false) {
        return false;
    } else if (checkInputEmail(email) === false) {
        return false;
    } else if (checkInputPhone(phone) === false) {
        return false;
    } else {
        return true;
    }
}


function checkInputName(input) {
    let name = input;
    let result = checkIfInputFieldIsEmpty(name) == true ? true : false;
    if (result == false) {
        console.log('Fehler inputName: Name erforderlich');
    } else {
        return result;
    }   
}


function checkInputEmail(input) {
    let email = input;

    if (checkIfInputFieldIsEmpty(email) == false) {
        console.log('Abbruch - Daten sind nicht vollständig!');
        return false;
    } else if (checkAtSymbolExists(email) == false) {
        console.log('Abbruch - Daten sind nicht korrekt!');
        return false;
    } else {
        console.log('Die Daten sind korrekt und vollständig!');
        return true;
    }
}


function checkIfInputFieldIsEmpty(string) {
    let input = string;
    if (input == '') {
        return false;
    } else {
        return true;
    }
}


function checkAtSymbolExists(input) {
    let email = input;
    if (email.indexOf('@') != -1) {
        console.log("Der String enthält ein @-Zeichen.");
        return true;
    } else {
        console.log("Der String enthält kein @-Zeichen.");
        return false;
    }
}


function checkInputPhone(phone) {
    let phoneNumber = phone;
    const regex = /^[\d ()+-]+$/; 

    if (regex.test(phoneNumber)) {
        console.log("Die Telefonnummer ist gültig.");
        return true;
    } else {
        console.log("Die Telefonnummer ist ungültig.")
        return false;
    }
}


/* ADD CONTACT BUTTONS */
async function closeAddContactAndGoToShowSingleContactContainer(userId, contactId, name, email, phone, signature, userColor) {
    goToTopOfSite();
    loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor)
    document.getElementById("addContactContainer").style.display = "none";
    document.getElementById("listContactContainer").style.display = "none";
    document.getElementById("mobileBtnAddContact").style.display = "none";
    document.getElementById("mobileBtnThreePoints").style.display = "block";
    document.getElementById("showSingleContactContainer").style.display = "block";
  } 
  

  async function closeAddContactContainerWithoutAddingNewContact() {
    await initListContact();
    goToTopOfSite();
    document.getElementById("addContactContainer").style.display = "none";
    document.getElementById("mobileBtnAddContact").style.display = "block"; 
  }
  

  async function closeAddContactContainer() {
    await initListContact();
    goToTopOfSite();
    document.getElementById("addContactContainer").style.display = "none";
    document.getElementById("mobileBtnAddContact").style.display = "block";
  }


