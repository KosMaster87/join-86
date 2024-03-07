function HtmlReturn(i) {
  return`
  <div id="toDoContainer${i}" class="boxSizeProgress">
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
  </div>`
}
function awaitHtmlReturn(i) {
  return`
  <div id="waitContainer${i}" class="boxSizeFeedback">
    <div class="headContainer">
      <span id="TaskCategory${i}">Technical Task</span>
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
  </div>`
}

function iconReturn(signature) {
  return `
    <div class="iconstlye" style="background-color: red; margin-left: -10px">${signature}</div>
    `;
}
