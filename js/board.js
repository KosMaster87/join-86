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
function loadTasks() {
  title = document.getElementById(`titleid`);
  titletext = user.tasks[1].title;
  title.innerHTML = titletext;
}
function updateProgressBar() {
  progressBar.style.width = 50 + "%";
}

function loadTasks() {
  toDoMainContainer = document.getElementById(`TodoMainContainer`);

  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "to-do") {
      toDoMainContainer.innerHTML += toDoHtmlReturn(i);
      taskCategoryContainer = document.getElementById(`TaskCategory${i}`);
      titleContainer = document.getElementById(`titleId${i}`);
      descriptionContainer = document.getElementById(`descriptionID${i}`);
      progressContainer = document.getElementById(`ProgressBar${i}`);
      iconBarContainer = document.getElementById(`IconBar${i}`);
      prioContainer = document.getElementById(`PrioImageContainer${i}`);
      howManyTasks = document.getElementById(`counterOfTasks${i}`);
      finishedTasks = document.getElementById(`finishedTasks${i}`);

      howManyTasks.innerHTML = `${user.tasks[i].subtasks.length}`;
      titleContainer.innerHTML = user.tasks[i].title;
      descriptionContainer.innerHTML = user.tasks[i].description;
      taskCategoryContainer.innerHTML = user.tasks[i].category;

      if (user.tasks[i].category === "User Story") {
        taskCategoryContainer.style.backgroundColor = "#0038FF";
      } else if (user.tasks[i].category === "Technical Task") {
        taskCategoryContainer.style.backgroundColor = "#1FD7C1";
      }

      for (let a = 0; a < user.tasks[i].assignedTo.length; a++) {
        let signature = "";
        let words = user.tasks[i].assignedTo[a].toUpperCase().split(" ");

        for (let j = 0; j < words.length; j++) {
          signature += words[j].charAt(0);
        }

        iconBarContainer.innerHTML += iconReturn(signature);
      }
    }
  }
}
