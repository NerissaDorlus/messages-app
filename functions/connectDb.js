import { initializeApp, cert, getApps } from "firebase-admin/app";
import serviceAccount from "./credentials.js";
import { getFirestore } from "firebase-admin/firestore";

//this function checks if we are connected to firebase if its not then it will connect
export default function connectDb() {
  if (getApps().length === 0) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }
  return getFirestore();
}
