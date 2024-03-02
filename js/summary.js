/*
 * include header and munu.
 * Than add navigation style as active.
 */
async function initSummary() {
  await includeHTML();
  setActiveLink("navSummary");
  await loadCurrentUserAsObject();

  await getGlobalUserId();
}

async function getGlobalUserId() {
  return await getItem("currentUserId");
}

async function loadCurrentUserAsObject() {
  console.log(user);
}

// --------------------------------------------------------

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