let todos=0;
let dones=0;
// let tasksInBoard= 0;
let progresses=0;
let awaits=0;

/**
 * The current open tasks.
 */
function howManyTasks(){
for (let i = 0; i < user.tasks.length; i++) {
  if (user.tasks[i].status === "to-do") {
    todos++;
  }  else if (user.tasks[i].status === "done") {
    dones++;
  }  else if (user.tasks[i].status === "progress") {
    progresses++;
  }   else if (user.tasks[i].status === "await") {
    awaits++;
  } 

  todoContainer = document.getElementById(`summeryTodoTodos`);
  todoContainer.innerHTML= todos;

  doneContainer = document.getElementById(`summeryDoneTodos`)
  doneContainer.innerHTML= dones;

  progressContainer = document.getElementById(`summeryProcessTasks`)
  progressContainer.innerHTML= progresses;
  
  awaitContainer = document.getElementById(`summeryAwaitingTask`)
  awaitContainer.innerHTML= awaits;

  tasksInBoard = user.tasks.length;
  counterContainer = document.getElementById(`dataTodos`);
  counterContainer.innerHTML = tasksInBoard;
}
}


/**
 * Gets the current tasks.
 */
async function initSummeryCountings() {
  howManyTasks();
  // getUrgentTask();
  // getTodoStatusCounting("summeryTodoTodos");
  // getTodoStatusCounting("summeryDoneTodos");
  // getTodoStatusCounting("summeryProcessTasks");
  // getTodoStatusCounting("summeryAwaitingTask");
}




/**
 * Get the current urgent task and next nearest date.
 */
function getUrgentTask() {
  let summeryUpcomingTasks = document.getElementById("summeryUpcomingTasks");
}

/**
 * Status function. From the three importances to choose from.
 * The parameter Status: Open is first declared in the dummy and is itself automatically set with a switch.
 * @param {IDs of each reactangle} eleId
 * @param {The status when setting the tasks} status
 */
function getTodoStatusCounting() {
  let summeryTodoTodos = document.getElementById("summeryTodoTodos");
 
}

// --------------------------------------------------------

/*
 * Include header and munu.
 * Than add navigation style as active.
 * Set Users array and user as global.
 * Set the countings from the user.
 */
async function initSummary() {
  await includeHTML();
  setActiveLink("navSummary");
  await loadCurrentUserAlsoUsersAsObject();
  initSummeryCountings();

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

// --------------------------------------------------------
