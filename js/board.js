// --------------------------------------------------------

// --------------------------------------------------------

/*
 * include header and munu.
 * Than add navigation style as active.
 */
async function initBoard() {
  await includeHTML();
  setActiveLink("navBoard");
  await loadCurrentUserAsObject();
}

async function loadCurrentUserAsObject() {
  const users = JSON.parse(await getItem("users")) || [];
  const currentIndex = await getItem("currentIndex");

  if (currentIndex) {
    // Lade den Benutzer anhand des Index aus dem `users`-Array
    user = users.find(
      (userIndex) => userIndex.index === parseInt(currentIndex)
    );
    console.log(user);
  } else {
    console.log("Benutzer nicht gefunden");
  }
}

// --------------------------------------------------------
