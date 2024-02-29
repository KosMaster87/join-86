/**
 * Just include header and menu content in current page.
 */
async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html");
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
      console.log("includeHTML erfolgreich geladen.");
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

/**
 * Easy to change pages.
 * @param {Der String den ich in menu.html vergeben habe: onclick="includeContentHTML('summary und andere');} changePage
 */
function includeContentHTML(changePage) {
  window.location.assign(changePage + ".html");
}