//LIST CONTACT JS
//TODO: userId muss mittels setter übernommen werden aus dem Login Protokoll

async function initListContact() {
    await includeHTML();
    console.log('Response Start initListContact()');
    
    let sortedContacts = await getAllContactsFromCurrentUserSorted(); 
    
    //Das hier ist außen vor für addTask
    let listChars = getListFirstChars(sortedContacts);
    
    //Bleibt außen vor für addContactTask
    renderContainerList(sortedContacts, listChars, 'user1');
}




async function getGlobalUserId() {   
    return await getItem('currentUserId');
}//UserID bereitstellen und aus Storage lesen, damit die passenden Kontakte selektiert werden können. 


async function loadAllContactsFromAllUsers() {
    let allContactsFromCurrentUser = await getItem('mockUpAllUserContacts');

    return JSON.parse(allContactsFromCurrentUser);
}

async function getAllContactsFromCurrentUserSorted() {
    let allContactsFromAllUsers = await loadAllContactsFromAllUsers(); 
    let userId = await getGlobalUserId(); //setzen der aktuellen UserId
    let allContactsFromCurrentUser = await getAllContactsFromCurrentUser(allContactsFromAllUsers, userId); //Zugriff auf Kontakte des aktuellen Users
    let sortedContacts = await sortAllContactsFromCurrentUserAlphabetical(allContactsFromCurrentUser); // Kontakte alphabetisch sortieren 
    
    return sortedContacts;
}


//Funktion in addTask übernehmen 
async function getAllContactsFromCurrentUser(allContactsFromAllUsers, currentUserId) {
    let allContacts = await allContactsFromAllUsers;
    let currentUserContacts = [];
    for (let i = 0; i < allContacts.length; i++) {
        if (allContacts[i]['userId'] === currentUserId) {
            currentUserContacts.push(allContacts[i]);
        }
    }

    return currentUserContacts;
}


//Kontakte alphabetisch sortieren
async function sortAllContactsFromCurrentUserAlphabetical(allContactsFromCurrentUser) {
    let sortedContacts = await allContactsFromCurrentUser;
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


function renderContainerList(sortedContacts, listChars, userId) {
    let chars = listChars;
    let contacts = sortedContacts;
    let charRow = document.getElementById('containerListContacts');
    let currentUserId = userId;
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
        renderContactCards(char, contacts, charRow, currentUserId);

        }
}


function renderContactCards(char, currentContacts, charRow, currentUserId) {
    let contacts = currentContacts;
    let sign = char;
    let contactCard = charRow;
    let userId = currentUserId;

    for (let i = 0; i < contacts.length;i++) {
        let contact = contacts[i];
        if (contact['name'].charAt(0).toUpperCase() === sign) {
            contactCard.innerHTML += `
            <a class="singleContact" onclick="openShowSingleContactContainer('${userId}', '${contact['contactId']}', '${contact['name']}', '${contact['email']}', '${contact['phone']}', '${contact['signature']}','${contact['userColor']}')">
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


function openEditContactContainer() {
    document.getElementById("editContactContainer").style.display = "block";
    document.getElementById("mobileBtnAddContact").style.display = "none";
    console.log('Open Edit Contact Container ist erfolgt!')
}


function closeEditContactContainer() {
    document.getElementById("editContactContainer").style.display = "none";
    document.getElementById("mobileBtnAddContact").style.display = "inline-block";
    console.log('Open Edit Contact Container ist erfolgt!')
}
  

function saveEditContact() {
    document.getElementById("editContactContainer").style.display = "none";
}


function saveEditContact() {
    document.getElementById("editContact").style.display = "none";
}


function openAddContactContainer() {
    document.getElementById("addContactContainer").style.display = "block";
    document.getElementById("mobileBtnAddContact").style.display = "none";
    console.log('Open Add Contact Container');
}













