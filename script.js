const STORAGE_TOKEN = 'J4LQKS1ZDS5WC5NTX6XUA3MD2ROKE6VOP8A4QBBP';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

// ---------------------------------------------------------------------------

async function init() {
  await includeHTML();
}
// ---------------------------------------------------------------------------

async function setItem(key, value) {
  const payload = { key, value, token: STORAGE_TOKEN };
  return fetch(STORAGE_URL, {
    method: "POST",
    body: JSON.stringify(payload),
  }).then(res => res.json());
}

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
