/*
async function setItem(key, value) {
    const STORAGE_TOKEN = "DXZFTQCTDMTN307RSV39G7QWLBSB9ZB6CEFWG1WB";
    const url='https://remote-storage.developerakademie.org/item';
    const payload = { key, value, token:STORAGE_TOKEN };
    

    return fetch(″
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
            } else {
                throw new Error(`Could not find data with key "${key}".`)
            };
        })
        .catch(error => {
            console.log('Error fetching data:', error);
            throw error;
        });
}*/
