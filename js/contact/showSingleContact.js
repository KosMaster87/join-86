/* Show Single Contact JS */


async function loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor) {
    fillAllVariables(name, email, phone, signature, userColor);
    await setCurrentContactId(contactId);
}

async function setCurrentContactId(contactId) {
    await setItem('currentContactId', contactId);
} 

async function getCurrentContactId() {
    return await getItem('currentContactId');
} 

async function setCurrentContactInfos(userId, contactId, name, email, phone, signature, userColor) {
    let contactArray = []
    
    contactArray.push({
        userId: userId,
        contactId: contactId,
        name: name,
        email: email,
        phone: phone,
        signature: signature,
        userColor: userColor
    })

    setItem('currentContactInfos', contactArray);
}

async function getCurrentContactInfos() {
    getItem('currentContactInfos');
}
 
let currentContactId = getCurrentContactId();

let currentContactInfos = getCurrentContactInfos

function fillAllVariables(name, email, phone, signature, userColor) {
    document.getElementById('nameContact').innerText = name;
    document.getElementById('emailContact').innerText = email;
    document.getElementById('phoneContact').innerText = phone;
    document.getElementById('signatureContact').innerText = signature;
    document.getElementById('signatureContact').style.backgroundColor = userColor;
}


function openShowSingleContactContainer(userId, contactId, name, email, phone, signature, userColor) {
    document.getElementById("showSingleContactContainer").style.display = "block";
    document.getElementById("mobileBtnAddContact").style.display = "none";
    document.getElementById("mobileBtnThreePoints").style.display = "block";
    console.log('Open Show Single Contact Container');
    loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor);
}


function goToListContactContainer() {
    document.getElementById("showSingleContactContainer").style.display = "none";
    document.getElementById("addContactContainer").style.display = "none";
    document.getElementById("containerListContacts").style.display = "block";
    document.getElementById("mobileBtnAddContact").style.display = "block";
    console.log('Close Single Contact Container and open list Contact Container!');
    initListContact()
}


function closeShowSingleContactContainer() {
    document.getElementById("showSingleContactContainer").style.display = "none";
    document.getElementById("mobileBtnAddContact").style.display = "block";
    console.log('Close Show Single Contact Container');
}

function showMobileSelectBtns() {
    document.getElementById("mobileBtnThreePoints").style.display = "none";
    document.getElementById("mobileBtnSelectOptions").style.display = "block";
    console.log('Change Button To Select Button');
}

async function goFromShowSingleContactToEditContact() {
    document.getElementById("mobileBtnThreePoints").style.display = "none";
    document.getElementById("mobileBtnSelectOptions").style.display = "none";
    document.getElementById("showSingleContactContainer").style.display = "none";
    document.getElementById("editContactContainer").style.display = "block";
    initEditContact();
}


