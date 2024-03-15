let currentDraggedElement;

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
  document.getElementById(`TodoMainContainer`).innerHTML = "";
  document.getElementById(`TodoMainContainer`).classList.remove("drag-area-highlight");
  document.getElementById(`progressMainContainer`).innerHTML = "";
  document.getElementById(`progressMainContainer`).classList.remove("drag-area-highlight");
  document.getElementById(`awaitMainContainer`).innerHTML = "";
  document.getElementById(`awaitMainContainer`).classList.remove("drag-area-highlight");
  document.getElementById(`doneMainContainer`).innerHTML = "";
  document.getElementById(`doneMainContainer`).classList.remove("drag-area-highlight");
  loadTasks();
}

function highlight(id) {
  document.getElementById(id).classList.add("drag-area-highlight");
}

function removeHighlight(id) {
  document.getElementById(id).classList.remove("drag-area-highlight");
}

/* Suchfunktion*/
function filterNamesforAssignedTo() {
  let search = document.getElementById("boardSearchInput").value.toLowerCase();
  let list = document.getElementById("contactList");
  list.innerHTML = "";
  openContacts();
  for (let i = 0; i < contacts.length; i++) {
    let name = user.tasks[i].title.toLowerCase();
    if (name.includes(search)) {
      list.innerHTML += filterNamesforAssignedToReturn(i);
      let iconid = document.getElementById(`ContactSignatureIcon${i}`);
      iconid.style.backgroundColor += contacts[i].userColor;
    }
  }
}
