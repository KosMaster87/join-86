// // function setActiveLink(activeLinkId) {
// function setActiveLink() {

// document.querySelectorAll("data-href").forEach(link => {
//   console.log(link);
// })

// }


/**
 * First remove the class from all elements
 * Add the class to the selected element
 * @param {The ID of the menu items} id 
 */
function setActiveLink(id) {
  document.getElementById("navSummary").classList.remove("activeLinkStyle");
  document.getElementById("navBoard").classList.remove("activeLinkStyle");
  document.getElementById("navAddTask").classList.remove("activeLinkStyle");
  document.getElementById("navContacts").classList.remove("activeLinkStyle");
  document.getElementById(id).classList.add("activeLinkStyle");
}