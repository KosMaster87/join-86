const userId = 'user1'
let contactId = "7777777777777777";

//userId ist als Kontante in addContact.js ('user1 angelegt)
//mockUpUserContacts sind als Kontante in contacts.js angelegt

function showCurrentContactInfos(userId, contactId, mockUpUserContacts) {
    let allContactsFromCurrentUser = getAllContactsFromCurrentUser(userId, mockUpUserContacts);
    let currentContact = renderCurrentContact(contactId, allContactsFromCurrentUser) {

    }

    return currentContact;
}

function renderCurrentContact(contactId) {

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

        return allContactsFromCurrentUser;
    }
    

}