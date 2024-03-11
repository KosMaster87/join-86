/**
 * Load the content of the privacy-policy.
 */
async function initPolicy() {
  await includeHTML();
  setActiveLink("navPrivacyPolicy");
  preparePopupEvent();
}
