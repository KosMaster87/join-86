function HtmlReturn(i) {
  return `
  <div onclick="openTask(${i})" id="toDoContainer${i}" class="boxSizeProgress">
    <div class="headContainer">
      <span id="TaskCategory${i}" class="headlineFromTask font16400">
        Catergory
      </span>
      <div>
        <img src="../assets/img/board/mobile_switch.svg" />
      </div>
    </div>
    <div class="inProgressText">
      <p class="titleText font16700" id="titleId${i}">
        Kochwelt Page & Recipe Recommender
      </p>
      <p class="descriptionText font16400" id="descriptionID${i}">
        Build start page with recipe recommendation...
      </p>
    </div>
    <div class="progressMainContainer">
      <div class="progress-container">
        <div class="progress-bar" id="ProgressBar"></div>
      </div>
      <p class="font12400">
        <p id="finishedTasks${i}">0</p>/<p id="counterOfTasks${i}">2</p>
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
  <div onclick="openTask(${i})" draggable="true" ondragstart="startDragging(waitContainer${i})" id="waitContainer${i}" class="boxSizeFeedback">
    <div class="headContainer">
      <span id="TaskCategory${i}" class="headlineFromTask font16400">
        Catergory
      </span>
      <div>
        <img src="../assets/img/board/mobile_switch.svg" />
      </div>
    </div>
    <div class="inProgressText">
      <p class="titleText font16700" id="titleId${i}">
        Kochwelt Page & Recipe Recommender
      </p>
      <p class="descriptionText font16400" id="descriptionID${i}">
        Build start page with recipe recommendation...
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
  <div id="popUpMainContainer" class="openwindow">
    <div class="boxSizePopUp">
      <div class="headContainer">
        <span id="popUpTaskCategory" class="headlineFromTask font16400">
          
          Catergory
        </span>
        <div>
          <img onclick="closeOpenTask()" src="../assets/img/board/board_cross.svg" />
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
      <div class="footerBox">
        <img onclick="deleteTaskBoard(${i})" src="../assets/img/board/board_delete.svg" />
        <p class="font16400">Delete</p>
      </div>
      <div class="popUpLine"></div>
      <div class="footerBox">
        <img src="../assets/img/board/board_edit.svg" />
        <p class="font16400">Edit</p>
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

function popUpSubtaskReturn(s) {
  return`
    <div id="popUpSubtask${s}" class="popUpSubtaskDetail">
      <img onclick="subtaskFinish${s}" id="popUpSubtaskImage${s}" src="../assets/img/board/board_box.svg" />
      <span id="pupUpSubtaskText${s}">Test</span>
    </div>
  `
}
