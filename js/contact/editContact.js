
//Edit Contact JS
//TODO:form einbinden
//TODO: implement form validation
    //let globalUserId = getCurrentUserId();
    //let globalContactId = getCurrentContactId();

 
async function initEditContact() {
    let contactId = await getCurrentContactId(); 
    /*let allContactsFromAllUsers = await loadAllContactsFromAllUsers();*/
    let allContactsFromCurrentUser = await getGlobalAllContactsFromCurrentUser();
   console.log('Response allContactsFromCurrentUser: ', allContactsFromCurrentUser);
   /* console.log('Response alle Kontakte eines Users: ', allContactsFromCurrentUser);*/
    let currentContact = await getCurrentContact(contactId, allContactsFromCurrentUser);//leer
   console.log('currentContact', await currentContact);
    /*initializeAllVariables(currentContact);*/
    //await searchName();
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
    return JSON.parse(getItem('globalAllContactsFromCurrentUser'));
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


function initializeAllVariables(currentContact) {
    let contact = currentContact;
    document.getElementById('editContactInputName').value = contact.name;
    document.getElementById('editContactInputEmail').value = contact.email;
    document.getElementById('editContactInputPhone').value = contact.phone;
    document.getElementById('editContactSignature').innerText = contact.signature;
    console.log(contact.name, contact.email, contact.phone, contact.signature)
}


async function saveChanges() {
    let currentContactId = await getCurrentContactId();
    let mockUpAllUserContacts = await loadAllContactsFromAllUsers();//zur Überprüfung vorerst mit Zwischenspeicher gearbeitet
    let inputName = (document.getElementById('editContactInputName').value).trim();
    let inputEmail = (document.getElementById('editContactInputEmail').value).trim();
    let inputPhone = (document.getElementById('editContactInputPhone').value).trim();
    for (let i = 0; i < mockUpAllUserContacts.length; i++) {
        const singleContact = mockUpAllUserContacts[i];
        console.log('singleContact:', singleContact);
        if (singleContact['contactId'] == currentContactId) {
            singleContact['name'] = inputName;
            singleContact['email'] = inputEmail;
            singleContact['phone'] = inputPhone;
            singleContact['signature'] = getSignature(inputName);
        }
    }

    await setItem('mockUpAllUserContacts', JSON.stringify(mockUpAllUserContacts));
    await goToShowSingleContactAfterEditContact(currentContactId);
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
    console.log('Res contactId: ', contactId);
    let allContactsFromAllUsers = await loadAllContactsFromAllUsers();
    for (let i = 0; i < allContactsFromAllUsers.length; i++) {
        const currentUserConctact = allContactsFromAllUsers[i];
        if (currentUserConctact['contactId'] == contactId) {
            console.log('Resp currentUserContact:', currentUserConctact['name']);
            allContactsFromAllUsers.splice(i, 1);
        }
    }

    await saveReducedContactArrayBackend(allContactsFromAllUsers); 
    await setItem('currentContactId', JSON.stringify(''));
}


async function saveReducedContactArrayBackend(allContactsFromAllUsers) {
    await setItem('mockUpAllUserContacts', JSON.stringify(allContactsFromAllUsers));
}


async function goToShowSingleContactAfterEditContact(currentContactId) {
    let allContactsFromAllUsers = await loadAllContactsFromAllUsers();
    let contactId = await currentContactId;
    let userId = await currentContactId;
    let currentContact = await getCurrentContact(contactId, allContactsFromAllUsers);
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









