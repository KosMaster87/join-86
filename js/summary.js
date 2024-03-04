// --------------------------------------------------------

// --------------------------------------------------------
// --------------------------------------------------------

/**
 * Gets the current tasks.
 */
function initSummeryCountings(userTasks) {
  getTodosCounting(); // row3 OK
  getUrgentTask(); // row2

  getTodoStatusCounting("summeryTodoTodos"); // row1
  getTodoStatusCounting("summeryProcessTasks"); // row3
  getTodoStatusCounting("summeryAwaitingTask"); // row3
  getTodoStatusCounting("summeryDoneTodos"); // row1; erst mit Board möglich done zu setzen.
}

/**
 * Status function. From the three importances to choose from.
 * The parameter Status: Open is first declared in the dummy and is itself automatically set with a switch.
 * @param {IDs of each reactangle} elementId
 */
function getTodoStatusCounting(elementId) {
  let doneTodosEle = document.getElementById(elementId);
  if (doneTodosEle) {
    let count = userTasks.filter((a) => a.status.match(status));
    doneTodosEle.innerHTML = count.length;
  }
}

/** OK
 * ROW 3 -> Tasks in Board.
 * The current open tasks.
 * @param {Array of user tasks} userTasks
 */
function getTodosCounting(userTasks) {
  let summeryTodoSize = document.querySelectorAll("[data-todos]");
  let count = userTasks.length;

  summeryTodoSize.forEach((ele) => {
    ele.innerHTML = "" + count;
  });


  if (user.status === "to-do") {
    todoCounter ++;
  } else if (user.status === done) {
    doneCounter++;
  }
}

/**
 * Get the current urgent task and next nearest date.
 */
function getUrgentTask() {

}

/**
 * Format the nearest date in en-US.
 * @param {nearest date} date
 */
function getTasksonDate(date) {
  let upcomingTasksElement = document.getElementById("summeryUpcomingTasks");
  const options = { year: "numeric", month: "long", day: "numeric" };
  let dateToString = new Date(date).toLocaleDateString("en-US", options);
  let tasksForDay = [];
  user.tasks.forEach((task) => {
    let taskDate = new Date(task.dueDate).toLocaleDateString("en-US", options);
    if (taskDate.match(dateToString)) {
      tasksForDay.push(task);
    }
  });
  upcomingTasksElement.innerHTML = tasksForDay.length;
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
  initSummeryCountings(user.tasks);
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
