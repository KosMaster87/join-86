//LIST CONTACT JS
async function initListContact() {
  let userId = getGlobalUserId();
  let currentContactId = getCurrentContactId();
  loadCurrentUserAlsoUsersAsObject()
  await includeHTML();
  setActiveLink("navContacts");
  updateBackgroundColorMain(isListContactActive);
  document.getElementById("listContactContainer").style.display = "flex";
  let sortedContacts = await getAllContactsFromCurrentUserSorted();
  let listChars = getListFirstChars(sortedContacts); 
  renderContainerList(sortedContacts, listChars, userId);
} 

async function setGlobalUserId(currentUserId) {
  await setItem('currentUserId', currentUserId)
}

async function getGlobalUserId() {
  let currentUserId = await getItem('currentUserId');

  return currentUserId;
}


async function getAllContactsFromCurrentUser() {

  return getItem('user');
}


async function getAllContactsFromAllUsers() {
  return await getAllContactsFromAllUsers();
} 


async function getAllContactsFromCurrentUser() {
  return await getAllContactsFromCurrentUserSorted();
}

 
async function getAllContactsFromCurrentUser() {
  let currentUserId = await getGlobalUserId();
  let users = await getAllContactsFromAllUsers();
  const contactsArray = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.email == currentUserId) {
        for (let j = 0; j < user.contacts.length; j++) {
          const contact = user.contacts[j];
          if (contact.userId == currentUserId) {
            contactsArray.push(contact);
          }
        }
        break; 
    } 
  }
  return contactsArray; 
}

async function getAllContactsFromAllUsers() {
  let allContactsFromAllUsers = await getItem('users');

  return JSON.parse(allContactsFromAllUsers);
}

async function getAllContactsFromCurrentUserSorted() {

  let allContactsFromCurrentUser = await getAllContactsFromCurrentUser(await getAllContactsFromAllUsers()); 
  let sortedContacts = await sortAllContactsFromCurrentUserAlphabetical(allContactsFromCurrentUser);

  return sortedContacts;
}

async function sortAllContactsFromCurrentUserAlphabetical(allContactsFromCurrentUser) {
  let sortedContacts = await allContactsFromCurrentUser;
  sortedContacts.sort((a, b) => {
    const nameA = a.name.toUpperCase();
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
    let signs = currentContacts[i]["signature"];
    setFirstChars.add(signs.charAt(0));
    listFirstChars = Array.from(setFirstChars).sort();
  }

  return listFirstChars;
}

function renderContainerList(sortedContacts, listChars, userId) {
  let chars = listChars;
  let contacts = sortedContacts;
  let charRow = document.getElementById("listContactContainer");
  let currentUserId = userId;
  charRow.innerHTML = "";

  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    charRow.innerHTML += `
            <div class="alphabeticalRow">
                <div class="firstChartSort">
                    ${char}
                </div>
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

  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    if (contact["name"].charAt(0).toUpperCase() === sign) {
      contactCard.innerHTML += `
            <a class="singleContact" onclick="goFromListContactToShowSingleContact('${userId}', '${contact["contactId"]}', '${contact["name"]}', '${contact["email"]}', '${contact["phone"]}', '${contact["signature"]}','${contact["userColor"]}')">
                <div class="contactSignatureIcon" style="background-color:  ${contact["userColor"]}">
                    <span class="contactSignatureIconLetter">
                        ${contact["signature"]}
                    </span>
                </div>
                <div id="contactData">
                <div class="contactName">
                    ${contact["name"]}
                </div>
                <div class="contactEmail">
                    ${contact["email"]}
                </div>
            </div>
        </div>`;
    }
  }
}

let isListContactActive = true;

function updateBackgroundColorMain() {
  let mainContact = document.getElementById('mainContact');

  if (isListContactActive) {
    mainContact.classList.add('white-background');
  } else {
    mainContact.classList.remove('white-background');
  }
}

window.addEventListener("resize", function () {
  checkWidth();
});

function checkScreenWidth() {
  let result = "";
  let screenWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (screenWidth <= 1219) {
    result = "mobileVersion";
  } else {
    result = "desktopVersion";
  }

  return result; 
}

/* FUNKTIONEN AUF LIST CONTACT SEPARIEREN */
async function goFromListContactToShowSingleContact(userId, contactId, name, email, phone, signature, userColor) {
  document.getElementById("mobileBtnAddContact").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
 
  if (checkScreenWidth() === "mobileVersion") {
    await loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor);
    document.getElementById("mobileBtnThreePoints").style.display = "block";
    document.getElementById("showSingleContactContainer").style.display = "flex";
    console.log('MOBILE VERSION');
  } else {
    await initSingleContactColumn(userId, contactId, name, email, phone, signature, userColor);
    document.getElementById("singleContactCol").style.display = "flex";
    console.log('DESKTOP VERSION'); 
  }
} 



/* AKTUELL HIER - FOCUS NEW CONTACT  ab 1200px berücksichtigen*/
function focusOnNewContact(currentContactId) {
  loadCurrentUserAlsoUsersAsObject()
  let contacts = user.contacts;
  for (let i = 0; i > contacts.length; i++) {
    const contact = contacts[i];
    if (user.contact.contactId === currentContactId) {
      let focussedElement = document.getElementById(currentContactId).classList.add('focusNewContact');
      if (focussedElement) {
        focussedElement.scrollIntoView({behavior: 'smooth', block: 'center'});
        focussedElement.focus();
      }
    }
  }
}

