// --------------------------------------------------------

// --------------------------------------------------------

/*
 * include header and munu.
 * Than add navigation style as active.
 */
async function initBoard() {
  await includeHTML();
  setActiveLink("navBoard");
  await loadCurrentUserAlsoUsersAsObject();
}

/**
 * Provide the user globally as an object and the other users in a separate array.
 */
async function loadCurrentUserAlsoUsersAsObject() {
  users = JSON.parse(await getItem("users")) || [];
  const currentEmail = await getItem("currentUserId");

  if (currentEmail) {
    // Lade den Benutzer anhand des Index aus dem `users`-Array
    user = users.find((userIndex) => userIndex.email === currentEmail);
    console.log(users);
    console.log(user);
  } else {
    console.log("Benutzer nicht gefunden");
  }
}

// --------------------------------------------------------
