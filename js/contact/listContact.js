
let currentUserContacts = [];

function renderContacts() {
    currentUserContacts = getAllContactsFromCurrentUser('user1');
    let sortedContacts = sortAllContactsFromCurrentUserAlphabetical(currentUserContacts);
    let listChars = getListFirstChars(sortedContacts);
    renderContainerList(sortedContacts, listChars);
}

function getAllContactsFromCurrentUser(currentUserId) {
    for (let i = 0; i < mockUpUserContacts.length; i++) {
        if (mockUpUserContacts[i]['userId'] == currentUserId) {
            currentUserContacts.push(mockUpUserContacts[i]);
        }
    }
    return currentUserContacts;
}


function sortAllContactsFromCurrentUserAlphabetical(currentUserContacts) {
    let sortedContacts = currentUserContacts;
    sortedContacts.sort((a, b) => {
        //Alphabetisch nach Namen sortieren/         
        const nameA = a.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {            
           return -1;         
       }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return sortedContacts;
}


function getListFirstChars(currentUserContacts) {
    let setFirstChars = new Set();
    let listFirstChars = [];
    let currentContacts = currentUserContacts;
    for (let i = 0; i < currentContacts.length; i++) {
        let signs = currentContacts[i]['signature'];
        setFirstChars.add(signs.charAt(0));
        listFirstChars = Array.from(setFirstChars).sort();
    }
    
    return listFirstChars;
}


function renderContainerList(sortedContacts, listChars) {
    let chars = listChars;
    let contacts = sortedContacts;
    let charRow = document.getElementById('containerListContacts');
    charRow.innerHTML = '';
    
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        charRow.innerHTML += `
            <div class="alphabeticalRow">
                <span class="firstChartSort">
                    ${char}
                </span>
            </div>
            <div class="styleHr"></div>
         `;
        renderContactCards(char, contacts, charRow);

        }
}


function renderContactCards(char, currentContacts, charRow) {
    let contacts = currentContacts;
    let sign = char;
    let contactCard = charRow;
    for (let i = 0; i < contacts.length;i++) {
        let contact = contacts[i];
        if (contact['name'].charAt(0) === sign) {
            contactCard.innerHTML += `
            <div class="singleContact">
                <div class="contactSignatureIcon" style="background-color:  ${contact['userColor']}">
                    <span class="contactSignatureIconLetter">
                        ${contact['signature']}
                    </span>
                </div>
                <div id="contactData">
                <div class="contactName">
                    ${contact['name']}
                </div>
                <div class="contactEmail">
                    ${contact['email']}
                </div>
            </div>
        </div>`;

        }
    }
}








