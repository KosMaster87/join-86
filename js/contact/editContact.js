
//Edit Contact JS
//TODO:form einbinden
//TODO: implement form validation
    //let globalUserId = getCurrentUserId();
    //let globalContactId = getCurrentContactId();

 
async function initEditContact() {
    let contactId = await getCurrentContactId(); 
    let allContactsFromAllUsers = await loadAllContactsFromAllUsers();
    console.log(allContactsFromAllUsers);
    let currentContact = await getCurrentContact(contactId, allContactsFromAllUsers);//leer
    console.log('currentContact', currentContact);
    initializeAllVariables(currentContact);
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
    

// async function getCurrentContactInfos() {
//     let contactArrays = await getItem('currentContactInfos');
    
//     return contactArrays;
// }


// async function setCurrentContactId(contactId) {
//     await setItem('currentContactId', contactId);
// } 


async function getCurrentContactId() {
    return await getItem('currentContactId');
} 


async function loadAllContactsFromAllUsers() {
    let allContactsFromAllUsers = await getItem('mockUpAllUserContacts');

    return JSON.parse(allContactsFromAllUsers);
}


async function getCurrentContact(selectedId, allContactsFromAllUsers) {
    let contactId = await selectedId;
    console.log('Response: contactId', contactId);
    let allContacts = await allContactsFromAllUsers;
    console.log('contactId: ', contactId);
    let currentContact = [];
    for (let i = 0; i < allContacts.length; i++) {
        let contact = allContacts[i];
        if (contact['contactId'] == contactId) {
            currentContact = contact; 
        }    
    }

    return await currentContact;
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


function initializeAllVariables(currentContactInfos) {
    let currentContact = currentContactInfos;
    document.getElementById('editContactInputName').value = currentContact.name;
    document.getElementById('editContactInputEmail').value = currentContact.email;
    document.getElementById('editContactInputPhone').value = currentContact.phone;
    document.getElementById('editContactSignature').innerText = currentContact.signature;
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

//bearbeiten
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
    goFromDeleteContactToListContact();  
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

    document.getElementById('editContactContainer').style.display = "none";
    document.getElementById("showSingleContactContainer").style.display = "block";
    document.getElementById("mobileBtnSelectOptions").style.display = "none";
    document.getElementById("mobileBtnThreePoints").style.display = "block";
    console.log('Close Edit Contact Container and open Show Single Contact!');
    loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor )
 }

function goFromDeleteContactToListContact() {
    document.getElementById('editContactContainer').style.display = "none";
    document.getElementById('showSingleContactContainer').style.display = "none";
    document.getElementById('containerListContacts').style.display = "block";
    document.getElementById('mobileBtnSelectOptions').style.display = "none";
    document.getElementById('mobileBtnAddContact').style.display = "block";
    console.log('Close Edit Contact Container and open List Contact!');
    initListContact()
 }









