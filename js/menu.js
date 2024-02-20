"use strict";

/**
 * First remove the class from all elements
 * Add the class to the selected element
 * @param {The ID of the menu items} activeLinkId
 */
function setActiveLink(activeLinkId) {
  const menuItems = document.querySelectorAll(".menuItem");

  menuItems.forEach((item) => {
    item.classList.remove("activeLinkStyle");
  });

  const activeLink = document.querySelector(`#${activeLinkId}`);
  if (activeLink) {
    activeLink.classList.add("activeLinkStyle");
  }
}

/**
 * First remove the class from all elements
 * Add the class to the selected element
 * @param {The ID of the menu items} id
 */
// function setActiveLink(id) {
//   document.getElementById("navSummary").classList.remove("activeLinkStyle");
//   document.getElementById("navBoard").classList.remove("activeLinkStyle");
//   document.getElementById("navAddTask").classList.remove("activeLinkStyle");
//   document.getElementById("navContacts").classList.remove("activeLinkStyle");
//   document.getElementById(id).classList.add("activeLinkStyle");
// }
