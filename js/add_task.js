let subtaskCounter = 0;
let required = 0;

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
  container.innerHTML += `<div class="addedSubtask" id="createdSubTask${subtaskCounter}">
    <div class="subTastText">
      <p>•</p>
      <p>${inputfield}</p>
    </div>
    <div class="subMenu">
      <img src="../assets/img/add_task/task_edit.svg" />
      <img src="../assets/img/add_task/task_line.svg" />
      <img onclick="removeSubtask(${subtaskCounter})" src="../assets/img/add_task/task_bin.svg" />
    </div>
  </div>`;
  subTaskInputfieldText.value = "";
  subtaskCounter++;
}

function removeSubtask(i) {
  deleteSubtask = document.getElementById(`createdSubTask${i}`);
  deleteSubtask.remove();
}


function testfalsch(){
  inputfield = document.getElementById(`titelInputContainer`);
  inputRequired = document.getElementById(`inputRequiredContainer`)
  if (inputfield.value.trim() === '') {
    inputfield.classList.add('requiredBorder');
    inputRequired.innerHTML = 'This field is required';
    required++;
  } else {
    inputfield.value="";
    inputRequired.innerHTML = '';
  }
}