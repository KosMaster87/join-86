// --------------------------------------------------------

// --------------------------------------------------------

/**
 * The registration of a new user.
 */
async function registerNewUser() {
  let registerInputName = document.getElementById("registerInputName");
  let registerInputEmail = document.getElementById("registerInputEmail");
  let registerInputPassword = document.getElementById("registerInputPassword");
  let registerInputPasswordConfirm = document.getElementById("registerInputPasswordConfirm");
  let registerBtn = document.getElementById("registerBtn");
  let colorCode = "#ff3d00";
  let contacts = [];

  try {
    await loadUsers();

    const IndexForUser = users.length + 1;

    registerBtn.disabled = true;

    users.push({
      index: IndexForUser,
      name: registerInputName.value,
      email: registerInputEmail.value,
      password: registerInputPassword.value,
      colorCode,
      tasks: [
        {
          status: "to-do",
          title: "Task 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          assignedTo: ["John Doe", "Hohn Can", "Lika Fan"],
          dueDate: "2024-03-31",
          prio: "Urgent",
          category: "User Story",
          subtasks: [
            {
              name: "erster sub",
              done: false,
            },
            {
              name: "2ter sub",
              done: false,
            },
            {
              name: "3ter sub",
              done: false,
            },
          ],
        },
        {
          status: "progress",
          title: "Task 2",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          assignedTo: ["John Doe", "Hohn Can", "Lika Fan"],
          dueDate: "2024-04-15",
          prio: "Medium",
          category: "Technical Task",
          subtasks: [
            {
              name: "erster sub",
              done: false,
            },
            {
              name: "2ter sub",
              done: false,
            },
            {
              name: "3ter sub",
              done: false,
            },
          ],
        },
        {
          status: "done",
          title: "Task 3",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          assignedTo: ["John Doe", "Hohn Can", "Lika Fan"],
          dueDate: "2024-04-02",
          prio: "Low",
          category: "Technical Task",
          subtasks: [
            {
              name: "erster sub",
              done: false,
            },
            {
              name: "2ter sub",
              done: false,
            },
            {
              name: "3ter sub",
              done: false,
            },
          ],
        },
        {
          status: "await",
          title: "Task 3",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          assignedTo: ["John Doe", "Hohn Can", "Lika Fan"],
          dueDate: "2024-04-02",
          prio: "Low",
          category: "User Story",
          subtasks: [
            {
              name: "erster sub",
              done: false,
            },
            {
              name: "2ter sub",
              done: false,
            },
            {
              name: "3ter sub",
              done: false,
            },
          ],
        },
      ],
      contacts: [
        // {
        //   userId: 1,
        //   contactId: 101,
        //   name: "John Doe",
        //   email: "john.doe@example.com",
        //   phone: "123-456-7890",
        //   userColor: "#ff0000",
        //   signature: "Lorem ipsum",
        // },
        // {
        //   userId: 2,
        //   contactId: 102,
        //   name: "Jane Doe",
        //   email: "jane.doe@example.com",
        //   phone: "987-654-3210",
        //   userColor: "#00ff00",
        //   signature: "Dolor sit amet",
        // },
        // {
        //   userId: 3,
        //   contactId: 103,
        //   name: "Alice Johnson",
        //   email: "alice.johnson@example.com",
        //   phone: "555-123-4567",
        //   userColor: "#0000ff",
        //   signature: "Consectetur adipiscing elit",
        // },
        // {
        //   userId: 4,
        //   contactId: 104,
        //   name: "Bob Smith",
        //   email: "bob.smith@example.com",
        //   phone: "111-222-3333",
        //   userColor: "#ffcc00",
        //   signature: "Sed do eiusmod tempor incididunt",
        // },
        // {
        //   userId: 5,
        //   contactId: 105,
        //   name: "Eva Brown",
        //   email: "eva.brown@example.com",
        //   phone: "444-555-6666",
        //   userColor: "#9900cc",
        //   signature: "Ut labore et dolore magna aliqua",
        // },
        // {
        //   userId: 6,
        //   contactId: 106,
        //   name: "Chris Wilson",
        //   email: "chris.wilson@example.com",
        //   phone: "777-888-9999",
        //   userColor: "#33cc33",
        //   signature: "Duis aute irure dolor in reprehenderit",
        // },
        // {
        //   userId: 7,
        //   contactId: 107,
        //   name: "Sophie Davis",
        //   email: "sophie.davis@example.com",
        //   phone: "888-999-0000",
        //   userColor: "#ff6600",
        //   signature: "Excepteur sint occaecat cupidatat non proident",
        // },
        // {
        //   userId: 8,
        //   contactId: 108,
        //   name: "Mike White",
        //   email: "mike.white@example.com",
        //   phone: "123-987-6543",
        //   userColor: "#cc0033",
        //   signature: "Culpa qui officia deserunt mollit anim id est laborum",
        // },
        // {
        //   userId: 9,
        //   contactId: 109,
        //   name: "Olivia Miller",
        //   email: "olivia.miller@example.com",
        //   phone: "999-111-2222",
        //   userColor: "#6699cc",
        //   signature: "Nisi ut aliquip ex ea commodo consequat",
        // },
        // {
        //   userId: 10,
        //   contactId: 110,
        //   name: "David Lee",
        //   email: "david.lee@example.com",
        //   phone: "987-654-3210",
        //   userColor: "#ff99cc",
        //   signature:
        //     "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        // },
      ],
    });

    console.log(users);
    await secondaryFunctions(IndexForUser);
  } catch (error) {
    console.error("Fehler bei der Registrierung:", error);
  }
}

/**
 * Im backand mit dem Schlüssel das Array speichern.
 * @param {object} users
 */
async function secondaryFunctions(IndexForUser) {
  await setItem("users", JSON.stringify(users));
  await setItem("currentIndex", IndexForUser);
  resetForm();
  redirectToLoin();
}

// --------------------------------------------------------

/**
 * Reset registration form values.
 */
function resetForm() {
  registerInputName.value = "";
  registerInputEmail.value = "";
  registerInputPassword.value = "";
  registerInputPasswordConfirm.value = "";
  registerBtn.disabled = false;
}

/**
 * Switch back from register page to login page.
 */
function redirectToLoin() {
  let registerMain = document.getElementById("registerMain");
  let loginMain = document.getElementById("loginMain");
  loginMain.style.display = "flex";
  registerMain.style.display = "none";
}

// --------------------------------------------------------

/**
 * To hide or show currentpassword in any fild.
 * @param {each input from origin HTML-element} passwordId
 * @param {each inputImage from origin HTML-element} imageId
 */
function changeToShowCurrentPassword(passwordId, imageId) {
  let hideThePassword = document.getElementById(passwordId);
  let hideThePasswordImage = document.getElementById(imageId);

  if (hideThePassword.type == "password") {
    hideThePassword.type = "text";
    hideThePasswordImage.src = "/assets/img/login/visibilityOff.svg";
  } else {
    hideThePassword.type = "password";
    hideThePasswordImage.src = "/assets/img/login/lock.svg";
  }
}

/**
 * Change border color from parent element.
 * @param {string} containerId
 */
function changeBorderColor(containerId) {
  let focusContainer = document.getElementById(containerId);
  focusContainer.classList.add("active");
}

/**
 * Change border color from parent element.
 * @param {string} containerId
 */
function resetBorderColor(containerId) {
  let focusContainer = document.getElementById(containerId);
  focusContainer.classList.remove("active");
}
