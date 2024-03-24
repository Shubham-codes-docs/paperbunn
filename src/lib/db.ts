import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebaseConfig";

const db = getDatabase(app);

export const writeData = (path: string, data: any) => {
  const res = set(ref(db, path), data)
    .then(() => {
      return new Promise((resolve) => {
        resolve(true);
      });
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      return new Promise((resolve) => {
        resolve(false);
      });
    });
  console.log("res", res);
  return res;
};
