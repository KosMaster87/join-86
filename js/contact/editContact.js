
//Edit Contact JS
//TODO:form einbinden
//TODO: implement form validation


const userId = 'user1'
let contactId = 'pxH7pRGVgaML/xHP';


async function initEditContact() {
    let allContactsFromAllUsers = await loadAllContactsFromAllUsers();
    let currenContact = getCurrentContactArray(userId, contactId, allContactsFromAllUsers);
    
    initializeAllVariables(currenContact);
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
    let currentUserId = userId;
    let currentContactId = contactId;
    let mockUpAllUserContacts = await loadAllContactsFromAllUsers();//zur Überprüfung vorerst mit Zwischenspeicher gearbeitet
    let inputName = (document.getElementById('contactInputName').value).trim();
    let inputEmail = (document.getElementById('contactInputEmail').value).trim();
    let inputPhone = (document.getElementById('contactInputPhone').value).trim();

    for (let i = 0; i < mockUpAllUserContacts.length; i++) {
        const singleContact = mockUpAllUserContacts[i];
        if ( singleContact['userId'] == currentUserId && singleContact['contactId'] == currentContactId) {
            console.log('Es hat geklappt', userId, contactId, inputName, inputPhone, inputEmail);
            singleContact['name'] = inputName;
            singleContact['email'] = inputEmail;
            singleContact['phone'] = inputPhone;
            singleContact['signature'] = getSignature(inputName);
        }
    }

    await setItem('mockUpAllUserContacts', JSON.stringify(mockUpAllUserContacts));
    initEditContact();
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


async function deleteContact(userId, contactId) {
    console.log('Delete contact from userID: ', userId);
    console.log('Delete contactId: ', contactId );
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
    initEditContact();
    
}


async function saveReducedContactArrayBackend(allContactsFromAllUsers) {
    await setItem('mockUpAllUserContacts', JSON.stringify(allContactsFromAllUsers));
}








