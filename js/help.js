/**
 * Load the content of help.
 */
async function initHelp() {
  await includeHTML();
  setActiveLink("help");
  preparePopupEvent();
}
