let todos = 0;
let dones = 0;
let tasksInBoard = 0;
let progresses = 0;
let awaits = 0;
let heutigesDatum = 0;
let upcomingDate = 0;
let urgentCounter = 0;
let finaleDate;
let greetigText;

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
  await howManyTasks();
}

// --------------------------------------------------------

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
  await setzeHeutigesDatum();
}

async function setzeHeutigesDatum() {
  const heute = new Date();
  const jahr = heute.getFullYear();
  const monat = (heute.getMonth() + 1).toString().padStart(2, "0");
  const tag = heute.getDate().toString().padStart(2, "0");
  heutigesDatum = `${jahr}-${monat}-${tag}`;
  await testeDatum();
  setSummaryLetter();
  greeting();
}

async function testeDatum() {
  let actuelldate = heutigesDatum;
  for (let i = 0; i < user.tasks.length; i++) {
    date = user.tasks[i].dueDate;
    if (user.tasks[0].dueDate < date) {
      actuelldate = actuelldate;
    } else {
      actuelldate = date;
    }
  }
  upcomingDate = actuelldate;
  howManyUrgent();
  FinalUpcomingDate();
}

function howManyUrgent() {
  for (let i = 0; i < user.tasks.length; i++) {
    if (upcomingDate == user.tasks[i].dueDate) urgentCounter++;
  }
}

function FinalUpcomingDate() {
  let dateComponents = upcomingDate.split("-");
  let year = parseInt(dateComponents[0]);
  let month = parseInt(dateComponents[1]);
  let finalMonth;
  if (month === 1) {
    finalMonth = "January";
  } else if (month === 2) {
    finalMonth = "February";
  } else if (month === 3) {
    finalMonth = "March";
  } else if (month === 4) {
    finalMonth = "April";
  } else if (month === 5) {
    finalMonth = "May";
  } else if (month === 6) {
    finalMonth = "June";
  } else if (month === 7) {
    finalMonth = "July";
  } else if (month === 8) {
    finalMonth = "August";
  } else if (month === 9) {
    finalMonth = "September";
  } else if (month === 10) {
    finalMonth = "October";
  } else if (month === 11) {
    finalMonth = "November";
  } else if (month === 12) {
    finalMonth = "December";
  }
  let day = parseInt(dateComponents[2]);
  finaleDate = `${finalMonth} ${day}, ${year}`;
}

function setSummaryLetter() {
  todoContainer = document.getElementById(`summeryTodoTodos`);
  todoContainer.innerHTML = todos;

  doneContainer = document.getElementById(`summeryDoneTodos`);
  doneContainer.innerHTML = dones;

  progressContainer = document.getElementById(`summeryProcessTasks`);
  progressContainer.innerHTML = progresses;

  awaitContainer = document.getElementById(`summeryAwaitingTask`);
  awaitContainer.innerHTML = awaits;

  tasksInBoard = user.tasks.length;
  counterContainer = document.getElementById(`dataTodos`);
  counterContainer.innerHTML = tasksInBoard;

  urgentContainer = document.getElementById(`summeryUpcomingTasks`);
  urgentContainer.innerHTML = urgentCounter;

  upcomingDateContainer = document.getElementById(`summeryUrgentDate`);
  upcomingDateContainer.innerHTML = finaleDate;

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

function greeting() {
  uhr = new Date();
  testzeit = uhr.getHours();
  if (testzeit < 12) {
    greetigText = `Good morning`;
  } else if (testzeit < 18) {
    greetigText = `Good afternoon`;
  } else if (testzeit < 24) {
    greetigText = `Good evening`;
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
