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
    document.getElementById('editContactSignature').innerText = contact.signature;
}

/*
async function saveChanges() {
    let updatedContact = bufferCurrentContact();


    await loadCurrentUserAlsoUsersAsObject();
    let currentContactId = await getCurrentContactId();
    let currentEmail = await getGlobalUserId();
    let users = await getItem('users');

    if (currentContactId && currentEmail) {
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            if (user.email === currentEmail) { 
                console.log('User.email gefunden')
                /* for (let j = 0; j < contacts.length; j++) {
                    let contacts = user.conctacts; 
                    i 
                } else {
                console.log('User.email is not found. User does not exist.')
            } 
    }}}*/

    
    /*
    if(currentContactId && currentEmail) {
        if (user = users.find(user => user.email === currentEmail)) {
            contacts = user.contacts;
            if (contact = contacts.find(contact => contact.contactId === currentContactId)) {
                contact.name = document.getElementById('editContactInputName').value;
                contact.email = document.getElementById('editContactInputEmail').value;
                contact.phone = document.getElementById('editContactInputPhone').value;
                contact.signature = document.getElementById('editContactSignature').innerText;
                console.log('Bisher hat alles geklappt.')
            }
        } else {
            console.log('User nicht gefunden.')
        }

    } else {
        console.log('CurrentContactId or email does not exist.')
    }


    let contacts = await user.contacts;


    await setItem('mockUpAllUserContacts', JSON.stringify(mockUpAllUserContacts));
    await goToShowSingleContactAfterEditContact(currentContactId);*/

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
}//final 


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


  /* MOBILE BUTTON SELECT OPTIONS */

async function goFromDeleteContactToListContact() {
    await deleteContact();
    await initListContact();

    document.getElementById('editContactContainer').style.display = "none";
    document.getElementById('showSingleContactContainer').style.display = "none";
    document.getElementById('listContactContainer').style.display = "block";
    document.getElementById('mobileBtnSelectOptions').style.display = "none";
    document.getElementById('mobileBtnAddContact').style.display = "block";
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
}//aktuell und final
  

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
}//aktuell und final


/* AKTUELL ARBEITE ICH HIER */
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
            } else {
                console.log ('Response currentContactId: ' + await currentContactId + ' not found.')
            }
        }
    } else {
        console.log('Response contact not found.')
    } 

    await setItem('users', JSON.stringify(users));
    console.log('Speichervorgang konnte abgeschlossen werden!');
    await goToShowSingleContactAfterEditContact(currentContactId)
}
