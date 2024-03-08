/**
 * Function prepare to remove highlight the active link.
 * @param {The ID of the menu items} activeLinkId
 */
function setActiveLink(activeLinkId) {
  let navSummary = document.getElementById("navSummary");
  let navBoard = document.getElementById("navBoard");
  let navAddTask = document.getElementById("navAddTask");
  let navContacts = document.getElementById("navContacts");
  let navPrivacyPolicy = document.getElementById("navPrivacyPolicy");
  let navLegalNotice = document.getElementById("navLegalNotice");

  removeActiveStyle(
    activeLinkId,
    navSummary,
    navBoard,
    navAddTask,
    navContacts,
    navPrivacyPolicy,
    navLegalNotice
  );
}

/**
 * Function to remove highlight the active link.
 * @param {The ID of the menu items} activeLinkId
 */
function removeActiveStyle(
  activeLinkId,
  navSummary,
  navBoard,
  navAddTask,
  navContacts,
  navPrivacyPolicy,
  navLegalNotice
) {
  navBoard.classList.remove("activeLinkStyle");
  navAddTask.classList.remove("activeLinkStyle");
  navSummary.classList.remove("activeLinkStyle");
  navContacts.classList.remove("activeLinkStyle");
  navPrivacyPolicy.classList.remove("activeLinkStyle");
  navLegalNotice.classList.remove("activeLinkStyle");

  addActiveStyle(activeLinkId);
}

/**
 * Function to highlight the active link.
 * @param {The ID of the menu items} activeLinkId
 */
function addActiveStyle(activeLinkId) {
  let currentMenuItem = document.getElementById(`${activeLinkId}`);

  if (currentMenuItem) {
    currentMenuItem.classList.add("activeLinkStyle");
  } else {
    console.error("Element mit ID", activeLinkId, "nicht gefunden.");
  }
}
