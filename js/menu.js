/**
 * Function to highlight the active link.
 * @param {The ID of the menu items} activeLinkId
 */
function setActiveLink(activeLinkId) {
  let navSummary = document.getElementById("navSummary");
  let navBoard = document.getElementById("navBoard");
  let navAddTask = document.getElementById("navAddTask");
  let navContacts = document.getElementById("navContacts");

  if (navSummary && navBoard && navAddTask && navContacts) {
    navBoard.classList.remove("activeLinkStyle");
    navAddTask.classList.remove("activeLinkStyle");
    navSummary.classList.remove("activeLinkStyle");
    navContacts.classList.remove("activeLinkStyle");

    let currentMenuItem = document.getElementById(`${activeLinkId}`);

    if (currentMenuItem) {
      currentMenuItem.classList.add("activeLinkStyle");
    } else {
      console.error("Element mit ID", activeLinkId, "nicht gefunden.");
    }
  } else {
    console.error("Fehler beim Suchen der Menüelemente.");
  }
}
