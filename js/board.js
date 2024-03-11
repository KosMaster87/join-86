
let pupUpPriorityName;

async function initBoard() {
  await includeHTML();
  setActiveLink("navBoard");
  await loadCurrentUserAlsoUsersAsObject();
  loadTasks();
}

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
      toDoMainContainer.innerHTML += HtmlReturn(i);
      taskCategoryContainer = document.getElementById(`TaskCategory${i}`);
      titleContainer = document.getElementById(`titleId${i}`);
      descriptionContainer = document.getElementById(`descriptionID${i}`);
      progressContainer = document.getElementById(`ProgressBar${i}`);
      iconBarContainer = document.getElementById(`IconBar${i}`);
      prioContainer = document.getElementById(`PrioImageContainer${i}`);
      howManyTasks = document.getElementById(`counterOfTasks${i}`);
      finishedTasks = document.getElementById(`finishedTasks${i}`);

      prioContainer.src = "../assets/img/board/board_low.svg";
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
  loadProgressTasks();
}

function loadProgressTasks() {
  toDoMainContainer = document.getElementById(`progressMainContainer`);

  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "progress") {
      toDoMainContainer.innerHTML += HtmlReturn(i);
      taskCategoryContainer = document.getElementById(`TaskCategory${i}`);
      titleContainer = document.getElementById(`titleId${i}`);
      descriptionContainer = document.getElementById(`descriptionID${i}`);
      progressContainer = document.getElementById(`ProgressBar${i}`);
      iconBarContainer = document.getElementById(`IconBar${i}`);
      prioContainer = document.getElementById(`PrioImageContainer${i}`);
      howManyTasks = document.getElementById(`counterOfTasks${i}`);
      finishedTasks = document.getElementById(`finishedTasks${i}`);

      if (user.tasks[i].prio === 'Low') {
        prioContainer.src = "../assets/img/board/board_low.svg";
    } else if (user.tasks[i].prio === 'Medium') {
        prioContainer.src = "../assets/img/board/board_medium.svg";
    } else if (user.tasks[i].prio === 'Urgent') {
        prioContainer.src = "../assets/img/board/board_urgent.svg";
    }

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
  loadAwaitTasks();
}

function loadAwaitTasks() {
  toDoMainContainer = document.getElementById(`awaitMainContainer`);

  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "await") {
      toDoMainContainer.innerHTML += awaitHtmlReturn(i);
      taskCategoryContainer = document.getElementById(`TaskCategory${i}`);
      titleContainer = document.getElementById(`titleId${i}`);
      descriptionContainer = document.getElementById(`descriptionID${i}`);
      progressContainer = document.getElementById(`ProgressBar${i}`);
      iconBarContainer = document.getElementById(`IconBar${i}`);
      prioContainer = document.getElementById(`PrioImageContainer${i}`);
      finishedTasks = document.getElementById(`finishedTasks${i}`);

      prioContainer.src = "../assets/img/board/board_low.svg";
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
  loadDoneTasks();
}

function loadDoneTasks() {
  toDoMainContainer = document.getElementById(`doneMainContainer`);

  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status === "done") {
      toDoMainContainer.innerHTML += HtmlReturn(i);
      taskCategoryContainer = document.getElementById(`TaskCategory${i}`);
      titleContainer = document.getElementById(`titleId${i}`);
      descriptionContainer = document.getElementById(`descriptionID${i}`);
      progressContainer = document.getElementById(`ProgressBar${i}`);
      iconBarContainer = document.getElementById(`IconBar${i}`);
      prioContainer = document.getElementById(`PrioImageContainer${i}`);
      howManyTasks = document.getElementById(`counterOfTasks${i}`);
      finishedTasks = document.getElementById(`finishedTasks${i}`);

      prioContainer.src = "../assets/img/board/board_low.svg";
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
    updateProgressBar(i);
  }
  noInner();
}

function noInner() {
  let TodoMainContainer = document.getElementById("TodoMainContainer");
  let progressMainContainer = document.getElementById("progressMainContainer");
  let awaitMainContainer = document.getElementById("awaitMainContainer");
  let doneMainContainer = document.getElementById("doneMainContainer");

  if (TodoMainContainer.innerHTML.trim() === "") {
    TodoMainContainer.innerHTML =
      '<div class="noTasksInThisSelection font16400">No tasks To do</div>';
  }
  if (progressMainContainer.innerHTML.trim() === "") {
    progressMainContainer.innerHTML =
      '<div class="noTasksInThisSelection font16400">No tasks in progress</div>';
  }
  if (awaitMainContainer.innerHTML.trim() === "") {
    awaitMainContainer.innerHTML =
      '<div class="noTasksInThisSelection font16400">No tasks await</div>';
  }
  if (doneMainContainer.innerHTML.trim() === "") {
    doneMainContainer.innerHTML =
      '<div class="noTasksInThisSelection font16400">No tasks done</div>';
  }
}

let currentDraggedElement;

function startDragging(id) {
  currentDraggedElement = id;
}

function openTask(i) {
  document.body.style.overflow = "hidden";
  // render erstelle die div
  mainContentContainer = document.getElementById(`mainContent`);
  mainContentContainer.innerHTML += openTaskReturn(i);
  // render die category
  let category = document.getElementById(`TaskCategory${i}`);
  let popUpCategory = document.getElementById(`popUpTaskCategory`);
  popUpCategory.innerHTML = category.textContent;
  if (category.textContent === "User Story") {
    popUpCategory.style.backgroundColor = "#0038FF";
  } else if (category.textContent === "Technical Task") {
    popUpCategory.style.backgroundColor = "#1FD7C1";
  }
  // render render den title
  let title = document.getElementById(`titleId${i}`);
  let popUpTitle = document.getElementById(`popUpTitleId`);
  popUpTitle.innerHTML = title.textContent;

  // render die description
  let description = document.getElementById(`titleId${i}`);
  let popUpDescription = document.getElementById(`popUpDescriptionID`);
  popUpDescription.innerHTML = description.textContent;

  // render das Due date
  let popUpDueDate = document.getElementById(`popUpDueDate`);
  popUpDueDate.innerHTML = user.tasks[i].dueDate.split("-").reverse().join("/");

  //render die Prio ins popup
  extractFilename(i);
  let popUpPriority = document.getElementById(`popUpPriority`);
  popUpPriority.innerHTML = pupUpPriorityName;

  // render die assignedTo user name und icon
  let MainContainer = document.getElementById(`popUpAssignedToMainContainer`);
  for (let n = 0; n < user.tasks[i].assignedTo.length; n++) {
    //div
    MainContainer.innerHTML += assigned(n);
    //name
    namefield = document.getElementById(`popUpAssignedTo${n}`);
    namefield.innerHTML = user.tasks[i].assignedTo[n];
    //icon // signature
    icon = document.getElementById(`pupUpIcon${n}`);
    let signature = "";
    let words = user.tasks[i].assignedTo[n].toUpperCase().split(" ");
    for (let j = 0; j < words.length; j++) {
      signature += words[j].charAt(0);
      icon.innerHTML = signature;
    }
  }

  //render die subtasks
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

function extractFilename(i) {
  let srcElement = document.getElementById(`PrioImageContainer${i}`).src;
  let parts = srcElement.split("/");
  let filenameWithExtension = parts[parts.length - 1];
  let filename = filenameWithExtension.split(".")[0];
  pupUpPriorityName = filename.split("_");
  pupUpPriorityName = pupUpPriorityName[1].charAt(0).toUpperCase() + pupUpPriorityName[1].slice(1);
  popUpImage();
}

function popUpImage() {
  let imageContainer = document.getElementById(`popUpPrioImage`);
  if (pupUpPriorityName === "Low") {
    imageContainer.src = "../assets/img/board/board_low.svg";
  } else if (pupUpPriorityName === "Medium") {
    imageContainer.src = "../assets/img/board/board_medium.svg";
  } else if (pupUpPriorityName === "Urgent") {
    imageContainer.src = "../assets/img/board/board_urgent.svg";
  }
}

async function closeOpenTask(i) {
  document.body.style.overflow = "auto";
  let task = document.getElementById(`popUpMainContainer`);
  task.remove();
}

async function deleteTaskBoard(i) {
  user.tasks.splice(i, 1);
  document.getElementById("TodoMainContainer").innerHTML = "";
  document.getElementById("progressMainContainer").innerHTML = "";
  document.getElementById("awaitMainContainer").innerHTML = "";
  document.getElementById("doneMainContainer").innerHTML = "";
  closeOpenTask(i);
  await setItem("users", users);
  loadTasks();
}

function subtaskdone(i) {
  user.tasks[i].subtask[s];
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
  await setItem("users", users);
  updateProgressBar(i);
}

function updateProgressBar(i) {
  let howmanyTasks = document.getElementById(`counterOfTasks${i}`);
  let progressbar = document.getElementById(`progressBar${i}`);
  let counter = 0;
  let percent = 0;
  for (let p = 0; p < user.tasks[i].subtasks.length; p++) {
    if (user.tasks[i].subtasks[p].done === true) {
      counter++;
    }
  }
  if (user.tasks[i].subtasks.length > 0) {
    percent = (counter / user.tasks[i].subtasks.length) * 100;
  }
  if (counter > 0) {
    document.getElementById(`finishedTasks${i}`).innerHTML = counter;
  }
  if (percent > 0) {
    progressbar.style.width = percent + "%";
  }
}
// -- EDIT Task in boardMenu --  //

function editBoardTask(i){
  mainContainer= document.getElementById(`popUpMainContainer`);
  mainContainer.innerHTML="";
  mainContainer.innerHTML= editBoardMobileTaskReturn(i);
  //fill the values 
  document.getElementById(`titelInputContainer`).value = user.tasks[i].title;
  document.getElementById(`descriptionInput`).value = user.tasks[i].description;
  document.getElementById(`dueDateInputContainer`).value = user.tasks[i].dueDate;
  for (let s = 0; s < user.tasks[i].subtasks.length; s++) {
    document.getElementById(`subTasksContainer`).innerHTML +=
    `<div id="subtask${s}" class="subtaskClass" ondblclick="editSubtask(${s})">
    <div class="addedSubtask">
      <div class="subTastText">
        <p>&bull;</p>
        <P>${user.tasks[i].subtasks[s].name}</P>
      </div>
      <div class="subMenu">
        <img class="arrow" src="../assets/img/add_task/task_edit.svg" onclick="editBoardSubtask(${i},${s})" alt="edit_icon">
        <img src="../assets/img/add_task/task_line.svg" alt="subtasks_seperator">
        <img class="arrow" src="../assets/img/add_task/task_cross.svg" onclick="deleteSubtask(${i})" alt="delete_icon">
      </div>
    </div>
  </div>`;
  //marks the currentPrio in start of edit
  }
  if (pupUpPriorityName === 'Low') {
    whatsPrio(prioLowContainer);
} else if (pupUpPriorityName === 'Medium') {
  whatsPrio(prioMediumContainer);
} else if (pupUpPriorityName === 'Urgent') {
  whatsPrio(prioUrgentContainer);
}
}

function editBoardSubtask(i, s) {
  let task = document.getElementById("subtask" + s);
  task.innerHTML = "";
  task.innerHTML = editBoardSubtaskReturn(user.tasks[i].subtasks[s].name, s,i);
}

function editBoardSubtaskReturn(subtasks, s,i) {
  return `<div class="subtaskEdit" id="subtaskEdit">
    <input type="text" id="editBoardSubtask${s}" value="${subtasks}">
    <div class="subtastEditMenu">
      <img class="arrow" src="../assets/img/add_task/task_bin.svg" onclick="deleteSubtask(${s})" alt="delete_icon">
      <img src="../assets/img/add_task/task_line.svg" alt="subtasks_seperator">
      <img class="arrow" src="../assets/img/add_task/task_check.svg" onclick="editBoardSubtaskDone(${i},${s})" alt="done_icon">
    </div>
  </div>`;
}

async function editBoardSubtaskDone(i, s) {
  let content = document.getElementById("editBoardSubtask" + s).value;
  if (content.length > 0) {
    user.tasks[i].subtasks[s].name = content;
    await setItem("users", users);
    renderBoardSubtasks(i);
  } else {
    deleteSubtask(s);
  }
}

function renderBoardSubtasks(i) {
  let subtasksList = document.getElementById("subTasksContainer");
  subtasksList.innerHTML = "";
  for (let l = 0; l < user.tasks[i].subtasks.length; l++) {
    subtasksList.innerHTML += renderBaordSubtasksReturn(i,l);
  }
}
function renderBaordSubtasksReturn(i,l) {
  return `<div id="subtask${l}" class="subtaskClass" ondblclick="editSubtask(${l})">
    <div class="addedSubtask">
      <div class="subTastText">
        <p>&bull;</p>
        <P>${user.tasks[i].subtasks[l].name}</P>
      </div>
      <div class="subMenu">
        <img class="arrow" src="../assets/img/add_task/task_edit.svg" onclick="editBoardSubtask(${i},${l})" alt="edit_icon">
        <img src="../assets/img/add_task/task_line.svg" alt="subtasks_seperator">
        <img class="arrow" src="../assets/img/add_task/task_cross.svg" onclick="deleteSubtask(${l})" alt="delete_icon">
      </div>
    </div>
  </div>`;
}


