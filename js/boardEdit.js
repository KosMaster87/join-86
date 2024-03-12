function loadContacts(i) {
    let mainDiv = document.getElementById(`contactList`);
    let totalHeight = Math.min(user.contacts.length * 52, 260);
    mainDiv.style.height = `${totalHeight}px`;
    for (let c = 0; c < Math.min(user.contacts.length); c++) {
      contactSignature = user.contacts[c].signature;
      contactName = user.contacts[c].name;
      mainDiv.innerHTML += loadContactsReturn(i);
      iconid = document.getElementById(`ContactSignatureIcon${i}`);
      iconid.style.backgroundColor = user.contacts[i].userColor;
    }
    if (user.contacts.length > 5) {
      mainDiv.style.overflowY = "scroll";
    }
    openContacts(i);
  }
  function loadContactsReturn(i) {
    return `
    <div
        id="assignedContactContainer${i}"
        onclick="assignedtoContactBg(${i}, '${contactName}')"
        class="assignedContactContainer"
      >
        <div class="assignedContactLeftSide">
          <div id="ContactSignatureIcon${i}" class="assignedContactLeftSideIcon">${contactSignature}</div>
          <p id="contactName${i}"  class="assignedContactNameClass">${contactName}</p>
        </div>
        <img
          id="assignedContactImage${i}"
          src="../assets/img/add_task/task_box.svg"
        />
      </div>
    `;
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
    for (let n = 0; n < user.contacts.length; n++) {
      let contactNameElement = document.getElementById(`contactName${n}`);
      let contactName = contactNameElement.textContent.trim();
  
      if (user.tasks[i].assignedTo.includes(contactName)) {
        let contactListIcons = document.getElementById("contactListIconsLine");
        contactListIcons.innerHTML += `<div id="contactIconNumber${i}" style="background-color: ${userColor};" class="assignedContactLeftSideIcon">${signature}</div>`;
      }
  }
  }

  async function assignedtoContactBg(j,i) {
    let container = document.getElementById(`assignedContactContainer${i}`);
    let contactListIcons = document.getElementById("contactListIconsLine");
    container.classList.add("assignedContainerBlack");
    let image = document.getElementById(`assignedContactImage${i}`);
    image.src = "../assets/img/add_task/task_box_check.svg";
    let signature = document.getElementById(`ContactSignatureIcon${i}`).innerHTML;
    let userColor = user.contacts[j].userColor;
    contactListIcons.innerHTML += `<div id="contactIconNumber${i}" style="background-color: ${userColor};" class="assignedContactLeftSideIcon">${signature}</div>`;
    container.onclick = function () {
      removeassignedtoContactBg(i);
    };
    await setItem("users", users);
  }
