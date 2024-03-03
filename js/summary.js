let dummyTask = {
  title: "",
  description: "",
  prio: "",
  dueDate: "",
  category: "",
  assignedTo: "",
  subtasks: [],
  id: "",
  status: "Open",
  from: "",
};

// let dummyTask = {
//   selectedTitle: "",
//   selectedDescription: "",
//   selectedDueDate: "",
//   selectedPrio: "",
//   selectedCategory: "",
//   subtasks: [""],
// };

// --------------------------------------------------------

/**
 * Gets the current tasks.
 */
async function initSummeryCountings() {
  getTodosCounting(); // row1
  getUrgentTask(); // row2
  getTodoStatusCounting("summeryTodoTodos", "Open"); // row
  getTodoStatusCounting("summeryDoneTodos", "done"); // row1
  getTodoStatusCounting("summeryProcessTasks", "in progress"); // row3
  getTodoStatusCounting("summeryAwaitingTask", "await feedback"); // row3
}

/**
 * The current open tasks.
 */
function getTodosCounting() {
  let summeryTodoSize = document.querySelectorAll("[data-todos]");
  let count = user.tasks.length;

  summeryTodoSize.forEach((ele) => {
    ele.innerHTML = "" + count;
  });
}

/**
 * Status function. From the three importances to choose from.
 * The parameter Status: Open is first declared in the dummy and is itself automatically set with a switch.
 * @param {IDs of each reactangle} eleId
 * @param {The status when setting the tasks} status
 */
function getTodoStatusCounting(eleId, status) {
  let doneTodosEle = document.getElementById(eleId);
  if (doneTodosEle) {
    let count = dummyTask.status;
    // let count = user.filter((a) => a.status.match(status));
    doneTodosEle.innerHTML = count.length;
  }
}

/**
 * Get the current urgent task and next nearest date.
 */
function getUrgentTask() {
  try {
    let summerUrgentDateEle = document.getElementById("summery-urgent-date");
    let tasks = currentUser.tasks;
    let firstDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    tasks.forEach((task) => {
      let dueDate = new Date(task.dueDate);
      let today = new Date();
      if (firstDate <= dueDate) {
        if (today >= dueDate) {
          firstDate = dueDate;
        }
      }
    });
    summerUrgentDateEle.innerHTML = firstDate.toLocaleDateString(
      "en-US",
      options
    );
    getTasksonDate(firstDate);
  } catch (error) {}
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
