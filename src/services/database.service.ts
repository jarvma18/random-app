import { Storage } from "@ionic/storage";

let storage: Storage;

export const createStore = async () => {
  const store = new Storage();
  await store.create();
};

export const set = (key: string, val: string) => {
  storage.set(key, val);
};

export const get = async (key: string) => {
  const val = await storage.get(key);
  return val;
};

export const remove = async (key: string) => {
  await storage.remove(key);
};

export const clear = async () => {
  await storage.clear();
};