// --------------------------------------------------------
let pupUpPriorityName;
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
  mainContentContainer = document.getElementById(`mainContent`);
  mainContentContainer.innerHTML += openTaskReturn(i);

  let category = document.getElementById(`TaskCategory${i}`);
  let popUpCategory = document.getElementById(`popUpTaskCategory`);
  popUpCategory.innerHTML = category.textContent;
  if (category.textContent === "User Story") {
    popUpCategory.style.backgroundColor = "#0038FF";
  } else if (category.textContent === "Technical Task") {
    popUpCategory.style.backgroundColor = "#1FD7C1";
  }

  let title = document.getElementById(`titleId${i}`);
  let popUpTitle = document.getElementById(`popUpTitleId`);
  popUpTitle.innerHTML = title.textContent;

  let description = document.getElementById(`titleId${i}`);
  let popUpDescription = document.getElementById(`popUpDescriptionID`);
  popUpDescription.innerHTML = description.textContent;

  // das dueDate muss anhand des i nachgeforscht werden oder eine unsichtbare info mitgegeben werden
  let popUpDueDate = document.getElementById(`popUpDueDate`);

  extractFilename(i);
  let popUpPriority = document.getElementById(`popUpPriority`);
  popUpPriority.innerHTML = pupUpPriorityName;

  // infos müssen anhand der icons gefiltert werden

  let MainContainer = document.getElementById(`popUpAssignedToMainContainer`);
  for (let n = 0; n < user.tasks[i].assignedTo.length; n++) {
    MainContainer.innerHTML += assigned(n);
    namefield = document.getElementById(`popUpAssignedTo${n}`)
    namefield.innerHTML = user.tasks[i].assignedTo[n];
    icon = document.getElementById(`pupUpIcon${n}`)
    let signature = "";
    let words = user.tasks[i].assignedTo[n].toUpperCase().split(" ");
    for (let j = 0; j < words.length; j++) {
      signature += words[j].charAt(0);
      icon.innerHTML = signature;
    };
   
  }


  //subtasks müssen anhand der id gefiltert werden
  let popUpSubtasksContainer = document.getElementById(`popUpSubtasksContainer`);
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

function popUpImage(){
  let imageContainer = document.getElementById(`popUpPrioImage`);
  if (pupUpPriorityName === "Low") {
    imageContainer.src = "../assets/img/board/board_low.svg";
  } else if (pupUpPriorityName === "Medium") {
    imageContainer.src = "../assets/img/board/board_medium.svg";
  } else if (pupUpPriorityName === "Urgent") {
    imageContainer.src = "../assets/img/board/board_urgent.svg";
  }
}

function closeOpenTask() {
  let task = document.getElementById(`popUpMainContainer`);
  task.remove();
}
