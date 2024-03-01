// function includeContentHTML(changePage) {
//   window.location.assign(changePage + ".html");
// }

/**
 * Funktion zum Laden des aktiven Links nach dem Seitenwechsel
 * @param {activeLinkId as string} activeLinkId
 */
function afterPageSwitchLoadActiveLink(activeLinkId) {
  document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const activeLinkId = urlParams.get("activeLinkId");

    if (activeLinkId) {
      setActiveLink(activeLinkId);
    } else {
      console.log("fehler bei activeLinkId durch ULR weiterleitung. Oder so.");
      // Hier können Sie eine Standard-Logik hinzufügen, wenn kein Parameter übergeben wurde
    }
  });
}

/**
 * Funktion zum Hervorheben des aktiven Links
 * @param {The ID of the menu items} id
 */
function setActiveLink(activeLinkId) {
  let navSummary = document.getElementById("navSummary");
  let navBoard = document.getElementById("navBoard");
  let navAddTask = document.getElementById("navAddTask");
  let navContacts = document.getElementById("navContacts");

  // Hier sicherstellen, dass die Elemente gefunden wurden
  if (navSummary && navBoard && navAddTask && navContacts) {
    // Klassen korrekt hinzufügen/entfernen
    navBoard.classList.remove("activeLinkStyle");
    navAddTask.classList.remove("activeLinkStyle");
    navSummary.classList.remove("activeLinkStyle");
    navContacts.classList.remove("activeLinkStyle");

    // Hier das entsprechende Element abrufen
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
