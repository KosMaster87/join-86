//LIST CONTACT JS
//TODO: userId muss mittels setter übernommen werden aus dem Login Protokoll

async function initListContact() {
  updateBackgroundColorMain(isListContactActive);
  document.getElementById("listContactContainer").style.display = "inline";
  await includeHTML();
  let sortedContacts = await getAllContactsFromCurrentUserSorted();
  let listChars = getListFirstChars(sortedContacts);

  renderContainerList(sortedContacts, listChars, "user1");
}


async function getGlobalUserId() {
  return await getItem("currentUserId");
} 


async function loadAllContactsFromAllUsers() {
  let allContactsFromCurrentUser = await getItem("mockUpAllUserContacts");

  return JSON.parse(allContactsFromCurrentUser);
}


async function getAllContactsFromCurrentUserSorted() {
  let allContactsFromAllUsers = await loadAllContactsFromAllUsers();
  let userId = await getGlobalUserId(); 
  let allContactsFromCurrentUser = await getAllContactsFromCurrentUser(
    allContactsFromAllUsers,
    userId
  ); 
  let sortedContacts = await sortAllContactsFromCurrentUserAlphabetical(allContactsFromCurrentUser); // Kontakte alphabetisch sortieren

  return sortedContacts;
}


async function getAllContactsFromCurrentUser(allContactsFromAllUsers, currentUserId) {
  let allContacts = await allContactsFromAllUsers;
  let currentUserContacts = [];
  for (let i = 0; i < allContacts.length; i++) {
    if (allContacts[i]["userId"] === currentUserId) {
      currentUserContacts.push(allContacts[i]);
    }
  }

  return currentUserContacts;
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
  let mainContainer = document.getElementById('main');

  if (isListContactActive) {
    mainContainer.classList.add('white-background');
  } else {
    mainContainer.classList.remove('white-background');
  }
}

/* FUNKTIONEN AUF LIST CONTACT */
function goFromListContactToShowSingleContact(userId, contactId, name, email, phone, signature, userColor) {
  document.getElementById("showSingleContactContainer").style.display = "block";
  document.getElementById("mobileBtnAddContact").style.display = "none";
  document.getElementById("listContactContainer").style.display = "none";
  document.getElementById("mobileBtnThreePoints").style.display = "block";
  console.log('Open Show Single Contact Container');
  loadShowSingleContact(userId, contactId, name, email, phone, signature, userColor);
} 