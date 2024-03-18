function closeListener() {
  document.addEventListener("click", function (event) {
    if (userClicksOutsideOfInputField(event, "categorySelectContainer")) {
      closeCategoryWindow();
    }
    if (userClicksOutsideOfInputField(event, "fullContactContainers")) {
      closeContactWindow();
    }
  });
}
function closeCategoryWindow() {
  let categoryMenu = document.getElementById("categoryMenu");
  let border = document.getElementById("categorySelectContainer");

  categoryMenu.style.display = "none";
  border.classList.remove("bordercolor");
}

/**
 * This function close the contact window when click with the mouse outside of this window
 */
function userClicksOutsideOfInputField(event, containerId) {
  let container = document.getElementById(containerId);
  return !container.contains(event.target);
}

function closeContactWindow() {
  let contactList = document.getElementById("contactList");
  let contactListIcons = document.getElementById("contactListIcons");
  let border = document.getElementById("contactSelectContainer");
  let image = document.getElementById("openerAssignedTo");
  contactList.style.display = "none";
  contactListIcons.style.display = "block";
  border.classList.remove("bordercolor");
  image.src = "../assets/img/add_task/arrow_drop_down.svg";
}

/**
 * This function open the contact list
 */
function openContacts() {
  let contactList = document.getElementById("contactList");
  let contactListIcons = document.getElementById("contactListIcons");
  let border = document.getElementById(`contactSelectContainer`);
  let image = document.getElementById(`openerAssignedTo`);
  contactList.style.display = "block";
  contactListIcons.style.display = "none";
  border.classList.add("bordercolor");
  image.src = "../assets/img/add_task/arrow_drop_up.svg";
  image.onclick = function () {
    closeContacts();
  };
}

/**
 * This function close the contact list
 */
function closeContacts() {
  let mainDiv = document.getElementById(`contactList`);
  mainDiv.innerHTML = "";
  mainDiv.style.display = "none";
  let border = document.getElementById(`contactSelectContainer`);
  border.classList.remove("bordercolor");
  let image = document.getElementById(`openerAssignedTo`);
  image.src = "../assets/img/add_task/arrow_drop_down.svg";
  image.onclick = function () {
    loadContacts();
  };
}

/**
 * This function load the Assigned to Contacts when click on arrow
 */
function loadContacts() {
  closeCategoryMenu();
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
  openContacts();
}

/**
 * This function filter the contact names with the input letters
 */
function filterNamesforAssignedTo() {
  let search = document.getElementById("assignedToContainer").value.toLowerCase();
  let list = document.getElementById("contactList");
  list.innerHTML = "";
  openContacts();
  for (let i = 0; i < contacts.length; i++) {
    let name = contacts[i].name.toLowerCase();
    if (name.includes(search)) {
      list.innerHTML += filterNamesforAssignedToReturn(i);
      let iconid = document.getElementById(`ContactSignatureIcon${i}`);
      iconid.style.backgroundColor += contacts[i].userColor;
    }
  }
}

/**
 * This function make a blue Border around the assigned to inputfield
 */
function onclickInputBorder() {
  let border = document.getElementById(`contactSelectContainer`);
  border.classList.add("bordercolor");
}

/**
 * This function changed the background-color of the selected contact and creat a icon for the selecdet icon to the icon box
 *
 * @param {*} i - this is the number of the seleced contact
 * @param {*} name - This is the name of the contact
 */
function assignedtoContactBg(i, userName) {
  let assignetToArray = {
    name: userName,
    userColor: contacts[i].userColor,
  };
  user.contacts[i].selected = true;
  selectedAssignedto.push(assignetToArray);
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
 * Clear the inputfields
 */
function clearInputs() {
  document.getElementById("titelInputContainer").value = "";
  document.getElementById("descriptionInput").value = "";
  document.getElementById("dueDateInputContainer").value = "";
  document.getElementById("assignedToContainer").value = "";
  document.getElementById("contactListIcons").innerHTML = "";
  document.getElementById("subTasksContainer").innerHTML = "";
  document.getElementById("categoryText").innerHTML = `Select task category`;
  clearVariables();
}

/**
 * Clear the Variables and remove the prio selectfield colors
 */
function clearVariables() {
  selectedTitle = "";
  selectedDescription = "";
  selectedAssignedto = [];
  selectedDueDate = "";
  selectedPrio = "";
  selectedCategory = "";
  subtasks = [];
  removePrio();
  removeWhiteImg();
}
