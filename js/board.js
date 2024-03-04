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
  loadTasks();
}

//  for (let i = 0; i < user.tasks.length; i++) {
function loadTasks(){

    title = document.getElementById(`titleid`);
    titletext= user.tasks[1].title;
    title.innerHTML = titletext;
}
// --------------------------------------------------------



// --------------------------------------------------------
