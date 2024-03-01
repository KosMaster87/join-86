const contactColors = ["var(--red)", "var(--yellow)", "var(--orangeIcons)", "var(--green)", "var(--pink)", "var(--mintGreen)"];
let allContactsFromAllUsers = [];
//TODO: delete mockUpAllUserContacts after testing at remote-storage and change all functions 

const userId = "user1"; //vorübergehend als Konstante angelegt


async function startSaveProcess() {
    let name = (document.getElementById('contactInputName').value).trim();
    let email = (document.getElementById('contactInputEmail').value).trim();
    let phone = (document.getElementById('contactInputPhone').value).trim();

    if (checkAllInputFields(name, email, phone) == true) {
        await saveContact(name, email, phone);
        resetInputFields();
    } else {
        console.log('Speichervorgang ist aufgrund eines Fehler abgebrochen worden.')
    }   
}


async function saveContact(name, email, phone) {
    let contactId = generateRandomId();
    let userColor = getRandomColor(contactColors);
    let signature = getSignature(name);

    let contact = {
        "userId": userId, 
        "contactId": contactId, 
        "name": name, 
        "email": email, 
        "phone": phone, 
        "userColor": userColor, 
        "signature": signature
    };
    console.log(contact);
    allContactsFromAllUsers.push(contact);
    console.log(allContactsFromAllUsers);
    await setItem('mockUpAllUserContacts', JSON.stringify(allContactsFromAllUsers));
}


function resetInputFields() {
    document.getElementById('contactInputName').value = '';
    document.getElementById('contactInputEmail').value = '';
    document.getElementById('contactInputPhone').value = '';
}    


function getRandomColor (userColors) {
    let randomIndex = Math.floor(Math.random() * userColors.length);
    let randomColor = userColors[randomIndex];
    
    return randomColor;
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


function generateRandomId() {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!/%?';
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        id += chars[randomIndex];
    }

    return id;
}
 

function checkAllInputFields(name, email, phone) {
    if (checkInputName(name) === false) {
        return false;
    } else if (checkInputEmail(email) === false) {
        return false;
    } else if (checkInputPhone(phone) === false) {
        return false;
    } else {
        return true;
    }
}


function checkInputName(input) {
    let name = input;
    let result = checkIfInputFieldIsEmpty(name) == true ? true : false;
    if (result == false) {
        console.log('Fehler inputName: Name erforderlich');
    } else {
        return result;
    }   
}


function checkInputEmail(input) {
    let email = input;

    if (checkIfInputFieldIsEmpty(email) == false) {
        console.log('Abbruch - Daten sind nicht vollständig!');
        return false;
    } else if (checkAtSymbolExists(email) == false) {
        console.log('Abbruch - Daten sind nicht korrekt!');
        return false;
    } else {
        console.log('Die Daten sind korrekt und vollständig!');
        return true;
    }
}


function checkIfInputFieldIsEmpty(string) {
    let input = string;
    if (input == '') {
        return false;
    } else {
        return true;
    }
}


function checkAtSymbolExists(input) {
    let email = input;
    if (email.indexOf('@') != -1) {
        console.log("Der String enthält ein @-Zeichen.");
        return true;
    } else {
        console.log("Der String enthält kein @-Zeichen.");
        return false;
    }
}


function checkInputPhone(phone) {
    let phoneNumber = phone;
    const regex = /^[\d ()+-]+$/; 

    if (regex.test(phoneNumber)) {
        console.log("Die Telefonnummer ist gültig.");
        return true;
    } else {
        console.log("Die Telefonnummer ist ungültig.")
        return false;
    }
}



