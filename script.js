const STORAGE_TOKEN = "J4LQKS1ZDS5WC5NTX6XUA3MD2ROKE6VOP8A4QBBP";
const STORAGE_URL = "https://remote-storage.developerakademie.org/item";

// ---------------------------------------------------------------------------

async function init() {
  await includeHTML();
  await loadUsers();
}

// ---------------------------------------------------------------------------

async function setItem(key, value) {
  const payload = { key, value, token: STORAGE_TOKEN };
  return fetch(STORAGE_URL, {
    method: "POST",
    body: JSON.stringify(payload),
  }).then((res) => res.json());
}

async function getItem(key) {
  const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
  return (
    fetch(url)
      // .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          return res.data.value;
        }
        throw `Could not find data with key "${key}".`;
      })
  );
}
