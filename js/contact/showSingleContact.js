/* Show Single Contact JS */


async function loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor) {
    fillAllVariables(name, email, phone, signature, userColor);
}


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
    console.log('Open Show Single Contact Container');
    loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor);
}


function goToListContactContainer() {
    document.getElementById("showSingleContactContainer").style.display = "none";
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