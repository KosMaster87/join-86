async function openCategorySelect(){
    content = document.getElementById(`categoryMenu`);
    content.innerHTML= `<div class="categorySelectOption">Technical Task</div>
    <div class="categorySelectOption">User Story</div>`
    await categoryImageUp();
}

async function categoryImageUp(){
    image = document.getElementById(`categoryImage`);
    image.src = "../assets/img/add_task/arrow_drop_up.svg"
    await image.addEventListener("click", function() {
        closeCategoryMenu();
    })
}

function closeCategoryMenu(){
    content = document.getElementById(`categoryMenu`);
    content.innerHTML= "";
    categoryImageDown();
}

async function categoryImageDown(){
    image = document.getElementById(`categoryImage`);
    image.src = "../assets/img/add_task/arrow_drop_down.svg"
    await image.addEventListener("click", function() {
        openCategorySelect();
    })
}

function addSubtask(){
    container = getElementById(`subTasksContainer`);
    inputfield = subTaskInputfieldText.value;
    container += `<div class="firstAdd">
    <div class="subTastText">
      <p>•</p>
      <p>${container}</p>
    </div>
    <div class="subMenu">
      <img src="../assets/img/add_task/task_edit.svg" />
      <img src="../assets/img/add_task/task_line.svg" />
      <img src="../assets/img/add_task/task_bin.svg" />
    </div>
  </div>`
}
