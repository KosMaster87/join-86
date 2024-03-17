function HtmlReturn(i) {
  return `
  <div onclick="openTask(${i})"  draggable="true" ondragstart="startDragging(${i})" id="toDoContainer${i}" class="boxSizeProgress">
  <div class="headContainer">
    <span id="TaskCategory${i}" class="headlineFromTask font16400">
      Category
    </span>
  </div>
  <div class="inProgressText">
    <p class="titleText font16700" id="titleId${i}">
    </p>
    <p class="descriptionText font16400" id="descriptionID${i}">
    </p>
  </div>
  <div class="progressMainContainer">
    <div class="progress-container">
      <div class="progress-bar" id="progressBar${i}"></div>
    </div>
    <p class="font12400">
      <p id="finishedTasks${i}"></p>
      /
      <p id="counterOfTasks${i}"></p>
      Subtasks
    </p>
  </div>
  <div class="progressFooter">
    <div class="IconBarClass" id="IconBar${i}"></div>
    <div>
      <img id="PrioImageContainer${i}" />
    </div>
  </div>
</div>`;
}

function awaitHtmlReturn(i) {
  return `
  <div onclick="openTask(${i})" draggable="true" ondragstart="startDragging(${i})" id="waitContainer${i}" class="boxSizeFeedback">
    <div class="headContainer">
      <span id="TaskCategory${i}" class="headlineFromTask font16400">
        Catergory
      </span>
    </div>
    <div class="inProgressText">
      <p class="titleText font16700" id="titleId${i}">
  
      </p>
      <p class="descriptionText font16400" id="descriptionID${i}">

      </p>
    </div>
    <div class="progressMainContainer" style="display:none;">
    <div class="progress-container">
      <div class="progress-bar" id="progressBar${i}"></div>
    </div>
    <p class="font12400">
      <p id="finishedTasks${i}"></p>
      /
      <p id="counterOfTasks${i}"></p>
      Subtasks
    </p>
  </div>
    <div class="progressFooter">
      <div class="IconBarClass" id="IconBar${i}"></div>
      <div>
        <img id="PrioImageContainer${i}" />
      </div>
    </div>
  </div>`;
}

function iconReturn(signature) {
  return `
    <div class="iconstlye" style="background-color: red; margin-left: -10px">${signature}</div>
    `;
}

function openTaskReturn(i) {
  return `
  <div id="blurrContainer" class="blurr">
  <div id="popUpMainContainer" class="openwindow">
    <div class="boxSizePopUp">
      <div class="headContainer">
        <span id="popUpTaskCategory" class="headlineFromTask font16400">
          
          Catergory
        </span>
        <div>
          <img onclick="closeOpenTask(${i})" src="../assets/img/board/board_cross.svg" />
        </div>
      </div>

      <div class="inProgressText">
        <p class="bordPopUptitleText font16700" id="popUpTitleId">
          
        </p>
        <p class="font16400" id="popUpDescriptionID">
          Build start page with recipe recommendation...
        </p>
      </div>
      <div class="task-info">
        <div>
          <span class="label popUpHeadline">Due date:</span>
          <span class="value" id="popUpDueDate">
            2024-03-01
          </span>
        </div>
        <div>
          <span class="label popUpHeadline">Priority:</span>
          <span class="value" id="popUpPriority">
            low
          </span>
          <img id="popUpPrioImage" src="" />
        </div>
      </div>
      <div>
        <p class="font16400 popUpHeadline">Assigned To:</p>
        <div id="popUpAssignedToMainContainer">
        </div>
      </div>
      <div style="display: flex; flex-direction: column">
        <p class="font16400 popUpHeadline" style="margin-bottom: 8px">
          Subtasks
        </p>
        <div id="popUpSubtasksContainer">

        </div>
      </div>
    </div>
    <div class="popUpFooter">
      <div onclick="deleteTaskBoard(${i})" class="footerBox deleteBlue">
        <img src="../assets/img/board/board_delete.svg" />
        <p class="font16400">Delete</p>
      </div>
      <div class="popUpLine"></div>
      <div  onclick="editBoardTask(${i})"  class="footerBox editBlue">
        <img  src="../assets/img/board/board_edit.svg" />
        <p class="font16400" >Edit</p>
      </div>
    </div>
    </div>
  </div>`;
}

function assigned(n) {
  return `
  <div class="popUpAssignedToContainer" id="popUpAssignedToContainer${n}">
    <div class="popUpIconstlye" id="pupUpIcon${n}"></div>
    <div class="font16400" id="popUpAssignedTo${n}"></div>
  </div>`;
}

function changeBoardMenuReturn(i) {
  return `
    <img class="arrow" src="../assets/img/add_task/task_cross.svg" onclick="clearSubtaskInputfield()"/>
    <img src="../assets/img/add_task/task_line.svg"/>
    <img class="arrow" onclick="addBoardSubtask(${i})" src="../assets/img/add_task/task_check.svg"/>`;
}

function popUpSubtaskReturn(i, s) {
  return `
    <div id="popUpSubtask${s}" class="popUpSubtaskDetail">
    <img onclick="subtaskFinish(${i},${s})" id="popUpSubtaskImage${s}" src="../assets/img/board/board_box.svg" />
      <span id="pupUpSubtaskText${s}">Test</span>
    </div>
  `;
}

function editBoardMobileTaskReturn(i) {
  return `
  <div class="divColumn">
  <div class="closeEdit">
    <img onclick="closeEditTask(${i})" src="../assets/img/board/board_cross.svg" />
  </div>
  <div class="scroll">
    <div id="taskTitleContainer">
      <p class="taskHeadline">Title</p>
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
      <p class="fildIsRequiredText"></p>
    </div>
    <div id="taskDueDateContainer">
      <p class="taskHeadline">Due date</p>
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
          onclick="whatsPrio(${i},'Urgent')"
          class="taskSelectButton"
        >
          Urgent
          <img src="../assets/img/add_task/arrow_top_red.svg" />
        </div>
        <div
          id="prioMediumContainer"
          onclick="whatsPrio(${i},'Medium')"
          class="taskSelectButton"
        >
          Medium
          <img src="../assets/img/add_task/line_orange.svg" />
        </div>
        <div id="prioLowContainer" onclick="whatsPrio(${i},'Low')" class="taskSelectButton">
          Low
          <img src="../assets/img/add_task/arrow_bottom_green.svg" />
        </div>
      </div>
      <p class="fildIsRequiredText"></p>
    </div>
    <div id="taskAssignedContainer">
      <p class="taskHeadline">Assigned to</p>
      <div id="contactSelectContainer" class="categorySelect">
        <input
          class="assignToInput font"
          type="text"
          id="assignedToContainer"
          onclick="onclickInputBorder()"
          onkeyup="filterNamesforAssignedTo()"
          placeholder="Add a Contact"
        />
        <img
          id="openerAssignedTo"
          onclick="openContacts(${i})"
          class="arrow"
          src="../assets/img/add_task/arrow_drop_down.svg"
        />
      </div>
      <div id="contactList"></div>
      <div id="contactListIcons">
        <div id="contactListIconsLine"></div>
      </div>
      <p id="contacRequired" class="fildIsRequiredText"></p>
    </div>

    <div id="taskSubtaskContainer">
      <p class="taskHeadline">Subtasks</p>
      <div class="subTaskInputcontainerClass" id="subTaskInputcontainer">
        <input
          id="subTaskInputfieldText"
          placeholder="Add new subtask"
          class="subtaskInputfield font"
          type="text"
          onkeydown="if(event.key==='Enter') addBoardSubtask(${i})"
          onkeyup="changeBoardMenu(${i})"
        />
        <div class="subTaskInputfieldMenuClass" id="subTaskInputfieldMenu">
          <img class="arrow" src="../assets/img/add_task/task_add.svg" />
        </div>
      </div>
      <div class="subTaskAddContainer" id="subTasksContainer"></div>
    </div>
  </div>
  <div class="boardEditButtonContainer">
    <div onclick="saveCurrentBoardTask(${i})" class="boardEditButton">
      <p>Ok</p>
      <img src="../assets/img/board/board_check.svg" />
    </div>
  </div>
</div>

`;
}
function editBoardDesktopTaskReturn(i) {
  return `
  <div class="divColumn">
  <span class="edith1">Add Task</span>
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
    <p class="fildIsRequiredText"></p>
  </div>
  <div id="taskAssignedContainer">
    <p class="taskHeadline">Assigned to</p>
    <div
      id="contactSelectContainer"
      class="categorySelect"
    >
    <input class="assignToInput font" type="text" id="assignedToContainer" onclick="onclickInputBorder()" onkeyup="filterNamesforAssignedTo()" placeholder="Add a Contact">
      <img id="openerAssignedTo" onclick="openContacts(${i})" class="arrow" src="../assets/img/add_task/arrow_drop_down.svg" />
    </div>
    <div id="contactList">
    </div>
    <div id="contactListIcons">
      <div id="contactListIconsLine"></div>
    </div>
    <p id="contacRequired" class="fildIsRequiredText"></p>
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
      oninput="checkInputs()"
    />
    <p id="dueDateRequiredContainer" class="fildIsRequiredText"></p>
  </div>
  <div id="taskPrioContainer">
    <p class="taskHeadline">Prio</p>
    <div id="prioSelectContainer">
      <div
        id="prioUrgentContainer"
        onclick="whatsPrio(${i},'Urgent')"
        class="taskSelectButton"
      >
        Urgent
        <img src="../assets/img/add_task/arrow_top_red.svg" />
      </div>
      <div
        id="prioMediumContainer"
        onclick="whatsPrio(${i},'Medium')"
        class="taskSelectButton"
      >
        Medium
        <img src="../assets/img/add_task/line_orange.svg" />
      </div>
      <div
        id="prioLowContainer"
        onclick="whatsPrio(${i},'Low')"
        class="taskSelectButton"
      >
        Low
        <img src="../assets/img/add_task/arrow_bottom_green.svg" />
      </div>
    </div>
    <p class="fildIsRequiredText"></p>
  </div>
   <div id="taskSubtaskContainer">
    <p class="taskHeadline">Subtasks</p>
    <div class="subTaskInputcontainerClass" id="subTaskInputcontainer">
      <input
        id="subTaskInputfieldText"
        placeholder="Add new subtask"
        class="subtaskInputfield font"
        type="text"
        onkeydown="if(event.key==='Enter') addBoardSubtask(${i})"
        onkeyup="changeBoardMenu(${i})"
      />
      <div class="subTaskInputfieldMenuClass" id="subTaskInputfieldMenu">
        <img class="arrow" src="../assets/img/add_task/task_add.svg" />
      </div>
    </div>
    <div class="subTaskAddContainer" id="subTasksContainer"></div>
  </div>
  </div>
</div>
<div class="boardEditButtonContainer">
<div onclick="saveCurrentBoardTask(${i})" class="boardEditButton">
  <p>Ok</p>
  <img src="../assets/img/board/board_check.svg" />
</div>
</div>
  `
}

function loadContactsReturn(c, i) {
  return `
    <div
        id="assignedContactContainer${c}"
        onclick="assignedtoContactBg(${c},${i})"
        class="assignedContactContainer"
      >
        <div class="assignedContactLeftSide">
          <div id="ContactSignatureIcon${c}" class="assignedContactLeftSideIcon">${contactSignature}</div>
          <p id="contactName${c}"  class="assignedContactNameClass">${contactName}</p>
        </div>
        <img
          id="assignedContactImage${c}"
          src="../assets/img/add_task/task_box.svg"
        />
      </div>
    `;
}

function filterNamesforAssignedToReturn(i) {
  return `
  <div id="assignedContactContainer${i}" onclick="assignedtoContactBg(${i},${i})" class="assignedContactContainer">
      <div class="assignedContactLeftSide">
          <div id="ContactSignatureIcon${i}" class="assignedContactLeftSideIcon">${user.contacts[i].signature}</div>
          <p class="assignedContactNameClass">${user.contacts[i].name}</p>
      </div>
      <img id="assignedContactImage${i}" src="../assets/img/add_task/task_box.svg"/>
  </div>
`;
}

function renderBaordSubtasksReturn(i, l) {
  return `<div id="subtask${l}" class="subtaskClass" ondblclick="editSubtask(${l})">
    <div class="addedSubtask">
      <div class="subTastText">
        <p>&bull;</p>
        <P>${user.tasks[i].subtasks[l].name}</P>
      </div>
      <div class="subMenu">
        <img class="arrow" src="../assets/img/add_task/task_edit.svg" onclick="editBoardSubtask(${i},${l})" alt="edit_icon">
        <img src="../assets/img/add_task/task_line.svg" alt="subtasks_seperator">
        <img class="arrow" src="../assets/img/add_task/task_cross.svg" onclick="deleteBoardSubtask(${i},${l})" alt="delete_icon">
      </div>
    </div>
  </div>`;
}

function editBoardSubtaskReturn(subtasks, s, i) {
  return `<div class="subtaskEdit" id="subtaskEdit">
    <input type="text" id="editBoardSubtask${s}" value="${subtasks}">
    <div class="subtastEditMenu">
      <img class="arrow" src="../assets/img/add_task/task_bin.svg" onclick="deleteBoardSubtask(${i},${s})" alt="delete_icon">
      <img src="../assets/img/add_task/task_line.svg" alt="subtasks_seperator">
      <img class="arrow" src="../assets/img/add_task/task_check.svg" onclick="editBoardSubtaskDone(${i},${s})" alt="done_icon">
    </div>
  </div>`;
}

function noTasksReturn(text) {
  return `<div class="noTasksInThisSelection font16400">No tasks ${text}</div>`;
}

function editBoardTaskReturn(i, s) {
  return `<div id="subtask${s}" class="subtaskClass" ondblclick="editSubtask(${s})">
    <div class="addedSubtask">
      <div class="subTastText">
        <p>&bull;</p>
        <P>${user.tasks[i].subtasks[s].name}</P>
      </div>
      <div class="subMenu">
        <img class="arrow" src="../assets/img/add_task/task_edit.svg" onclick="editBoardSubtask(${i},${s})" alt="edit_icon">
        <img src="../assets/img/add_task/task_line.svg" alt="subtasks_seperator">
        <img class="arrow" src="../assets/img/add_task/task_cross.svg" onclick="deleteBoardSubtask(${i},${s})" alt="delete_icon">
      </div>
    </div>
  </div>`;
}
