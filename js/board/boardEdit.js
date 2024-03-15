async function loadContacts(i) {
  let mainDiv = document.getElementById(`contactList`);
  let totalHeight = Math.min(user.contacts.length * 52, 260);
  mainDiv.style.height = `${totalHeight}px`;
  for (let c = 0; c < user.contacts.length; c++) {
    contactSignature = user.contacts[c].signature;
    contactName = user.contacts[c].name;
    mainDiv.innerHTML += loadContactsReturn(c, i);
    iconid = document.getElementById(`ContactSignatureIcon${c}`);
    iconid.style.backgroundColor = user.contacts[c].userColor;

    if (user.contacts[c].selected) {
      let container = document.getElementById(`assignedContactContainer${c}`);
      let contactListIcons = document.getElementById("contactListIconsLine");
      container.classList.add("assignedContainerBlack");
      container.onclick = function () {
        removeassignedtoContactBg(i);
      };
      let image = document.getElementById(`assignedContactImage${c}`);
      image.src = "../assets/img/add_task/task_box_check.svg";
      let signature = document.getElementById(`ContactSignatureIcon${c}`).innerHTML;
      let userColor = user.contacts[c].userColor;
      contactListIcons.innerHTML += `<div id="contactIconNumber${c}" style="background-color: ${userColor};" class="assignedContactLeftSideIcon">${signature}</div>`;
    }
  }
  if (user.contacts.length > 5) {
    mainDiv.style.overflowY = "scroll";
  }
}

function closeContacts(i) {
  let contactList = document.getElementById(`contactList`);
  contactList.style.display = "none";
  let border = document.getElementById(`contactSelectContainer`);
  border.classList.remove("bordercolor");
  let image = document.getElementById(`openerAssignedTo`);
  image.src = "../assets/img/add_task/arrow_drop_down.svg";
  let contactListIcons = document.getElementById("contactListIcons");
  contactListIcons.style.display = "block";
  setTimeout(function () {
    document.body.click();
  }, 0);
  image.onclick = function () {
    openContacts(i);
  };
}

function openContacts(i) {
  let contactList = document.getElementById("contactList");
  let contactListIcons = document.getElementById("contactListIcons");
  let border = document.getElementById(`contactSelectContainer`);
  let image = document.getElementById(`openerAssignedTo`);
  contactList.style.display = "block";
  contactListIcons.style.display = "none";
  border.classList.add("bordercolor");
  image.src = "../assets/img/add_task/arrow_drop_up.svg";
  image.onclick = function () {
    closeContacts(i);
  };
}

async function assignedtoContactBg(i, j) {
  if (user.contacts[i].selected) {
    user.contacts[i].selected = false;
    let container = document.getElementById(`assignedContactContainer${i}`);
    container.classList.remove("assignedContainerBlack");
    let image = document.getElementById(`assignedContactImage${i}`);
    image.src = "../assets/img/add_task/task_box.svg";
    let iconId = document.getElementById(`contactIconNumber${i}`);
    iconId.remove();
    let removeName = user.tasks[j].assignedTo.findIndex(
      (item) => item.name === user.contacts[i].name
    );
    if (removeName !== -1) {
      user.tasks[j].assignedTo.splice(removeName, 1);
    }
  } else {
    user.contacts[i].selected = true;
    let container = document.getElementById(`assignedContactContainer${i}`);
    let contactListIcons = document.getElementById("contactListIconsLine");
    container.classList.add("assignedContainerBlack");
    let image = document.getElementById(`assignedContactImage${i}`);
    image.src = "../assets/img/add_task/task_box_check.svg";
    let signature = document.getElementById(`ContactSignatureIcon${i}`).innerHTML;
    let userColor = user.contacts[i].userColor;
    contactListIcons.innerHTML += `<div id="contactIconNumber${i}" style="background-color: ${userColor};" class="assignedContactLeftSideIcon">${signature}</div>`;
    user.tasks[j].assignedTo.push({
      name: user.contacts[i].name,
      userColor: user.contacts[i].userColor,
    });
  }

  await setItem("users", users);
}

function onclickInputBorder() {
  let border = document.getElementById(`contactSelectContainer`);
  border.classList.add("bordercolor");
}

function filterNamesforAssignedTo() {
  let search = document.getElementById("assignedToContainer").value.toLowerCase();
  let list = document.getElementById("contactList");
  list.innerHTML = "";
  openContacts();
  for (let i = 0; i < user.contacts.length; i++) {
    let name = user.contacts[i].name.toLowerCase();
    if (name.includes(search)) {
      list.innerHTML += filterNamesforAssignedToReturn(i);
      let iconid = document.getElementById(`ContactSignatureIcon${i}`);
      iconid.style.backgroundColor += user.contacts[i].userColor;
    }
  }
}

async function saveCurrentBoardTask(i) {
  let title = document.getElementById(`titelInputContainer`);
  let description = document.getElementById(`descriptionInput`);
  let date = document.getElementById(`dueDateInputContainer`);

  user.tasks[i].title = title.value;
  user.tasks[i].dueDate = date.value;
  user.tasks[i].description = description.value;
  user.tasks[i].prio = pupUpPriorityName;
  await setItem("users", users);
  document.getElementById(`popUpMainContainer`).remove();
  document.getElementById(`blurrContainer`).remove();
  openTask(i);
}
