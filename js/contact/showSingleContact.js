/* SHOW SINGLE CONTACT JS */
let userId = getCurrentContactId;

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


