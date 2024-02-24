let subtaskCounter = 0;
let required = 0;
let prio ="";

function openCategorySelect() {
  content = document.getElementById(`categoryMenu`);
  content.innerHTML += `<div onclick="selectCategory(this)" class="categorySelectOption">Technical Task</div>
    <div onclick="selectCategory(this)" class="categorySelectOption">User Story</div>`;
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
  content.innerHTML = `${selectedOption.innerText}`;
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

function addSubtask() {
  container = document.getElementById(`subTasksContainer`);
  inputfield = subTaskInputfieldText.value;
  if (subTaskInputfieldText.value.trim() === "") {
  } else {
    container.innerHTML += `<div class="addedSubtask" id="createdSubTask${subtaskCounter}">
    <div class="subTastText">
      <p>•</p>
      <p id="newSubtext${subtaskCounter}">${inputfield}</p>
    </div>
    <div id="newSubMenu" class="subMenu">
      <img onclick="editSubTask(${subtaskCounter})" src="../assets/img/add_task/task_edit.svg" />
      <img src="../assets/img/add_task/task_line.svg" />
      <img onclick="removeSubtask(${subtaskCounter})" src="../assets/img/add_task/task_bin.svg" />
    </div>
  </div>`;
  }
  subTaskInputfieldText.value = "";
  subtaskCounter++;
}

function removeSubtask(i) {
  deleteSubtask = document.getElementById(`createdSubTask${i}`);
  deleteSubtask.remove();
}

function testfalsch() {
  inputAbfrage();
  dueDateRequired();
  categoryRequired();
}

function inputAbfrage() {
  let inputfield = document.getElementById("titelInputContainer");
  let inputRequired = document.getElementById("inputRequiredContainer");
  if (inputfield.value.trim() === "") {
    inputfield.classList.add("requiredBorder");
    inputRequired.innerHTML = "This field is required";
  } else {
    inputfield.classList.remove("requiredBorder");
    inputRequired.innerHTML = "";
  }
}

function dueDateRequired() {
  inputfield = document.getElementById(`dueDateInputContainer`);
  inputRequired = document.getElementById(`dueDateRequiredContainer`);
  if (inputfield.value.trim() === "") {
    inputfield.classList.add("requiredBorder");
    inputRequired.innerHTML = "This field is required";
    required++;
  } else {
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
    required++;
  }
}

function editSubTask(subtaskCounter) {
  let inputFieldId = `editInput${subtaskCounter}`;
  let textInElement = document.getElementById(`newSubtext${subtaskCounter}`);
  let menu = document.getElementById(`newSubMenu`);
  if (textInElement) {
    let currentText = textInElement.textContent;
    textInElement.outerHTML = `<input type="text" id="${inputFieldId}" value="${currentText}" />`;
    menu.innerHTML = `<img onclick="removeSubtask(${subtaskCounter})" src="../assets/img/add_task/task_bin.svg" />
    <img src="../assets/img/add_task/task_line.svg" />
    <img onclick="back()" src="../assets/img/add_task/task_check.svg" />`;
    const inputFieldElement = document.getElementById(inputFieldId);
    function cancelEdit(subtaskCounter) {
      const newTextElement = document.createElement("p");
      newTextElement.id = `newSubtext${subtaskCounter}`;
      newTextElement.textContent = inputFieldElement.value;
      inputFieldElement.replaceWith(newTextElement);
    }
    inputFieldElement.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        textInElement.textContent = inputFieldElement.value;
        inputFieldElement.outerHTML = `<p id="newSubtext${subtaskCounter}">${inputFieldElement.value}</p>`;
      } else if (event.key === "Escape") {
        cancelEdit();
      }
    });
    inputFieldElement.focus();
    inputFieldElement.setSelectionRange(currentText.length, currentText.length);
  }
}

function prioSelectet() {}

function whatsPrio(clickedContainerId) {
  removeWhiteImg();
  removePrio();
  changePrioColor(clickedContainerId);
}

function removePrio(){
  let prioLowContainer = document.getElementById("prioLowContainer");
  let prioMediumContainer = document.getElementById("prioMediumContainer");
  let prioUrgentContainer = document.getElementById("prioUrgentContainer");
  prioLowContainer.classList.remove("prioLow");
  prioMediumContainer.classList.remove("prioMedium");
  prioUrgentContainer.classList.remove("prioUrgent");
}

function removeWhiteImg(){
  let imgUrgent = prioUrgentContainer.querySelector("img");
  let imgMedium = prioMediumContainer.querySelector("img");
  let imgLow = prioLowContainer.querySelector("img");
  imgUrgent.src="../assets/img/add_task/arrow_top_red.svg";
  imgMedium.src="../assets/img/add_task/line_orange.svg";
  imgLow.src="../assets/img/add_task/arrow_bottom_green.svg";
}

function changePrioColor(clickedContainerId) {
  let imgUrgent = prioUrgentContainer.querySelector("img");
  let imgMedium = prioMediumContainer.querySelector("img");
  let imgLow = prioLowContainer.querySelector("img");
  if (clickedContainerId === prioLowContainer) {
    prioLowContainer.classList.add("prioLow");
    imgLow.src="../assets/img/add_task/arrow_bottom_white.svg";
  } else if (clickedContainerId === prioMediumContainer) {
    prioMediumContainer.classList.add("prioMedium");
    imgMedium.src="../assets/img/add_task/line_white.svg";
  } else if (clickedContainerId === prioUrgentContainer) {
    prioUrgentContainer.classList.add("prioUrgent");
    imgUrgent.src="../assets/img/add_task/arrow_top_white.svg";
  }
}