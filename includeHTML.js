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
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

/**
 * Easy to change pages.
 * And use the URL as a transport for the active link to be marked.s
 * @param {page as stringname} page
 * @param {activeLinkId as string} activeLinkId
 */
function includeContentHTML(page, activeLinkId) {
  const url = `${page}.html?activeLinkId=${activeLinkId}`;
  window.location.assign(url);
}
