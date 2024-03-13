/**
 * Load the content of help.
 */
async function initHelp() {
  await includeHTML();
  preparePopupEvent();
  createUserSignatureIcon();
}
