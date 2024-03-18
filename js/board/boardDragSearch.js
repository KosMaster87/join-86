let currentDragElement;

async function savedUsersInBackend() {
  await setItem("users", users);
}

function startDragging(i) {
  currentDragElement = i;
}

function allowDrop(ev) {
  ev.preventDefault();
}

async function moveTo(newStatus) {
  user.tasks[currentDragElement].status = newStatus;
  savedUsersInBackend();
  clearBoardTasksField()
  loadTasks();
}

function highlight(id) {
  document.getElementById(id).classList.add("drag-area-highlight");
}

function removeHighlight(id) {
  document.getElementById(id).classList.remove("drag-area-highlight");
}

/* Suchfunktion*/

async function filterTitles() {
  let search = document.getElementById("boardSearchInput").value.toLowerCase();
  clearBoardTasksField();
  for (let i = 0; i < user.tasks.length; i++) {
    let inTitle = user.tasks[i].title.toLowerCase();
    let inDesc = user.tasks[i].description.toLowerCase();
    if (inTitle.includes(search) || inDesc.includes(search)) {
      if (user.tasks[i].status === "to-do") {
        fillTodo(i);
      } else if (user.tasks[i].status === "progress") {
        fillProgress(i);
      } else if (user.tasks[i].status === "await") {
        fillAwait(i);
      } else if (user.tasks[i].status === "done") {
        fillDone(i);
      }
    }
  }
  checkNofilledTasks();
}

function clearBoardTasksField() {
  document.getElementById(`TodoMainContainer`).classList.remove("drag-area-highlight");
  document.getElementById(`progressMainContainer`).classList.remove("drag-area-highlight");
  document.getElementById(`awaitMainContainer`).classList.remove("drag-area-highlight");
  document.getElementById(`doneMainContainer`).classList.remove("drag-area-highlight");
  document.getElementById(`TodoMainContainer`).innerHTML = "";
  document.getElementById(`progressMainContainer`).innerHTML = "";
  document.getElementById(`awaitMainContainer`).innerHTML = "";
  document.getElementById(`doneMainContainer`).innerHTML = "";
}

