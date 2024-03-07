/* SHOW SINGLE CONTACT JS */
let userId = getCurrentContactId;

async function loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor) {
    fillAllVariables(name, email, phone, signature, userColor);
    await setCurrentContactId(contactId);
}

async function setCurrentContactId(contactId) {
    await setItem('currentContactId', contactId);
} 

async function setCurrentContactEmail(email) {
    await setItem('currentContactEmail', email);
} 

async function getCurrentContactEmail(email) {
    return await JSON.parse(getItem('currentContactEmail', email));
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
    return getItem('currentContactInfos');
}
 
let currentContactId = getCurrentContactId();

/*let currentContactInfos = getCurrentContactInfos */

function fillAllVariables(name, email, phone, signature, userColor) {
    document.getElementById('singleContactName').innerText = name;
    document.getElementById('singleContactEmail').innerText = email;
    document.getElementById('singleContactPhone').innerText = phone;
    document.getElementById('singleContactSignature').innerText = signature;
    document.getElementById('singleContactSignature').style.backgroundColor = userColor;

    setCurrentContactEmail(email);
}

async function openEmailProgram() {
    let email = await getCurrentContactEmail();
    window.open('mailto: ' + email);
}


