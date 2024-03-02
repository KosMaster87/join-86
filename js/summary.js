/*
 * Start -> body onload
 * include header and munu.
 * Than add navigation style as active.
 */
async function initSummary() {
  await includeHTML();
  setActiveLink("navSummary");
}

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

/**
 * TODO NUR DEKLARIERT
 * Selects the two division folders in the summary HTML. And renders the HTML greeting or not.
 */
async function greetUser() {
  let greetingEles = document.getElementsByClassName("summeryGreetX");
  let userName = await currentUser.name;
  if (userName.match("Guest Master")) {
    userName = "";
  }
  Array.from(greetingEles).forEach((ele) => {
    ele.innerHTML = userName;
  });
}

// -----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  console.log(userId);
  getUserIDfromURL(userId);
});

async function getUserIDfromURL(userId) {
  const response = await fetch(`${userId}`);
  const userURLid = await response.json();
  console.log("Benutzerdaten erhalten:");
  console.log(userURLid);
  // Füge den Code hinzu, um die Benutzerdaten auf der Seite anzuzeigen oder zu verwenden

  if (userURLid) {
    await loadUsers();

    user = users.find((userID) => userID.userID);
  }
}

// -----------------------------------------------------------------
