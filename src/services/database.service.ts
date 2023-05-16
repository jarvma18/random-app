import { Storage, Drivers } from "@ionic/storage";

let storage: Storage;

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

export const getRandoms = async () => {
  const key = 'randoms';
  const val = JSON.parse(await storage.get(key));
  return val;
};

export const clear = async () => {
  await storage.clear();
};