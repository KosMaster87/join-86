function renderAddTaskMobileHTML() {
  return `
  <div class="divColumn">
  <h1>Add Task</h1>
  <div id="taskTitleContainer">
        <p class="taskHeadline">
          Title
          <span class="requiredStar">*</span>
        </p>
        <input
          id="titelInputContainer"
          type="text"
          class="titleInputField font"
          placeholder="Enter a title"
        />
        <p id="inputRequiredContainer" class="fildIsRequiredText"></p>
      </div>
      <div id="taskDescriptionContainer">
        <p class="taskHeadline">Description</p>
        <textarea
          id="descriptionInput"
          placeholder="Enter a Descripton"
          class="descriptionInputField font"
        ></textarea>
      </div>
      <div id="taskPrioContainer">
        <p class="taskHeadline">Prio</p>
        <div id="prioSelectContainer">
          <div
            id="prioUrgentContainer"
            onclick="whatsPrio(prioUrgentContainer)"
            class="taskSelectButton"
          >
            Urgent
            <img src="../assets/img/add_task/arrow_top_red.svg" />
          </div>
          <div
            id="prioMediumContainer"
            onclick="whatsPrio(prioMediumContainer)"
            class="taskSelectButton"
          >
            Medium
            <img src="../assets/img/add_task/line_orange.svg" />
          </div>
          <div
            id="prioLowContainer"
            onclick="whatsPrio(prioLowContainer)"
            class="taskSelectButton"
          >
            Low
            <img src="../assets/img/add_task/arrow_bottom_green.svg" />
          </div>
        </div>
      </div>
      <div id="taskDueDateContainer">
        <p class="taskHeadline">
          Due date
          <span class="requiredStar">*</span>
        </p>
        <input
          id="dueDateInputContainer"
          placeholder="dd/mm/yyyy"
          type="date"
          class="dueDateInputField font"
          onfocus="setMinDate()"
        />
        <p id="dueDateRequiredContainer" class="fildIsRequiredText"></p>
      </div>

      <div id="taskCategoryContainer">
        <p class="taskHeadline">
          Category
          <span class="requiredStar">*</span>
        </p>
        <div
          id="categorySelectContainer"
          onclick="openCategorySelect()"
          class="categorySelect"
        >
          <span id="categoryText">Select tast category</span
          ><img
            id="categoryImage"
            src="../assets/img/add_task/arrow_drop_down.svg"
          />
        </div>
        <div class="categorySelectOptions" id="categoryMenu"></div>
        <p id="categoryRequiredContainer" class="fildIsRequiredText"></p>
      </div>
      <div id="taskAssignedContainer">
        <p class="taskHeadline">Assigned to</p>
        <div id="contactSelectContainer" onclick="openContacts()" class="categorySelect">
          <span id="assignedToContainer">Select to Contact</span><img
            src="../assets/img/add_task/arrow_drop_down.svg"
          />
        </div>
        <div id="contactList">
        <div id="assignedContactContainer" onclick="assignedtoContactBg()" class="assignedContactContainer">
          <div class="assignedContactLeftSide">
            <div class="assignedContactLeftSideIcon">SB</div>
            <p class="assignedContactNameClass">Sebastien Buhl</p>
            </div>
            <img id="assignedContactImage" src="../assets/img/add_task/task_box.svg">
          </div>
        </div>
        <div id="contactListIcons">
          <div id="contactListIconsLine"></div>
        </div>
        </div>

      <div id="taskSubtaskContainer">
        <p class="taskHeadline">Subtasks</p>
        <div class="subTaskInputcontainerClass" id="subTaskInputcontainer">
          <input
            id="subTaskInputfieldText"
            placeholder="Add new subtask"
            class="subtaskInputfield  font"
            type="text"
            onkeydown="if(event.key==='Enter') addSubtask()"
            onkeyup="changemenu()"
          />
          <div class="subTaskInputfieldMenuClass" id="subTaskInputfieldMenu">
            <img
              src="../assets/img/add_task/task_add.svg"
            />
          </div>
        </div>
        <div class="subTaskAddContainer" id="subTasksContainer"></div>
      </div>

      <div id="finishTaskContainer">
        <div class="finishTaskText">
          <span class="requiredStar">*</span>This field is required
        </div>
        <div class="createTask  font" onclick="requiredFields()">
          Create Task <img src="../assets/img/add_task/task_check_white.svg" />
        </div>
      </div>
      </div>
  `;}

function renderAddTaskHTML(){
  return `
  <div class="divColumn">
  <h1>Add Task</h1>
  <div class="leftAndRightMainContainer">
  <div id="leftTaskContainer">
  <div id="taskTitleContainer">
    <p class="taskHeadline">
      Title
      <span class="requiredStar">*</span>
    </p>
    <input
      id="titelInputContainer"
      type="text"
      class="titleInputField font"
      placeholder="Enter a title"
    />
    <p id="inputRequiredContainer" class="fildIsRequiredText"></p>
  </div>
  <div id="taskDescriptionContainer">
    <p class="taskHeadline">Description</p>
    <textarea
      id="descriptionInput"
      placeholder="Enter a Descripton"
      class="descriptionInputField font"
    ></textarea>
  </div>
  <div id="taskAssignedContainer">
    <p class="taskHeadline">Assigned to</p>
    <div
      id="contactSelectContainer"
      onclick="openContacts()"
      class="categorySelect"
    >
      <span id="assignedToContainer">Select to Contact</span
      ><img src="../assets/img/add_task/arrow_drop_down.svg" />
    </div>
    <div id="contactList">
      <div
        id="assignedContactContainer"
        onclick="assignedtoContactBg()"
        class="assignedContactContainer"
      >
        <div class="assignedContactLeftSide">
          <div class="assignedContactLeftSideIcon">SB</div>
          <p class="assignedContactNameClass">Sebastien Buhl</p>
        </div>
        <img
          id="assignedContactImage"
          src="../assets/img/add_task/task_box.svg"
        />
      </div>
    </div>
    <div id="contactListIcons">
      <div id="contactListIconsLine"></div>
    </div>
  </div>
</div>
<div class="seperatorContainer"></div>
<div id="rightTaskContainer">
  <div id="taskDueDateContainer">
    <p class="taskHeadline">
      Due date
      <span class="requiredStar">*</span>
    </p>
    <input
      id="dueDateInputContainer"
      placeholder="dd/mm/yyyy"
      type="date"
      class="dueDateInputField font"
      onfocus="setMinDate()"
    />
    <p id="dueDateRequiredContainer" class="fildIsRequiredText"></p>
  </div>
  <div id="taskPrioContainer">
    <p class="taskHeadline">Prio</p>
    <div id="prioSelectContainer">
      <div
        id="prioUrgentContainer"
        onclick="whatsPrio(prioUrgentContainer)"
        class="taskSelectButton"
      >
        Urgent
        <img src="../assets/img/add_task/arrow_top_red.svg" />
      </div>
      <div
        id="prioMediumContainer"
        onclick="whatsPrio(prioMediumContainer)"
        class="taskSelectButton"
      >
        Medium
        <img src="../assets/img/add_task/line_orange.svg" />
      </div>
      <div
        id="prioLowContainer"
        onclick="whatsPrio(prioLowContainer)"
        class="taskSelectButton"
      >
        Low
        <img src="../assets/img/add_task/arrow_bottom_green.svg" />
      </div>
    </div>
  </div>
  <div id="taskCategoryContainer">
    <p class="taskHeadline">
      Category
      <span class="requiredStar">*</span>
    </p>
    <div
      id="categorySelectContainer"
      onclick="openCategorySelect()"
      class="categorySelect"
    >
      <span id="categoryText font">Select tast category</span
      ><img
        id="categoryImage"
        src="../assets/img/add_task/arrow_drop_down.svg"
      />
    </div>
    <div class="categorySelectOptions" id="categoryMenu"></div>
    <p id="categoryRequiredContainer" class="fildIsRequiredText"></p>
  </div>

  <div id="taskSubtaskContainer">
    <p class="taskHeadline">Subtasks</p>
    <div class="subTaskInputcontainerClass" id="subTaskInputcontainer">
      <input
        id="subTaskInputfieldText"
        placeholder="Add new subtask"
        class="subtaskInputfield font"
        type="text"
        onkeydown="if(event.key==='Enter') addSubtask()"
        onkeyup="changemenu()"
      />
      <div class="subTaskInputfieldMenuClass" id="subTaskInputfieldMenu">
        <img src="../assets/img/add_task/task_add.svg" />
      </div>
    </div>
    <div class="subTaskAddContainer" id="subTasksContainer"></div>
  </div>
</div>
</div>
</div>
<div>
`
}

function renderAddTaskFinishHTML(){
  return `
  
  <div id="finishTaskContainer">
  <div class="finishTaskText">
    <span class="requiredStar">*</span>This field is required
  </div>
  <div class="createTask  font" onclick="requiredFields()">
    Create Task <img src="../assets/img/add_task/task_check_white.svg" />
  </div>`
}

function openCategorySelectReturn() {
  return `<div onclick="selectCategory(this)" class="categorySelectOption">Technical Task</div>
    <div onclick="selectCategory(this)" class="categorySelectOption">User Story</div>`;
}

function subtastwindowReturn() {
  return `<img src="../assets/img/add_task/task_line.svg" />
    <img onclick="back()" src="../assets/img/add_task/task_check.svg" />`;
}

function changemenuReturn() {
  return `
    <img src="../assets/img/add_task/task_cross.svg" onclick="clearSubtaskInputfield()"/>
    <img src="../assets/img/add_task/task_line.svg"/>
    <img onclick="addSubtask()" src="../assets/img/add_task/task_check.svg"/>`;
}

function renderSubtasksReturn(subtasks, i) {
  return `<div id="subtask${i}" ondblclick="editSubtask(${i})">
    <div class="addedSubtask">
      <div class="subTastText">
        <p>&bull;</p>
        <P>${subtasks[i]}</P>
      </div>
      <div class="subMenu">
        <img src="../assets/img/add_task/task_edit.svg" onclick="editSubtask(${i})" alt="edit_icon">
        <img src="../assets/img/add_task/task_line.svg" alt="subtasks_seperator">
        <img src="../assets/img/add_task/task_cross.svg" onclick="deleteSubtask(${i})" alt="delete_icon">
      </div>
    </div>
  </div>`;
}

function editSubtaskReturn(subtasks, i) {
  return `<div class="subtaskEdit" id="subtaskEdit">
    <input type="text" id="editSubtask${i}" value="${subtasks[i]}">
    <div class="subtastEditMenu">
      <img src="../assets/img/add_task/task_bin.svg" onclick="deleteSubtask(${i})" alt="delete_icon">
      <img src="../assets/img/add_task/task_line.svg" alt="subtasks_seperator">
      <img src="../assets/img/add_task/task_check.svg" onclick="editSubtaskDone(${i})" alt="done_icon">
    </div>
  </div>`;
}
