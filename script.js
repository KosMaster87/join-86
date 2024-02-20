const STORAGE_TOKEN = "P3KDB0PTEEJCOX7KR2BOPMHMSBQ89ZMS58AIISJ7";
const STORAGE_URL = "https://remote-storage.developerakademie.org/item";

async function init() {
  await includeHTML();
  await loadAllUsers();
}