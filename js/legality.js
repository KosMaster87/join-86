/**
 * Load the content of the legal-notice.
 */
async function initLegalNotice() {
  await includeHTML();
  setActiveLink("navLegalNotice");
  preparePopupEvent();
}
