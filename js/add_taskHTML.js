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
