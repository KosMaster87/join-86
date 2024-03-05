let todos = 0;
let dones = 0;
let progresses = 0;
let awaits = 0;
let todaysDate = 0;
let tasksInBoard = 0;
let urgentCounter = 0;
let finaleDate;
let greetigText;

/*
 * Include header and munu.
 * Add navigation style as active-link.
 * Set Users array and user as global.
 * Set the countings from the user.
 */
async function initSummary() {
  await includeHTML();
  setActiveLink("navSummary");
  await loadCurrentUserAlsoUsersAsObject();
  TaskDisplayFields();
}

/**
 * Initialize all data from the user into the task fields.
 */
async function TaskDisplayFields() {
  await howManyTasks();
  await determineTodaysDate();
  await searchUpcomingDate();
  greeting();
  setSummaryLetter();
}

/**
 * The user's total number of tasks.
 */
async function howManyTasks() {
  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "to-do") {
      todos++;
    } else if (user.tasks[i].status === "done") {
      dones++;
    } else if (user.tasks[i].status === "progress") {
      progresses++;
    } else if (user.tasks[i].status === "await") {
      awaits++;
    }
  }
}

/**
 * Determine today's date.
 */
async function determineTodaysDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  todaysDate = `${year}-${month}-${day}`;
}

/**
 * Search tasks by creation date. To find the upcoming date of the next task.
 */
async function searchUpcomingDate() {
  let date = todaysDate;
  for (let i = 0; i < user.tasks.length; i++) {
    date = user.tasks[i].dueDate;
    if (user.tasks[0].dueDate < date) {
      actuelldate = actuelldate;
    } else {
      upcomingDate = date;
    }
  }
  howManyUrgent(upcomingDate);
  FinalUpcomingDate(upcomingDate);
}

/**
 * Just urgent counter.
 */
function howManyUrgent(upcomingDate) {
  for (let i = 0; i < user.tasks.length; i++) {
    if (upcomingDate == user.tasks[i].dueDate) urgentCounter++;
  }
}

/**
 * Find the month for the upcoming urgent deadline.
 */
function FinalUpcomingDate(upcomingDate) {
  const dateComponents = upcomingDate.split("-");
  const formattedDate = formatDateString(upcomingDate);
  finaleDate = formattedDate;
}

/**
 * Helper function to get the month name.
 */
function getMonthName(month) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[month - 1];
}

/**
 * Helper function to format the date string.
 */
function formatDateString(date) {
  const dateComponents = date.split("-");
  const year = parseInt(dateComponents[0]);
  const month = parseInt(dateComponents[1]);
  const day = parseInt(dateComponents[2]);

  const monthName = getMonthName(month);
  return `${monthName} ${day}, ${year}`;
}

/**
 * Render the user's data into the placeholders.
 */
function setSummaryLetter() {
  updateTodoContainer();
  updateDoneContainer();
  updateProgressContainer();
  updateAwaitContainer();
  updateCounterContainer();
  updateUrgentContainer();
  updateUpcomingDateContainer();
  updateGreetingContainer();
}

function updateTodoContainer() {
  todoContainer = document.getElementById(`summeryTodoTodos`);
  todoContainer.innerHTML = todos;
}

function updateDoneContainer() {
  doneContainer = document.getElementById(`summeryDoneTodos`);
  doneContainer.innerHTML = dones;
}

function updateProgressContainer() {
  progressContainer = document.getElementById(`summeryProcessTasks`);
  progressContainer.innerHTML = progresses;
}

function updateAwaitContainer() {
  awaitContainer = document.getElementById(`summeryAwaitingTask`);
  awaitContainer.innerHTML = awaits;
}

function updateCounterContainer() {
  tasksInBoard = user.tasks.length;
  counterContainer = document.getElementById(`dataTodos`);
  counterContainer.innerHTML = tasksInBoard;
}

function updateUrgentContainer() {
  urgentContainer = document.getElementById(`summeryUpcomingTasks`);
  urgentContainer.innerHTML = urgentCounter;
}

function updateUpcomingDateContainer() {
  upcomingDateContainer = document.getElementById(`summeryUrgentDate`);
  upcomingDateContainer.innerHTML = finaleDate;
}

function updateGreetingContainer() {
  greetingContainer = document.getElementById(`greetingsContainer`);
  greetingTwoContainer = document.getElementById(`greetingUserSummaryGreet`);
  greetingContainer.innerHTM = greetigText;
  greetingTwoContainer.innerHTM = greetigText;

  greetingNameContainer = document.getElementById(`greetingName`);
  greetingNametwoContainer = document.getElementById(
    `greetingUserSummaryNameId`
  );
  greetingNametwoContainer.innerHTML = user.name;
  greetingNameContainer.innerHTML = user.name;
}

/**
 * Greet the user depending on the time of day.
 */
function greeting() {
  DateConstructor = new Date();
  timeOfDate = DateConstructor.getHours();
  if (timeOfDate < 12) {
    greetigText = `Good morning`;
  } else if (timeOfDate < 18) {
    greetigText = `Good afternoon`;
  } else if (timeOfDate < 24) {
    greetigText = `Good evening`;
  }
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
