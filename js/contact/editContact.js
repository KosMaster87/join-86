
//Edit Contact JS
//TODO:form einbinden
//TODO: implement form validation


async function initEditContact(currentContactId) {
    let currentUserId = await getCurrentUserId();
    let allContactsFromAllUsers = await loadAllContactsFromAllUsers();
    let currenContact = getCurrentContactArray(currentUserId, currentContactId, allContactsFromAllUsers);
    
    initializeAllVariables(currenContact, currentUserId);
}

async function getCurrentUserId() {
    let currentUserId = await globalUserId;
    console.log(currentUserId);
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


async function loadAllContactsFromAllUsers() {
    let allContactsFromAllUsers = await getItem('mockUpAllUserContacts');

    return JSON.parse(allContactsFromAllUsers);
}


function getCurrentContactArray(userId, contactId, allContactsFromAllUsers) {
    let allContactsFromCurrentUser = getAllContactsFromCurrentUser(userId, allContactsFromAllUsers);
    let currentContact = getCurrentContact(contactId, allContactsFromCurrentUser);
    
    return currentContact;
}


function getCurrentContact(selectedId, allContactsFromCurrentUser) {
    let contactId = selectedId;
    let currenContact = [];
    for (let i = 0; i < allContactsFromCurrentUser.length; i++) {
        let contact = allContactsFromCurrentUser[i]
        if (contactId == contact['contactId']) {
            currenContact = contact; 
        }    
    }

    return currenContact;
}


function getAllContactsFromCurrentUser(userId, allUserContacts) {
    let currentUserId = userId;
    let allContacts = allUserContacts;
    let allContactsFromCurrentUser = [];
    for (let i = 0; i < allContacts.length; i++) {
        const contact = allContacts[i];
        if (contact['userId'] == currentUserId) {
            allContactsFromCurrentUser.push(contact);
        }        
    }
    
    return allContactsFromCurrentUser;
}


function initializeAllVariables(currentContact) {
    document.getElementById('contactInputName').value = currentContact['name'];
    document.getElementById('contactInputEmail').value = currentContact['email'];
    document.getElementById('contactInputPhone').value = currentContact['phone'];
    document.getElementById('contactSignature').innerText = currentContact['signature'];
}


/* TODO: userId und contactId müssen als Paramater übergeben werden - aktuell noch nicht notwendig, da mittels mockUpDaten
gearbeitet wird */


async function saveChanges() {
    let currentContactId = getParameterByName('contactId');
    let currentUserId = getParameterByName('userId');
    let mockUpAllUserContacts = await loadAllContactsFromAllUsers();//zur Überprüfung vorerst mit Zwischenspeicher gearbeitet
    let inputName = (document.getElementById('contactInputName').value).trim();
    let inputEmail = (document.getElementById('contactInputEmail').value).trim();
    let inputPhone = (document.getElementById('contactInputPhone').value).trim();

    for (let i = 0; i < mockUpAllUserContacts.length; i++) {
        const singleContact = mockUpAllUserContacts[i];
        if ( singleContact['userId'] == currentUserId && singleContact['contactId'] == currentContactId) {
            console.log('Es hat geklappt', currentUserId, currentContactId, inputName, inputPhone, inputEmail);
            singleContact['name'] = inputName;
            singleContact['email'] = inputEmail;
            singleContact['phone'] = inputPhone;
            singleContact['signature'] = getSignature(inputName);
        }
    }

    await setItem('mockUpAllUserContacts', JSON.stringify(mockUpAllUserContacts));
    goToListContactPageAfterAddContact(currentContactId, currentUserId);
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
    let contactId = getParameterByName('contactId');
    let userId = getParameterByName('userId');
    let allContactsFromAllUsers = await loadAllContactsFromAllUsers();
    for (let i = 0; i < allContactsFromAllUsers.length; i++) {
        const currentUserConctact = allContactsFromAllUsers[i];
        if (currentUserConctact['userId'] == userId && currentUserConctact['contactId'] == contactId) {
            console.log('Resp currentUserContact:', currentUserConctact['name']);
            allContactsFromAllUsers.splice(i, 1);
        }
    }
    console.log(allContactsFromAllUsers);

    await saveReducedContactArrayBackend(allContactsFromAllUsers);
    goToListContactPageAfterDeleteContact(userId);   
}


async function saveReducedContactArrayBackend(allContactsFromAllUsers) {
    await setItem('mockUpAllUserContacts', JSON.stringify(allContactsFromAllUsers));
}


function goToListContactPageAfterAddContact(contactId, userId) {
   window.location.href = `listContact.html?contactId=${contactId}&userId=${userId}`;
}


function goToListContactPageAfterDeleteContact(userId) {
    window.location.href = `listContact.html?contactId=userId=${userId}`;
 }









