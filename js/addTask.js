let selectedTitle = "";
let selectedDescription = "";
let selectedAssignedto = [];
let selectedDueDate = "";
let selectedPrio = "";
let selectedCategory = "";
let subtasks = [];
let statusInfo = "to-do";
let mobilVersion;
let contacts = [];

/**
 * This function load the currentuser in the backend
 */
async function assignTaskToUser() {
  user.tasks.push({
    status: statusInfo,
    title: selectedTitle,
    description: selectedDescription,
    assignedTo: selectedAssignedto,
    dueDate: selectedDueDate,
    prio: selectedPrio,
    category: selectedCategory,
    subtasks: subtasks,
  });
  setItem("users", users);
  includeContentHTML("board");
}
/**
 * This function is the first function when open the page
 */
async function initAddTask() {
  await includeHTML();
  setActiveLink("navAddTask");
  checkWidth();
  await loadCurrentUserAlsoUsersAsObject();
  await getAllContactsFromCurrentUserSorted();
  loadContacts();
  footer();
}
/**
 * This function load the contactnames from the user in an array
 * 
 * @returns - return the contact in the array
 */
async function getAllContactsFromCurrentUserSorted() {
  let allContactsFromAllUsers = await loadAllContactsFromAllUsers();
  let userId = await getGlobalUserId();
  let allContactsFromCurrentUser = await getAllContactsFromCurrentUser(
    allContactsFromAllUsers,
    userId
  );
  let testarray = await sortAllContactsFromCurrentUserAlphabetical(allContactsFromCurrentUser);
  contacts = testarray.slice();
  return contacts;
}
/**
 * This function start check when width changed
 */
window.addEventListener("resize", function () {
  checkWidth();
  footer();
});
/**
 * This function checked the required field
 */
async function requiredFields() {
  inputAbfrage();
  dueDateRequired();
  categoryRequired();
  let description = document.getElementById(`descriptionInput`);
  selectedDescription = description.value;
  await assignTaskToUser();
}
/**
 * This function check the witdh for over 1219 or lower
 */
function checkWidth() {
  let screenWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (screenWidth <= 1219) {
    mobilVersion = false;
  } else {
    mobilVersion = true;
  }
  loadContent();
}
/**
 * This function load html for the width
 */
function loadContent() {
  let screenWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let content = document.getElementById(`taskMainContainer`);
  content.innerHTML = "";
  if (screenWidth <= 1219 && mobilVersion == false) {
    mobilVersion = true;
    content.innerHTML = renderAddTaskMobileHTML();
  }
  if (screenWidth > 1219 && mobilVersion == true) {
    mobilVersion = false;
    content.innerHTML = renderAddTaskHTML();
  }
}
/**
 * This function checked the required of the title container
 */
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
/**
 * This function checked the required of the dueDate container
 */
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
/**
 * This function check the right input of the category container
 */
function checkCategory() {
  var inputfield = document.getElementById("categoryText");
  var content = inputfield.textContent || inputfield.innerText;
  return content.trim() === "Technical Task" || content.trim() === "User Story";
}
/**
 * This function checked the required of the category container
 */
function categoryRequired() {
  border = document.getElementById(`categorySelectContainer`);
  inputfield = document.getElementById(`categoryText`);
  inputRequired = document.getElementById(`categoryRequiredContainer`);
  var isCategoryValid = checkCategory();
  if (isCategoryValid) {
    inputfield.value = "";
    inputRequired.innerHTML = "";
    border.classList.remove("requiredBorder");
  } else {
    border.classList.add("requiredBorder");
    inputRequired.innerHTML = "This field is required";
  }
}
/**
 * This function edit the color of the clicked prio container
 * 
 * @param {string} clickedContainerId - This is the number von the container that was clicked
 */
function whatsPrio(clickedContainerId) {
  removeWhiteImg();
  removePrio();
  changePrioColor(clickedContainerId);
}
/**
 * This function remove the background color of prio container
 */
function removePrio() {
  let prioLowContainer = document.getElementById("prioLowContainer");
  let prioMediumContainer = document.getElementById("prioMediumContainer");
  let prioUrgentContainer = document.getElementById("prioUrgentContainer");
  prioLowContainer.classList.remove("prioLow");
  prioMediumContainer.classList.remove("prioMedium");
  prioUrgentContainer.classList.remove("prioUrgent");
}
/**
 * This function remove the images to images non used prio
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
 * This function change the color of the clicked prio container
 * 
 * @param {string} clickedContainerId - is the id from the clicken container
 */

function changePrioColor(clickedContainerId) {
  let imgUrgent = prioUrgentContainer.querySelector("img");
  let imgMedium = prioMediumContainer.querySelector("img");
  let imgLow = prioLowContainer.querySelector("img");
  if (clickedContainerId === prioLowContainer) {
    changePrioColorLow(imgLow);
  } else if (clickedContainerId === prioMediumContainer) {
    changePrioColorMedium(imgMedium);
  } else if (clickedContainerId === prioUrgentContainer) {
    changePrioColorUrgent(imgUrgent);
  }
}
/**
 * This function change the background color of the low container
 * 
 * @param {string} imgLow - - Is the id from the image 
 */
function changePrioColorLow(imgLow) {
  prioLowContainer.classList.add("prioLow");
  selectedPrio = "Low";
  imgLow.src = "../assets/img/add_task/arrow_bottom_white.svg";
}
/**
 * This function change the background color of the medium container
 * 
 * @param {string} imgMedium - Is the id from the image 
 */
function changePrioColorMedium(imgMedium) {
  prioMediumContainer.classList.add("prioMedium");
  selectedPrio = "Medium";
  imgMedium.src = "../assets/img/add_task/line_white.svg";
}
/**
 * This function change the background color of the urgent container
 * 
 * @param string imgUrgent - Is the id from the image 
 */
function changePrioColorUrgent(imgUrgent) {
  prioUrgentContainer.classList.add("prioUrgent");
  selectedPrio = "Urgent";
  imgUrgent.src = "../assets/img/add_task/arrow_top_white.svg";
}
/**
 * This function is for that tha task cant use a date in the past
 */
function setMinDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("dueDateInputContainer").min = today;
}
/**
 * This function open the category
 */
function openCategorySelect() {
  content = document.getElementById(`categoryMenu`);
  content.innerHTML += openCategorySelectReturn();
  border = document.getElementById(`categorySelectContainer`);
  border.classList.add("bordercolor");
  categoryImageUp();
}
/**
 * This function change the image when the category menu opened
 */
function categoryImageUp() {
  image = document.getElementById(`categoryImage`);
  content = document.getElementById(`categorySelectContainer`);
  image.src = "../assets/img/add_task/arrow_drop_up.svg";
  content.onclick = closeCategoryMenu;
}
/**
 * This function change the name from the choosed category to the required field
 *
 * @param {string} selectedOption - This string change the name of the category
 */
function selectCategory(selectedOption) {
  let content = document.getElementById(`categoryText`);
  let image = document.getElementById(`categoryImage`);
  content.innerHTML = `${selectedOption}`;
  selectedCategory = content.innerText;
  image.src = "../assets/img/add_task/arrow_drop_up.svg";
  closeCategoryMenu();
  checkInputs();
}
/**
 * This function close the category menu
 */
function closeCategoryMenu() {
  div = document.getElementById(`categoryMenu`);
  div.innerHTML = "";
  border = document.getElementById(`categorySelectContainer`);
  border.classList.remove("bordercolor");
  categoryImageDown();
}
/**
 * this function chance the image when the category choose menu and switch the onclick for close the menu
 */
function categoryImageDown() {
  image = document.getElementById(`categoryImage`);
  content = document.getElementById(`categorySelectContainer`);
  image.src = "../assets/img/add_task/arrow_drop_down.svg";
  content.onclick = openCategorySelect;
}
/**
 * This function open the concat menu
 */
function openContacts() {
  let contactList = document.getElementById("contactList");
  let contactListIcons = document.getElementById("contactListIcons");
  let border = document.getElementById(`contactSelectContainer`);
  let to = document.getElementById(`assignedToContainer`);
  if (contactList.style.display === "none" || contactList.style.display === "") {
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
/**
 * This eventlistener close the contactwindow when click with the mouse outside of this window
 */
window.addEventListener("mouseup", function (event) {
  let contactList = document.getElementById("contactList");
  let contactListIcons = document.getElementById("contactListIcons");
  let border = document.getElementById(`contactSelectContainer`);
  let to = document.getElementById(`assignedToContainer`);
  if (event.target != contactList && event.target.parentNode != contactList) {
    contactList.style.display = "none";
    contactListIcons.style.display = "block";
    border.classList.remove("bordercolor");
    to.innerHTML = "Select to Contact";
  }
});
/**
 * This function changed the background-color of the selected contact and creat a icon for the selecdet icon to the icon box
 *
 * @param {*} i - this is the number of the seleced contact
 * @param {*} name - This is the name of the contact
 */
function assignedtoContactBg(i, name) {
  selectedAssignedto.push(name);
  let container = document.getElementById(`assignedContactContainer${i}`);
  let contactListIcons = document.getElementById("contactListIconsLine");
  container.classList.add("assignedContainerBlack");
  let image = document.getElementById(`assignedContactImage${i}`);
  image.src = "../assets/img/add_task/task_box_check.svg";
  let signature = document.getElementById(`ContactSignatureIcon${i}`).innerHTML;
  let userColor = contacts[i].userColor;
  contactListIcons.innerHTML += `<div id="contactIconNumber${i}" style="background-color: ${userColor};" class="assignedContactLeftSideIcon">${signature}</div>`;
  container.onclick = function () {
    removeassignedtoContactBg(i);
  };
}
/**
 * This function remove the backgroundcolor and checked img of selected contacts
 *
 * @param {int} i - This is the number of the contact
 */
function removeassignedtoContactBg(i) {
  let container = document.getElementById(`assignedContactContainer${i}`);
  container.classList.remove("assignedContainerBlack");
  let image = document.getElementById(`assignedContactImage${i}`);
  image.src = "../assets/img/add_task/task_box.svg";
  let iconId = document.getElementById(`contactIconNumber${i}`);
  iconId.remove();
  container.onclick = function () {
    assignedtoContactBg(i);
  };
}
/**
 * This function change the menufield of the inputfield
 */
function changemenu() {
  container = document.getElementById(`subTaskInputfieldMenu`);
  container.innerHTML = changemenuReturn();
  let border = document.getElementById(`subTaskInputcontainer`);
  border.classList.add("bordercolor");
}
/**
 * This function creat a subtask
 */
function addSubtask() {
  let subtasksInput = document.getElementById("subTaskInputfieldText");
  subtasks.push(subtasksInput.value);
  renderSubtasks();
  clearSubtaskInputfield();
}
/**
 * This function filled the created subtask Container
 */
function renderSubtasks() {
  let subtasksList = document.getElementById("subTasksContainer");
  subtasksList.innerHTML = "";
  for (let i = 0; i < subtasks.length; i++) {
    subtasksList.innerHTML += renderSubtasksReturn(subtasks, i);
  }
}
/**
 * This function change the subtask from div to inputfield
 *
 * @param {int} i - This is the number of subtask
 */
function editSubtask(i) {
  let content = document.getElementById("subtask" + i);
  content.innerHTML = editSubtaskReturn(subtasks, i);
}
/**
 * This function finish the edit of a creat subtask
 *
 * @param {int} i - This is the number ob subtask
 */
function editSubtaskDone(i) {
  let content = document.getElementById("editSubtask" + i).value;
  if (content.length > 0) {
    subtasks[i] = content;
    renderSubtasks();
  } else {
    deleteSubtask(i);
  }
}
/**
 * This function delete the current subtask
 *
 * @param {int} i - This is the number of the subtask
 */
function deleteSubtask(i) {
  subtasks.splice(i, 1);
  renderSubtasks();
}
/**
 * This function clear the value from the subtask input field
 */
function clearSubtaskInputfield() {
  let input = document.getElementById(`subTaskInputfieldText`);
  input.value = "";
  container = document.getElementById(`subTaskInputfieldMenu`);
  container.innerHTML = `
  <img src="../assets/img/add_task/task_add.svg" />`;
  let border = document.getElementById(`subTaskInputcontainer`);
  border.classList.remove("bordercolor");
}
/**
 * This function load all contacts from current user
 */
function loadContacts() {
  let mainDiv = document.getElementById(`contactList`);
  let totalHeight = Math.min(contacts.length * 52, 260);
  mainDiv.style.height = `${totalHeight}px`;
  for (let i = 0; i < Math.min(contacts.length); i++) {
    contactSignature = contacts[i].signature;
    contactName = contacts[i].name;
    mainDiv.innerHTML += loadContactsReturn(i);
    iconid = document.getElementById(`ContactSignatureIcon${i}`);
    iconid.style.backgroundColor = contacts[i].userColor;
  }
  if (contacts.length > 5) {
    mainDiv.style.overflowY = "scroll";
  }
}
/**
 * This function checked if the required field have a value
 */
function checkInputs() {
  var dueDateValue = document.getElementById("dueDateInputContainer").value;
  var titleValue = document.getElementById("titelInputContainer").value;
  var isCategoryValid = checkCategory();
  var createTaskButton = document.getElementById("createTaskButton");
  if (dueDateValue.trim() !== "" && titleValue.trim() !== "" && isCategoryValid) {
    createTaskButton.style.display = "block";
  } else {
    createTaskButton.style.display = "none";
  }
}
/**
 * This function is used to creat the footer
 */
function footer() {
  let content = document.getElementById(`taskMainContainer`);
  content.innerHTML += footerReturn();
}
