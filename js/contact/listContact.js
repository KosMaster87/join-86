let sortedContacts;
let listFirstChars;

/**
 *
 */
async function initListContact() {
  await initWidthContacts();
  document.getElementById("listContactContainer").style.display = "flex";
  sortAllContactsFromCurrentUserAlphabetical();
  await getListFirstChars();
  renderContainerList();
}

/**
 * 
 */
function sortAllContactsFromCurrentUserAlphabetical() {
  user.contacts.sort((a, b) => {
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

  sortedContacts = user.contacts;
}

/**
 * 
 */

async function getListFirstChars() {
  let setFirstChars = new Set();
  listFirstChars = [];
  for (let i = 0; i < sortedContacts.length; i++) {
    let signs = sortedContacts[i]["signature"];
    setFirstChars.add(signs.charAt(0));
  }
  return listFirstChars = Array.from(setFirstChars).sort();
}

/**
 * 
 */
function renderContainerList() {
  let charRow = document.getElementById("listContactContainer");
  charRow.innerHTML = "";
  charRow.innerHTML = `
  <div class="centerDesktopAdd">
  <a id="desktopBtnAddContact" onclick="desktopOpenAddContactContainer()">
        <div class="desktopBtnIntern">
          <span class="desktopBtnAddContactText">Add new contact</span>
          <img class="desktopBtnAddContactIcon" src="../assets/img/addContact/person_add.svg">
        </div>
      </a>
      </div>
  `;

  for (let i = 0; i < listFirstChars.length; i++) {
    let char = listFirstChars[i];
    charRow.innerHTML += `
            <div class="alphabeticalRow">
                <div class="firstChartSort">
                    ${char}
                </div>
            </div>
            <div class="styleHr"></div>
         `;
    renderContactCards(charRow, char);
  }
}

/**
 * 
 * @param {*} contactCard 
 * @param {*} char 
 */
function renderContactCards(contactCard, char) {
  let sign = char;
  for (let i = 0; i < user.contacts.length; i++) {
    let contact = user.contacts[i];
    if (contact["name"].charAt(0).toUpperCase() === sign) {
      contactCard.innerHTML += `
            <a id="singleContactBtn${contact["contactId"]}" class="singleContact" onclick="goFromListContactToShowSingleContact('${contact["contactId"]}')">
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


/* FUNKTIONEN AUF LIST CONTACT SEPARIEREN */
async function goFromListContactToShowSingleContact(contactId) {
  document.getElementById("mobileBtnAddContact").style.display = "none";
  const allButtons = document.querySelectorAll('.singleContact');
  allButtons.forEach(button => {
    button.classList.remove('active');
  });
  let id = "singleContactBtn" + contactId;
  document.getElementById(id).classList.add('active');
  let width = getWindowWidth();

  if (width < 1200) {
    await loadShowSingleContact(contactId);
    mobileBtnThreePoints
    document.getElementById(`mobileBtnThreePoints`).style.display = "block";

    let singleContactCol = document.getElementById("singleContactCol");
    singleContactCol.classList.remove("slide-in");

    document.getElementById("showSingleContactContainer").style.display = "block";
    document.getElementById("listContactContainer").style.display = "none";
  } else {
    await loadShowSingleContact(contactId);
    //slide effekt start function
    document.getElementById("showSingleContactContainer").style.display = "flex";
    let singleContactCol = document.getElementById("singleContactCol");
    singleContactCol.classList.add("slide-in");
    singleContactCol.style.display = "flex";
  }
}

async function openAddContactContainer() {
  document.getElementById("mobileBtnAddContact").style.display = "none";
  document.getElementById("addContactContainer").style.display = "block";
  document.getElementById("addOverlayFrame").style.display = "flex";
}

function desktopOpenAddContactContainer() {
  document.getElementById("mobileBtnAddContact").style.display = "none";
  document.getElementById("addContactContainer").style.display = "block";
  document.getElementById("addOverlayFrame").style.display = "flex";
}

async function setFocussedContactId(focussedContactId) {
  await setItem('focussedContactId', focussedContactId);
}

async function getFocussedContactId() {
  await getItem('focussedContactId');
}

/* AKTUELL HIER - FOCUS NEW CONTACT  ab 1200px berücksichtigen*/
/*async function focusSavedContact() {
  let currentContact = await getFocussedContactId();
  if (currentContact) {
    console.log('IST AM LAUFEN');
    let contacts = user.contacts;
    for (let i = 0; i > contacts.length; i++) {
      const contact = contacts[i];
      if (user.contact.contactId === currentContactId) {
        let focussedElement = document.getElementById(currentContactId).classList.add("focusNewContact");
        if (focussedElement) {
          focussedElement.scrollIntoView({ behavior: "smooth", block: "center" });
          focussedElement.focus();
        }
      }
    }
  }
}*/