/**
 * First remove the class from all elements
 * Add the class to the selected element
 * @param {The ID of the menu items} activeLinkId
 */
// function setActiveLink(activeLinkId) {
//   const menuItems = document.querySelectorAll(".menuItem");

//   menuItems.forEach((item) => {
//     item.classList.remove("activeLinkStyle");
//   });

//   const activeLink = document.querySelector(`#${activeLinkId}`);
//   if (activeLink) {
//     activeLink.classList.add("activeLinkStyle");
//   }
// }



function setActiveNavItem() {
  const currentPath = window.location.pathname;
  const navbarElements = document.querySelectorAll(".menuItem");

  navbarElements.forEach((element) => {
    const dataHref = element.getAttribute("data-href");

    if (currentPath.includes(dataHref)) {
      element.classList.add("activeLinkStyle");
      localStorage.setItem("activeLinkId", element.id);
    } else {
      element.classList.remove("activeLinkStyle");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const storedActiveLinkId = localStorage.getItem("activeLinkId");
  if (storedActiveLinkId) {
    setActiveNavItem();
  } else {
    setActiveNavItem(); // Fügen Sie hier die Standard-Logik hinzu, wenn keine gespeichert ist
  }
});





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
