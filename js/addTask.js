let selectedTitle = "";
let selectedDescription = "";
let selectedAssignedto = "";
let selectedDueDate = "";
let selectedPrio = "";
let selectedCategory = "";
let subtasks = [];
let mobilVersion;

async function initAddTask(){
  await includeHTML();
  checkWidth();
  loadContent();
}

function checkWidth() {
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (screenWidth <= 1220) {
    mobilVersion = false;
  } else {
    mobilVersion = true;
  }
}

function loadContent() {
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let content = document.getElementById("taskMainContainer");
  if (screenWidth <= 1220 && mobilVersion == false) {
    mobilVersion = true;
    content.innerHTML = renderAddTaskMobileHTML();
  }
  if (screenWidth > 1220 && mobilVersion == true) {
    mobilVersion = false;
    content.innerHTML = renderAddTaskHTML();
  }
}

function requiredFields() {
  inputAbfrage();
  dueDateRequired();
  categoryRequired();
  let description = document.getElementById(`descriptionInput`);
  selectedDescription = description.value;
}

function inputAbfrage() {
  let inputfield = document.getElementById("titelInputContainer");
  let inputRequired = document.getElementById("inputRequiredContainer");
  let text = document.getElementById("titelInputContainer");
  if (inputfield.value.trim() === "") {
    inputfield.classList.add("requiredBorder");
    inputRequired.innerHTML = "This field is required";
  } else {
    selectedTitle = text.value;
    inputfield.classList.remove("requiredBorder");
    inputRequired.innerHTML = "";
  }
}

function dueDateRequired() {
  inputfield = document.getElementById(`dueDateInputContainer`);
  inputRequired = document.getElementById(`dueDateRequiredContainer`);
  let date = document.getElementById(`dueDateInputContainer`);
  if (inputfield.value.trim() === "") {
    inputfield.classList.add("requiredBorder");
    inputRequired.innerHTML = "This field is required";
  } else {
    selectedDueDate = date.value;
    inputRequired.innerHTML = "";
    inputfield.classList.remove("requiredBorder");
  }
}

function categoryRequired() {
  border = document.getElementById(`categorySelectContainer`);
  inputfield = document.getElementById(`categoryText`);
  content = inputfield.textContent || inputfield.innerText;
  inputRequired = document.getElementById(`categoryRequiredContainer`);
  if (content.trim() === "Technical Task" || content.trim() === "User Story") {
    inputfield.value = "";
    inputRequired.innerHTML = "";
    border.classList.remove("requiredBorder");
  } else {
    border.classList.add("requiredBorder");
    inputRequired.innerHTML = "This field is required";
  }
}

function whatsPrio(clickedContainerId, SelectedPrio) {
  removeWhiteImg();
  removePrio();
  changePrioColor(clickedContainerId);
  prio = SelectedPrio;
}

function removePrio() {
  let prioLowContainer = document.getElementById("prioLowContainer");
  let prioMediumContainer = document.getElementById("prioMediumContainer");
  let prioUrgentContainer = document.getElementById("prioUrgentContainer");
  prioLowContainer.classList.remove("prioLow");
  prioMediumContainer.classList.remove("prioMedium");
  prioUrgentContainer.classList.remove("prioUrgent");
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
  let imgUrgent = prioUrgentContainer.querySelector("img");
  let imgMedium = prioMediumContainer.querySelector("img");
  let imgLow = prioLowContainer.querySelector("img");
  if (clickedContainerId === prioLowContainer) {
    prioLowContainer.classList.add("prioLow");
    selectedPrio = "Low";
    imgLow.src = "../assets/img/add_task/arrow_bottom_white.svg";
  } else if (clickedContainerId === prioMediumContainer) {
    prioMediumContainer.classList.add("prioMedium");
    selectedPrio = "Medium";
    imgMedium.src = "../assets/img/add_task/line_white.svg";
  } else if (clickedContainerId === prioUrgentContainer) {
    prioUrgentContainer.classList.add("prioUrgent");
    selectedPrio = "Urgent";
    imgUrgent.src = "../assets/img/add_task/arrow_top_white.svg";
  }
}

function setMinDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("dueDateInputContainer").min = today;
}

function openCategorySelect() {
  content = document.getElementById(`categoryMenu`);
  content.innerHTML += openCategorySelectReturn();
  addCategoryBorder();
  categoryImageUp();
}

function addCategoryBorder() {
  border = document.getElementById(`categorySelectContainer`);
  border.classList.add("bordercolor");
}

function categoryImageUp() {
  image = document.getElementById(`categoryImage`);
  content = document.getElementById(`categorySelectContainer`);
  image.src = "../assets/img/add_task/arrow_drop_up.svg";
  content.onclick = closeCategoryMenu;
}

function selectCategory(selectedOption) {
  let content = document.getElementById(`categoryText`);
  let image = document.getElementById(`categoryImage`);
  content.innerHTML = `${selectedOption}`;
  selectedCategory = content.innerText;
  image.src = "../assets/img/add_task/arrow_drop_up.svg";
  closeCategoryMenu();
}

function closeCategoryMenu() {
  div = document.getElementById(`categoryMenu`);
  div.innerHTML = "";
  removeCategoryBorder();
  categoryImageDown();
}

function removeCategoryBorder() {
  border = document.getElementById(`categorySelectContainer`);
  border.classList.remove("bordercolor");
}

function categoryImageDown() {
  image = document.getElementById(`categoryImage`);
  content = document.getElementById(`categorySelectContainer`);
  image.src = "../assets/img/add_task/arrow_drop_down.svg";
  content.onclick = openCategorySelect;
}

function openContacts() {
  let contactList = document.getElementById("contactList");
  let contactListIcons = document.getElementById("contactListIcons");
  let border = document.getElementById(`contactSelectContainer`);
  let to = document.getElementById(`assignedToContainer`);
  if (
    contactList.style.display === "none" ||
    contactList.style.display === ""
  ) {
    contactList.style.display = "block";
    contactListIcons.style.display = "none";
    border.classList.add("bordercolor");
    to.innerHTML = "An";
  } else {
    contactList.style.display = "none";
    contactListIcons.style.display = "block";
    border.classList.remove("bordercolor");
    to.innerHTML = "Select to Contact";
  }
}

function assignedtoContactBg() {
  let container = document.getElementById(`assignedContactContainer`);
  let contactListIcons = document.getElementById("contactListIconsLine");
  container.classList.add("assignedContainerBlack");
  let image = document.getElementById(`assignedContactImage`);
  image.src = "../assets/img/add_task/task_box_check.svg";
  contactListIcons.innerHTML += `<div id="contactIconNumber" class="assignedContactLeftSideIcon">SB</div>`;
  container.onclick = removeassignedtoContactBg;
}

function removeassignedtoContactBg() {
  let container = document.getElementById(`assignedContactContainer`);
  container.classList.remove("assignedContainerBlack");
  let image = document.getElementById(`assignedContactImage`);
  image.src = src = "../assets/img/add_task/task_box.svg";
  let contactListIcons = document.getElementById("contactListIconsLine");
  contactListIcons.innerHTML = "";
  container.onclick = assignedtoContactBg;
}

function subtastwindow() {
  let container = document.getElementById(`subTaskInputcontainer`);
  let img = document.getElementById(`addSubtaskImg`);
  img.src = "../assets/img/add_task/task_bin.svg";
  img.onclick = "removeSubtask()";
  container.innerHTML += subtastwindowReturn();
}

function changemenu() {
  container = document.getElementById(`subTaskInputfieldMenu`);
  container.innerHTML = changemenuReturn();
  let border = document.getElementById(`subTaskInputcontainer`);
  border.classList.add("bordercolor");
}

function addSubtask() {
  let subtasksInput = document.getElementById("subTaskInputfieldText");
  subtasks.push(subtasksInput.value);
  renderSubtasks();
  clearSubtaskInputfield();
}

function renderSubtasks() {
  let subtasksList = document.getElementById("subTasksContainer");
  subtasksList.innerHTML = "";
  for (let i = 0; i < subtasks.length; i++) {
    subtasksList.innerHTML += renderSubtasksReturn(subtasks, i);
  }
}

function editSubtask(i) {
  let content = document.getElementById("subtask" + i);
  content.innerHTML = editSubtaskReturn(subtasks, i);
}

function editSubtaskDone(i) {
  let content = document.getElementById("editSubtask" + i).value;
  if (content.length > 0) {
    subtasks[i] = content;
    renderSubtasks();
  } else {
    deleteSubtask(i);
  }
}

function deleteSubtask(i) {
  subtasks.splice(i, 1);
  renderSubtasks();
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
