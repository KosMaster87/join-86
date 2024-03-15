let pupUpPriorityName;

async function initBoard() {
  await includeHTML();
  setActiveLink("navBoard");
  await loadCurrentUserAlsoUsersAsObject();
  createUserSignatureIcon();
  loadTasks();
}

function loadTasks() {
  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "to-do") {
      document.getElementById(`TodoMainContainer`).innerHTML += HtmlReturn(i);
      fillValue(i);
      whatsCategory(i);
      whatsSignatures(i);
    }
  }
  loadProgressTasks();
}

function loadProgressTasks() {
  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "progress") {
      document.getElementById(`progressMainContainer`).innerHTML += HtmlReturn(i);
      fillValue(i);
      whatsCategory(i);
      whatsSignatures(i);
    }
  }
  loadAwaitTasks();
}

function loadAwaitTasks() {
  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "await") {
      document.getElementById(`awaitMainContainer`).innerHTML += awaitHtmlReturn(i);
      fillValue(i);
      whatsCategory(i);
      whatsSignatures(i);
    }
  }
  loadDoneTasks();
}

function loadDoneTasks() {
  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "done") {
      document.getElementById(`doneMainContainer`).innerHTML += HtmlReturn(i);
      fillValue(i);
      whatsCategory(i);
      whatsSignatures(i);
    }
    updateProgressBar(i);
  }
  checkNofilledTasks();
}

function fillValue(i) {
  document.getElementById(`TaskCategory${i}`).textContent = user.tasks[i].category;
  document.getElementById(`titleId${i}`).textContent = user.tasks[i].title;
  document.getElementById(`descriptionID${i}`).textContent = user.tasks[i].description;
  document.getElementById(`PrioImageContainer${i}`).src = `../assets/img/board/board_${user.tasks[i].prio.toLowerCase()}.svg`;
  document.getElementById(`counterOfTasks${i}`).innerHTML = `${user.tasks[i].subtasks.length}`;
  pupUpPriorityName = user.tasks[i].prio;
}

function whatsCategory(i) {
  if (user.tasks[i].category === "User Story") {
    document.getElementById(`TaskCategory${i}`).style.backgroundColor = "#0038FF";
  } else if (user.tasks[i].category === "Technical Task") {
    document.getElementById(`TaskCategory${i}`).style.backgroundColor = "#1FD7C1";
  }
}

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

function updateProgressBar(i) {
  let counter = 0;
  let percent = 0;
  for (let p = 0; p < user.tasks[i].subtasks.length; p++) {
    if (user.tasks[i].subtasks[p].done === true) {
      counter++;
    }
  }
  percent = (counter / user.tasks[i].subtasks.length) * 100;
  if (counter >= 0) {
    document.getElementById(`finishedTasks${i}`).innerHTML = counter;
  }
  if (percent > 0) {
    document.getElementById(`progressBar${i}`).style.width = percent + "%";
  }
}

function checkNofilledTasks() {
  if (document.getElementById("TodoMainContainer").innerHTML.trim() === "") {
    document.getElementById("TodoMainContainer").innerHTML = noTasksReturn();
  }
  if (document.getElementById("progressMainContainer").innerHTML.trim() === "") {
    document.getElementById("progressMainContainer").innerHTML = noTasksReturn();
  }
  if (document.getElementById("awaitMainContainer").innerHTML.trim() === "") {
    document.getElementById("awaitMainContainer").innerHTML = noTasksReturn();
  }
  if (document.getElementById("doneMainContainer").innerHTML.trim() === "") {
    document.getElementById("doneMainContainer").innerHTML = noTasksReturn();
  }
}

function openTask(i) {
  document.body.style.overflow = "hidden";
  mainContentContainer = document.getElementById(`mainContent`);
  mainContentContainer.innerHTML += openTaskReturn(i);
  renderTaskCategory(i);
  renderTaskValues(i);
  renderTaskAssigneds(i);
  renderTaskSubtasks(i);
}

function renderTaskCategory(i) {
  let popUpCategory = document.getElementById(`popUpTaskCategory`);
  popUpCategory.innerHTML = user.tasks[i].category;
  if (popUpCategory.textContent === "User Story") {
    popUpCategory.style.backgroundColor = "#0038FF";
  } else if (popUpCategory.textContent === "Technical Task") {
    popUpCategory.style.backgroundColor = "#1FD7C1";
  }
}

function renderTaskValues(i) {
  document.getElementById(`popUpTitleId`).innerHTML = user.tasks[i].title;
  document.getElementById(`popUpDescriptionID`).innerHTML = user.tasks[i].description;
  document.getElementById(`popUpDueDate`).innerHTML = user.tasks[i].dueDate.split("-").reverse().join("/");
  if (user.tasks[i].prio === "Low") {
    document.getElementById(`popUpPrioImage`).src = "../assets/img/board/board_low.svg";
  } else if (user.tasks[i].prio === "Medium") {
    document.getElementById(`popUpPrioImage`).src = "../assets/img/board/board_medium.svg";
  } else if (user.tasks[i].prio === "Urgent") {
    document.getElementById(`popUpPrioImage`).src = "../assets/img/board/board_urgent.svg";
  }
  popUpPriority.innerHTML = user.tasks[i].prio;
}

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

function renderTaskSubtasks(i) {
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

async function closeOpenTask(i) {
  document.body.style.overflow = "auto";
  user.tasks[i].assignedTo = [];
  for (let c = 0; c < user.contacts.length; c++) {
    if (user.contacts[c].selected) {
      user.tasks[i].assignedTo.push({
        name: user.contacts[c].name,
        userColor: user.contacts[c].userColor,
      });
    }
  }
  savedUsersInBackend();
}

function removeOpenedTask(i) {
  let task = document.getElementById(`popUpMainContainer`);
  let blurr = document.getElementById(`blurrContainer`);
  blurr.remove();
  task.remove();
  document.getElementById(`TodoMainContainer`).innerHTML = "";
  loadTasks();
}

function closeEditTask(i) {
  document.getElementById(`popUpMainContainer`).remove();
  document.getElementById(`blurrContainer`).remove();
  openTask(i);
}

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

async function editBoardTask(i) {
  document.getElementById(`popUpMainContainer`).innerHTML = "";
  document.getElementById(`popUpMainContainer`).innerHTML = editBoardMobileTaskReturn(i);
  contactList.style.display = "none";
  contactListIcons.style.display = "block";
  document.getElementById(`titelInputContainer`).value = user.tasks[i].title;
  document.getElementById(`descriptionInput`).value = user.tasks[i].description;
  document.getElementById(`dueDateInputContainer`).value = user.tasks[i].dueDate;
  for (let s = 0; s < user.tasks[i].subtasks.length; s++) {
    document.getElementById(`subTasksContainer`).innerHTML += editBoardTaskReturn(i, s);
  }
  whatsPrio();
  selectContacts(i);
  savedUsersInBackend();
  loadContacts(i);
}

function editBoardSubtask(i, s) {
  let task = document.getElementById("subtask" + s);
  task.innerHTML = "";
  task.innerHTML = editBoardSubtaskReturn(user.tasks[i].subtasks[s].name, s, i);
}

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

function renderBoardSubtasks(i) {
  let subtasksList = document.getElementById("subTasksContainer");
  subtasksList.innerHTML = "";
  for (let l = 0; l < user.tasks[i].subtasks.length; l++) {
    subtasksList.innerHTML += renderBaordSubtasksReturn(i, l);
  }
}

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

function changeBoardMenu(i) {
  container = document.getElementById(`subTaskInputfieldMenu`);
  container.innerHTML = changeBoardMenuReturn(i);
  let border = document.getElementById(`subTaskInputcontainer`);
  border.classList.add("bordercolor");
}

function changeBoardMenuReturn(i) {
  return `
    <img class="arrow" src="../assets/img/add_task/task_cross.svg" onclick="clearSubtaskInputfield()"/>
    <img src="../assets/img/add_task/task_line.svg"/>
    <img class="arrow" onclick="addBoardSubtask(${i})" src="../assets/img/add_task/task_check.svg"/>`;
}

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

function whatsPrio() {
  removeWhiteImg();
  removePrio();
  if (pupUpPriorityName === "Low") {
    changePrioColor(prioLowContainer);
  } else if (pupUpPriorityName === "Medium") {
    changePrioColor(prioMediumContainer);
  } else if (pupUpPriorityName === "Urgent") {
    changePrioColor(prioUrgentContainer);
  }
}

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

function removePrio() {
  document.getElementById("prioLowContainer").classList.remove("prioLow");
  document.getElementById("prioMediumContainer").classList.remove("prioMedium");
  document.getElementById("prioUrgentContainer").classList.remove("prioUrgent");
}

function removeWhiteImg() {
  let imgUrgent = prioUrgentContainer.querySelector("img");
  let imgMedium = prioMediumContainer.querySelector("img");
  let imgLow = prioLowContainer.querySelector("img");
  imgUrgent.src = "../assets/img/add_task/arrow_top_red.svg";
  imgMedium.src = "../assets/img/add_task/line_orange.svg";
  imgLow.src = "../assets/img/add_task/arrow_bottom_green.svg";
}

function changePrioColor(clickedContainerId) {
  let imgUrgent = document.querySelector("#prioUrgentContainer img");
  let imgMedium = document.querySelector("#prioMediumContainer img");
  let imgLow = document.querySelector("#prioLowContainer img");
  if (clickedContainerId === "prioLowContainer") {
    document.getElementById("prioLowContainer").classList.add("prioLow");
    document.querySelector("#prioLowContainer img").src =
      "../assets/img/add_task/arrow_bottom_white.svg";
  } else if (clickedContainerId === "prioMediumContainer") {
    document.getElementById("prioMediumContainer").classList.add("prioMedium");
    document.querySelector("#prioMediumContainer img").src =
      "../assets/img/add_task/line_white.svg";
  } else if (clickedContainerId === "prioUrgentContainer") {
    document.getElementById("prioUrgentContainer").classList.add("prioUrgent");
    document.querySelector("#prioUrgentContainer img").src =
      "../assets/img/add_task/arrow_top_white.svg";
  }
}

function clearSubtaskInputfield() {
  let input = document.getElementById(`subTaskInputfieldText`);
  input.value = "";
  container = document.getElementById(`subTaskInputfieldMenu`);
  container.innerHTML = `
  <img src="../assets/img/add_task/task_add.svg" />`;
  let border = document.getElementById(`subTaskInputcontainer`);
  border.classList.remove("bordercolor");
}

function setMinDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("dueDateInputContainer").min = today;
}
