/**
 * Starten des Programms für die Kontakte.
 */
async function initMainContact() {
  // let userId = getGlobalUserId();
  await loadCurrentUserAlsoUsersAsObject();
  await includeHTML();
  setActiveLink("navContacts");

  // updateBackgroundColorMain(isListContactActive);
  await initListContact();
  createUserSignatureIcon();
  /*resetUserContacts();*/
  /*loadContactsForExample(contactsNew); nur vorübergehend */
  // document.getElementById("listContactContainer").style.display = "block";

}


/* nur vorrübergehend belassen bis addContact funktioniert und anschließend löschen
let contactsNew = [
  {
  name: "eins eins",
  phone: "1111",
  email: "eins@eins.de",
  userId: "guest@mail.de", 
  signature: "EE",
  userColor: "var(--yellow)", 
  contactId: "1111111"
},
{
  name: "zwei zwei",
  phone: "2222",
  email: "zwei@zwei.de",
  userId: "guest@mail.de", 
  signature: "ZZ",
  userColor: "var(--red)", 
  contactId: "222222"
},
{
  name: "drei drei",
  phone: "3333",
  email: "drei@drei.de",
  userId: "guest@mail.de", 
  signature: "DD",
  userColor: "var(--red)", 
  contactId: "333333"
}];

function loadContactsForExample(contactsNew) {
  debugger;
  user.contacts = contactsNew;
  debugger; 

  setItem('users', users);
} */
