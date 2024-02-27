const STORAGE_TOKEN = "DXZFTQCTDMTN307RSV39G7QWLBSB9ZB6CEFWG1WB"; // #2
// const STORAGE_TOKEN = "J4LQKS1ZDS5WC5NTX6XUA3MD2ROKE6VOP8A4QBBP"; // #1
const STORAGE_URL = "https://remote-storage.developerakademie.org/item";

async function init() {
  await includeHTML();
}

/**
 * The instruction to load from remote storage.
 */
async function loadUsers() {
  try {
    console.log("loadUsers: Start");
    users = JSON.parse(await getItem("users"));
    console.log("loadUsers: Users loaded successfully");
    console.log(users);
  } catch (e) {
    console.error("loadUsers: Loading error:", e);
  }
}

/**
 * Load data from backend.
 * @param {Remote key as string} key
 * @returns The answer to the query.
 */
async function getItem(key) {
  const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const dataX = await response.json();

      if (dataX && dataX.data && dataX.data.value) {
        return dataX.data.value;
      } else {
        throw `Could not find data with key "${key}".`;
      }
    } else {
      throw `Error fetching data with key "${key}". Status: ${response.status}`;
    }
  } catch (error) {
    console.error("getItem: Fetch error:", error);
    throw error;
  }
}

/**
 * Push request to backend.
 * Either it is fulfilled successfully (resolved) or it fails (rejected).
 * @param {Remote key as string} key
 * @param {Data to save as in string.} value
 * @returns The confirmation from the server as an object.
 */
// async function setItem(key, value) {
//   const payload = { key, value, token: STORAGE_TOKEN };
//   return fetch(STORAGE_URL, {
//     method: "POST",
//     body: JSON.stringify(payload),
//   }).then((res) => res.json());
// }

/**
 * Push request to backend.
 * Either it is fulfilled successfully (resolved) or it fails (rejected).
 * @param {Remote key as string} key
 * @param {Data to save as in string.} value
 * @returns The confirmation from the server as an object.
 */
async function setItem(key, value) {
  if (!key || !value) {
    console.error("Missing required fields: key, value");
    return Promise.reject("Missing required fields: key, value");
  }

  const payload = { key, value, token: STORAGE_TOKEN };
  await theAnswer(payload);
}

/**
 * Just request of the response.
 * @param {All the stuff is push into remote-storage.} payload 
 * @returns "data" as object.
 */
async function theAnswer(payload) {
 try {
    const response = await fetch(STORAGE_URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return response.json();
    } else {
      console.error(`Server error: ${response.status}`);
      return Promise.reject(`Server error: ${response.status}`);
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return Promise.reject("Fetch error");
  }
}