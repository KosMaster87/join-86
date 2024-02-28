async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html");
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

// async function includeContentHTML(pageName) {
//   // Hier laden Sie den Inhalt der Seite in das Hauptdiv
//   let mainContent = document.getElementById("mainContent");
//   mainContent.innerHTML = ""; // Leeren Sie den Inhalt, um die vorherige Seite zu entfernen
//   mainContent.appendChild(fetchPageContent(pageName)); // 'fetchPageContent' sollte implementiert werden, um den Inhalt der Seite abzurufen
// }

// function setActiveLink(linkId) {
//   // Hier heben Sie die aktive Verknüpfung hervor
//   let menuItems = document.querySelectorAll(".menuItem");
//   menuItems.forEach((item) => {
//     item.classList.remove("activeLinkStyle");
//   });

//   let activeLink = document.getElementById(linkId);
//   activeLink.classList.add("activeLinkStyle");
// }

// // Funktion zum Abrufen des Inhalts einer Seite (Beispiel)
// async function fetchPageContent(pageName) {
//   let response = await fetch(`./pages/${pageName}.html`);
//   let content = await response.text();
//   let wrapper = document.createElement("div");
//   wrapper.innerHTML = content;
//   return wrapper;
// }
