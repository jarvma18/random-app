import { Storage, Drivers } from "@ionic/storage";

let storage: Storage;

function pageTimesItems(page: number, itemsPerPage: number) {
  return page * itemsPerPage;
}

export const createStore = async () => {
  storage = new Storage({
    name: 'database',
    driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
  });
  await storage.create();
};

export const setRandom = async (val: number) => {
  const key = 'randoms';
  let randoms = JSON.parse(await storage.get(key));
  if (!randoms) {
    await storage.set(key, JSON.stringify([val]));
    return;
  }
  await storage.set(key, JSON.stringify([...randoms, val]));
  return;
};

export const getRandomsPerPage = async (page: number, itemsPerPage: number) => {
  const key = 'randoms';
  const startingIndex = pageTimesItems(page, itemsPerPage);
  const endingIndex = itemsPerPage + pageTimesItems(page, itemsPerPage);
  let val = JSON.parse(await storage.get(key));
  if (val) {
    val = val.slice(startingIndex, endingIndex);
    return val;
  }
};

export const clear = async () => {
  await storage.clear();
};