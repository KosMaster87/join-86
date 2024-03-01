
//TODO: implement getter und setterItem
//TODO: connection to storage
//TODO: implement mockUpData  


async function setItem(key, value) {
    const url='https://remote-storage.developerakademie.org/item';
    const payload = { key, value, token:STORAGE_TOKEN };
    

    return fetch(
        url,
        { method: 'POST', body: JSON.stringify(payload) })
        .then(res => res.json());
}


async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;

    return fetch(url)
        .then(res => res.json())
        .then(res => {
            if (res.data) {
                return res.data.value;
            } throw `Could not find data with key "${key}".`;
        });
}
