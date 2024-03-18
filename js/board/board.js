let pupUpPriorityName;

async function initBoard() {
  await includeHTML();
  setActiveLink("navBoard");
  await loadCurrentUserAlsoUsersAsObject();
  createUserSignatureIcon();
  loadTasks();
}

/**
 *  Render tasks with status to-do
 */
function loadTasks() {
  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "to-do") {
      fillTodo(i);
    }
  }
  loadProgressTasks();
}

/**
 *
 * if i status to-do render the informations
 *
 * @param {string} i - is the number of the task
 */
function fillTodo(i) {
  document.getElementById(`TodoMainContainer`).innerHTML += HtmlReturn(i);
  fillValue(i);
  whatsCategory(i);
  whatsSignatures(i);
  updateProgressBar(i);
}

/**
 * Render tasks with status progress
 */

function loadProgressTasks() {
  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "progress") {
      fillProgress(i);
    }
  }
  loadAwaitTasks();
}

/**
 *
 * if i status progress render the informations
 *
 * @param {string} i
 */
function fillProgress(i) {
  document.getElementById(`progressMainContainer`).innerHTML += HtmlReturn(i);
  fillValue(i);
  whatsCategory(i);
  whatsSignatures(i);
  updateProgressBar(i);
}

/**
 * Render tasks with status await
 */
function loadAwaitTasks() {
  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "await") {
      fillAwait(i);
    }
  }
  loadDoneTasks();
}

/**
 *
 * if i status progress render the informations
 *
 * @param {*} i - is the number of the task
 */
function fillAwait(i) {
  document.getElementById(`awaitMainContainer`).innerHTML += awaitHtmlReturn(i);
  fillValue(i);
  whatsCategory(i);
  whatsSignatures(i);
  updateProgressBar(i);
}

/**
 * Render tasks with status done
 */
function loadDoneTasks() {
  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "done") {
      fillDone(i);
    }
  }
  checkNofilledTasks();
}

/**
 *
 * if i status done render the informations
 *
 * @param {*} i - is the number of the task
 */
function fillDone(i) {
  document.getElementById(`doneMainContainer`).innerHTML += HtmlReturn(i);
  fillValue(i);
  whatsCategory(i);
  whatsSignatures(i);
  updateProgressBar(i);
}

/**
 * fill values with array informations
 *
 * @param {*} i - is the number of the task
 */
function fillValue(i) {
  document.getElementById(`TaskCategory${i}`).textContent = user.tasks[i].category;
  document.getElementById(`titleId${i}`).textContent = user.tasks[i].title;
  document.getElementById(`descriptionID${i}`).textContent = user.tasks[i].description;
  document.getElementById(`PrioImageContainer${i}`).src = `../assets/img/board/board_${user.tasks[
    i
  ].prio.toLowerCase()}.svg`;
  document.getElementById(`counterOfTasks${i}`).innerHTML = `${user.tasks[i].subtasks.length}`;
  pupUpPriorityName = user.tasks[i].prio;
}

/**
 *
 * change the backgroundcolor for the right category
 *
 * @param {*} i - is the number of the task
 */

function whatsCategory(i) {
  if (user.tasks[i].category === "User Story") {
    document.getElementById(`TaskCategory${i}`).style.backgroundColor = "#0038FF";
  } else if (user.tasks[i].category === "Technical Task") {
    document.getElementById(`TaskCategory${i}`).style.backgroundColor = "#1FD7C1";
  }
}

/**
 *
 * render icons and render the signatures
 *
 * @param {*} i - is the number of the task
 */
function whatsSignatures(i) {
  iconBarContainer = document.getElementById(`IconBar${i}`);
  for (let a = 0; a < user.tasks[i].assignedTo.length; a++) {
    let signature = "";
    if (user.tasks[i] && user.tasks[i].assignedTo[a] && user.tasks[i].assignedTo[a].name) {
      let words = user.tasks[i].assignedTo[a].name.toUpperCase().split(" ");
      for (let j = 0; j < words.length; j++) {
        signature += words[j].charAt(0);
      }
      iconBarContainer.innerHTML += iconReturn(signature);
    }
  }
}

/**
 *
 * render the finished subtasks in a bar
 *
 * @param {*} i - is the number of the task
 */
function updateProgressBar(i) {
  let counter = 0;
  let percent = 0;

  if (user.tasks[i].subtasks.length === 0) {
    document.getElementById("progressMainContainerId").style.display = "none";
  } else {
    document.getElementById("progressMainContainerId").style.display = "flex";
    for (let p = 0; p < user.tasks[i].subtasks.length; p++) {
      if (user.tasks[i].subtasks[p].done === true) {
        counter++;
      }
    }
    percent = (counter / user.tasks[i].subtasks.length) * 100;
    if (percent >= 0) {
      document.getElementById(`finishedTasks${i}`).innerHTML = counter;
    }
    if (percent >= 0) {
      document.getElementById(`progressBar${i}`).style.width = percent + "%";
    }
  }
}

/**
 * when no task in the container X is fill a div with text no tasks
 */
function checkNofilledTasks() {
  if (document.getElementById("TodoMainContainer").innerHTML.trim() === "") {
    document.getElementById("TodoMainContainer").innerHTML = noTasksReturn("to-do");
  }
  if (document.getElementById("progressMainContainer").innerHTML.trim() === "") {
    document.getElementById("progressMainContainer").innerHTML = noTasksReturn("in progress");
  }
  if (document.getElementById("awaitMainContainer").innerHTML.trim() === "") {
    document.getElementById("awaitMainContainer").innerHTML = noTasksReturn("awaited");
  }
  if (document.getElementById("doneMainContainer").innerHTML.trim() === "") {
    document.getElementById("doneMainContainer").innerHTML = noTasksReturn("finished");
  }
}

/**
 *
 * open the task when double click the mouse
 *
 * @param {*} i - is the number of the task
 */
function openTask(i) {
  if (!switchTaskTriggered) {
    document.body.style.overflow = "hidden";
    mainContentContainer = document.getElementById(`mainContent`);
    mainContentContainer.innerHTML += openTaskReturn(i);
    renderTaskCategory(i);
    renderTaskValues(i);
    renderTaskAssigneds(i);
    renderTaskSubtasks(i);
  } else {
    switchTaskTriggered = false;
  }
}

/**
 *
 * render the category with the right background color in the task
 *
 * @param {*} i - is the number of the task
 */
function renderTaskCategory(i) {
  let popUpCategory = document.getElementById(`popUpTaskCategory`);
  popUpCategory.innerHTML = user.tasks[i].category;
  if (popUpCategory.textContent === "User Story") {
    popUpCategory.style.backgroundColor = "#0038FF";
  } else if (popUpCategory.textContent === "Technical Task") {
    popUpCategory.style.backgroundColor = "#1FD7C1";
  }
}

/**
 *
 * fill the container with values of title and more
 *
 * @param {*} i - is the number of the task
 */
function renderTaskValues(i) {
  document.getElementById(`popUpTitleId`).innerHTML = user.tasks[i].title;
  document.getElementById(`popUpDescriptionID`).innerHTML = user.tasks[i].description;
  document.getElementById(`popUpDueDate`).innerHTML = user.tasks[i].dueDate
    .split("-")
    .reverse()
    .join("/");
  if (user.tasks[i].prio === "Low") {
    document.getElementById(`popUpPrioImage`).src = "../assets/img/board/board_low.svg";
  } else if (user.tasks[i].prio === "Medium") {
    document.getElementById(`popUpPrioImage`).src = "../assets/img/board/board_medium.svg";
  } else if (user.tasks[i].prio === "Urgent") {
    document.getElementById(`popUpPrioImage`).src = "../assets/img/board/board_urgent.svg";
  }
  popUpPriority.innerHTML = user.tasks[i].prio;
}

/**
 *
 * render the assigned contacts
 *
 * @param {*} i - is the number of the task
 */
function renderTaskAssigneds(i) {
  let MainContainer = document.getElementById(`popUpAssignedToMainContainer`);
  for (let n = 0; n < user.tasks[i].assignedTo.length; n++) {
    MainContainer.innerHTML += assigned(n);
    document.getElementById(`popUpAssignedTo${n}`).innerHTML = user.tasks[i].assignedTo[n].name;
    let signature = "";
    let words = user.tasks[i].assignedTo[n].name.toUpperCase().split(" ");
    for (let j = 0; j < words.length; j++) {
      signature += words[j].charAt(0);
      document.getElementById(`pupUpIcon${n}`).innerHTML = signature;
    }
  }
}

/**
 *
 * render the subtask from the opened task
 *
 * @param {*} i - is the number of the task
 */
function renderTaskSubtasks(i) {
  if (user.tasks[i].subtasks.length === 0) {
    document.getElementById(`boardTaskSubtaskMainContainer`).style.display = "none";
  } else {
    document.getElementById(`boardTaskSubtaskMainContainer`).style.display = "flex";
    let popUpSubtasksContainer = document.getElementById(`popUpSubtasksContainer`);
    for (let s = 0; s < user.tasks[i].subtasks.length; s++) {
      popUpSubtasksContainer.innerHTML += popUpSubtaskReturn(i, s);
      let subtask = document.getElementById(`pupUpSubtaskText${s}`);
      subtask.innerHTML = user.tasks[i].subtasks[s].name;
      if (user.tasks[i].subtasks[s].done === false) {
        image = document.getElementById(`popUpSubtaskImage${s}`).src =
          "../assets/img/board/board_box.svg";
      } else if (user.tasks[i].subtasks[s].done === true) {
        image = document.getElementById(`popUpSubtaskImage${s}`).src =
          "../assets/img/board/board_box_check.svg";
      }
    }
  }
}

/**
 *
 * close the opened task
 *
 * @param {*} i - is the number of the task
 */
async function closeOpenTask(i) {
  
  document.body.style.overflow = "auto";
  let task = document.getElementById(`popUpMainContainer`);
  let blurr = document.getElementById(`blurrContainer`);
  blurr.remove();
  task.remove();
  document.getElementById(`TodoMainContainer`).innerHTML = "";
  loadTasks();
}

/**
 *
 * close the opened task
 *
 * @param {*} i - is the number of the task
 */
function removeOpenedTask(i) {
  let task = document.getElementById(`popUpMainContainer`);
  let blurr = document.getElementById(`blurrContainer`);
  blurr.remove();
  task.remove();
  document.getElementById(`TodoMainContainer`).innerHTML = "";
  loadTasks();
}

/**
 *
 * close the editTask
 *
 * @param {*} i - is the number of the task
 */
function closeEditTask(i) {
  document.getElementById(`popUpMainContainer`).remove();
  document.getElementById(`blurrContainer`).remove();
  openTask(i);
}

/**
 *
 * clear the containers
 *
 * @param {*} i - is the number of the task
 */
async function deleteTaskBoard(i) {
  user.tasks.splice(i, 1);
  document.getElementById("TodoMainContainer").innerHTML = "";
  document.getElementById("progressMainContainer").innerHTML = "";
  document.getElementById("awaitMainContainer").innerHTML = "";
  document.getElementById("doneMainContainer").innerHTML = "";
  await closeOpenTask(i);
  savedUsersInBackend();
  loadTasks();
}

/**
 *
 * change from inputfield to div field after change the text
 *
 * @param {*} i - is the number of the task
 * @param {*} s - is the number of the subtask
 */
async function subtaskFinish(i, s) {
  let imageId = document.getElementById(`popUpSubtaskImage${s}`);
  if (user.tasks[i].subtasks[s].done === false) {
    imageId.src = "../assets/img/board/board_box_check.svg";
    user.tasks[i].subtasks[s].done = true;
  } else if (user.tasks[i].subtasks[s].done === true) {
    imageId.src = "../assets/img/board/board_box.svg";
    user.tasks[i].subtasks[s].done = false;
  }
  savedUsersInBackend();
  updateProgressBar(i);
}

/**
 *
 * open the edit fields when change the task
 *
 * @param {*} i - is the number of the task
 */
async function editBoardTask(i) {
  document.getElementById(`popUpMainContainer`).innerHTML = "";

  if (window.innerWidth > 1200) {
    document.getElementById(`popUpMainContainer`).innerHTML = editBoardDesktopTaskReturn(i);
    document.getElementById(`popUpMainContainer`).classList.remove("openwindow");
  } else {
    document.getElementById(`popUpMainContainer`).innerHTML = editBoardMobileTaskReturn(i);
  }

  contactList.style.display = "none";
  contactListIcons.style.display = "block";
  document.getElementById(`titelInputContainer`).value = user.tasks[i].title;
  document.getElementById(`descriptionInput`).value = user.tasks[i].description;
  document.getElementById(`dueDateInputContainer`).value = user.tasks[i].dueDate;
  for (let s = 0; s < user.tasks[i].subtasks.length; s++) {
    document.getElementById(`subTasksContainer`).innerHTML += editBoardTaskReturn(i, s);
  }
  whatsPrio(i, user.tasks[i].prio);
  selectContacts(i);
  savedUsersInBackend();
  loadContacts(i);
}

/**
 *
 * Change the subtask from fiv to a inputfield
 *
 * @param {*} i - is the number of the task
 * @param {*} s - is the number of the subtask
 */
function editBoardSubtask(i, s) {
  let task = document.getElementById("subtask" + s);
  task.innerHTML = "";
  task.innerHTML = editBoardSubtaskReturn(user.tasks[i].subtasks[s].name, s, i);
}

/**
 *
 * change from inputfield to div field after change the text
 *
 * @param {*} i - is the number of the task
 * @param {*} s - is the number of the subtask
 */
async function editBoardSubtaskDone(i, s) {
  let content = document.getElementById("editBoardSubtask" + s).value;
  if (content.length > 0) {
    user.tasks[i].subtasks[s].name = content;
    savedUsersInBackend();
    renderBoardSubtasks(i);
  } else {
    deleteSubtask(s);
  }
  savedUsersInBackend();
}

/**
 *
 * render the subtasks
 *
 * @param {*} i - is the number of the task
 */
function renderBoardSubtasks(i) {
  let subtasksList = document.getElementById("subTasksContainer");
  subtasksList.innerHTML = "";
  for (let l = 0; l < user.tasks[i].subtasks.length; l++) {
    subtasksList.innerHTML += renderBaordSubtasksReturn(i, l);
  }
}

/**
 *
 * create a new subtaks in the tasks and safe it in the backend
 *
 * @param {*} i - is the number of the task
 */
async function addBoardSubtask(i) {
  console.log(i);
  let subtasksInput = document.getElementById("subTaskInputfieldText");
  let newSubtask = {
    name: subtasksInput.value,
    done: false,
  };
  user.tasks[i].subtasks.push(newSubtask);
  savedUsersInBackend();
  clearSubtaskInputfield();
  renderBoardSubtasks(i);
}

/**
 *
 * change the subtask menubar when edit the subtask
 *
 * @param {*} i - is the number of the task
 */
function changeBoardMenu(i) {
  container = document.getElementById(`subTaskInputfieldMenu`);
  container.innerHTML = changeBoardMenuReturn(i);
  let border = document.getElementById(`subTaskInputcontainer`);
  border.classList.add("bordercolor");
}

/**
 *
 * delete the subtask
 *
 * @param {*} i - is the number of the task
 * @param {*} s - is the number of the subtasks
 */
async function deleteBoardSubtask(i, s) {
  if (user.tasks[i] && user.tasks[i].subtasks) {
    if (user.tasks[i].subtasks[s]) {
      user.tasks[i].subtasks.splice(s, 1);
      renderBoardSubtasks(i);
      savedUsersInBackend();
      renderBoardSubtasks(i);
    }
  }
}

/**
 * change the backgroundcolor of the priority
 */
function whatsPrio(i, pupUpPriorityName) {
  removeWhiteImg();
  removePrio();
  if (pupUpPriorityName === "Low") {
    changePrioColor(i, pupUpPriorityName);
  } else if (pupUpPriorityName === "Medium") {
    changePrioColor(i, pupUpPriorityName);
  } else if (pupUpPriorityName === "Urgent") {
    changePrioColor(i, pupUpPriorityName);
  }
}

/**
 *
 * give the contact that assignedTo an selected true information
 *
 * @param {*} i - is the number of the task
 */
function selectContacts(i) {
  user.contacts.forEach((contact) => {
    contact.selected = false;
  });
  let assignedTo = user.tasks[i].assignedTo;
  for (let j = 0; j < assignedTo.length; j++) {
    let assignedToName = assignedTo[j].name;
    let matchingContact = user.contacts.find((contact) => contact.name === assignedToName);
    if (matchingContact) {
      matchingContact.selected = true;
    }
  }
}

/**
 * remove the backgroundcolors of selected priority
 */
function removePrio() {
  document.getElementById("prioLowContainer").classList.remove("prioLow");
  document.getElementById("prioMediumContainer").classList.remove("prioMedium");
  document.getElementById("prioUrgentContainer").classList.remove("prioUrgent");
}

/**
 * remove the image of selected priority
 */
function removeWhiteImg() {
  let imgUrgent = prioUrgentContainer.querySelector("img");
  let imgMedium = prioMediumContainer.querySelector("img");
  let imgLow = prioLowContainer.querySelector("img");
  imgUrgent.src = "../assets/img/add_task/arrow_top_red.svg";
  imgMedium.src = "../assets/img/add_task/line_orange.svg";
  imgLow.src = "../assets/img/add_task/arrow_bottom_green.svg";
}

/**
 *
 * change the backgroundcolor of selected priority
 *
 * @param {*} clickedContainerId - clicked priorityContainer
 */
function changePrioColor(i, pupUpPriorityName) {
  if (pupUpPriorityName === "Low") {
    document.getElementById(`prioLowContainer`).classList.add("prioLow");
    document.querySelector("#prioLowContainer img").src =
      "../assets/img/add_task/arrow_bottom_white.svg";
  } else if (pupUpPriorityName === "Medium") {
    document.getElementById(`prioMediumContainer`).classList.add("prioMedium");
    document.querySelector("#prioMediumContainer img").src =
      "../assets/img/add_task/line_white.svg";
  } else if (pupUpPriorityName === "Urgent") {
    document.getElementById(`prioUrgentContainer`).classList.add("prioUrgent");
    document.querySelector("#prioUrgentContainer img").src =
      "../assets/img/add_task/arrow_top_white.svg";
  }
  user.tasks[i].prio = pupUpPriorityName;
  savedUsersInBackend();
}
