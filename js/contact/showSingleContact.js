//mockUpUserContacts sind als Kontante in contacts.js angelegt
const userId = 'user1'
let contactId = "7777777777777777";


function loadShowSingleContact() {
    getAllInformations(userId, contactId, mockUpUserContacts);
}


function getAllInfos(userId, contactId, mockUpUserContacts) {
    let allContactsFromCurrentUser = getAllContactsFromCurrentUser(userId, mockUpUserContacts);
    let currentContact = getCurrentContact(contactId, allContactsFromCurrentUser);
    
    fillAllVariables(currentContact);
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


function getAllContactsFromCurrentUser(userId, mockUpUserContacts) {
    let currentUserId = userId;
    let allContacts = mockUpUserContacts;
    let allContactsFromCurrentUser = [];
    for (let i = 0; i < allContacts.length; i++) {
        const contact = allContacts[i];
        if (contact['userId'] == currentUserId) {
            allContactsFromCurrentUser.push(contact);
        }        
    }
    
    return allContactsFromCurrentUser;
}


function fillAllVariables(currentContact) {
    document.getElementById('nameContact').innerText = currentContact['name'];
    document.getElementById('emailContact').innerText = currentContact['email'];
    document.getElementById('phoneContact').innerText = currentContact['phone'];
    document.getElementById('signatureContact').innerText = currentContact['signature'];
}