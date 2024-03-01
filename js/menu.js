/**
 * First remove the class from all elements
 * Add the class to the selected element
 * @param {The ID of the menu items} id
 */
function setActiveLink(id) {
  let navBoard = document.getElementById("navBoard");
  let navAddTask = document.getElementById("navAddTask");
  let navSummary = document.getElementById("navSummary");
  let navContacts = document.getElementById("navContacts");
  let currentMenuItem = document.getElementById(id);
  
  navBoard.classList.remove = "activeLinkStyle";
  navAddTask.classList.remove = "activeLinkStyle";
  navSummary.classList.remove = "activeLinkStyle";
  navContacts.classList.remove = "activeLinkStyle";
  currentMenuItem.classList.add = "activeLinkStyle";
}
