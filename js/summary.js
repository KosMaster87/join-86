/*
 * include header and munu.
 * Than add navigation style as active.
 */
// async function initSummary() {
//   await includeHTML();
//   setActiveLink("navSummary");
//   await loadCurrentUserAsObject();

//   await getGlobalUserId();
// }

// async function getGlobalUserId() {
//   return await getItem("currentUserId");
// }

// async function loadCurrentUserAsObject() {
//   console.log(user);
// }

// --------------------------------------------------------


async function initSummary() {
  await includeHTML();
  setActiveLink("navSummary");
  await loadCurrentUserAsObject();
}

async function loadCurrentUserAsObject() {
  const users = JSON.parse(await getItem("users")) || [];
  const currentIndex = await getItem("currentIndex");

  if (currentIndex) {
    // Lade den Benutzer anhand des Index aus dem `users`-Array
    user = users.find((userIndex) => userIndex.index === parseInt(currentIndex));
    console.log("Benutzer als load-Current-User-As-Object geladen:");
    console.log(user);
  } else {
    console.log("Benutzer nicht gefunden");
  }
}

// --------------------------------------------------------

/**
 * Symmary content animate images.
 * @param {Image to animate whit hover} element
 */
function changeImage(element) {
  const img = element.querySelector(".summaryAnimateProgramm");
  if (img.classList.contains("editImage")) {
    img.src = "../assets/img/summary/summaryWhiteEdit.svg";
  } else if (img.classList.contains("checkImage")) {
    img.src = "../assets/img/summary/summaryCheckWhite.svg";
  }
}

/**
 * Symmary content animate images.
 * @param {Image to animate whit hover} element
 */
function changeImageBack(element) {
  const img = element.querySelector(".summaryAnimateProgramm");
  if (img.classList.contains("editImage")) {
    img.src = "../assets/img/summary/summaryGrayEdit.svg";
  } else if (img.classList.contains("checkImage")) {
    img.src = "../assets/img/summary/summaryCheckGray.svg";
  }
}