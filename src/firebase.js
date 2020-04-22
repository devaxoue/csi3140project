import { firebase } from "@firebase/app";
import "@firebase/firestore";

// firebase init goes here
const firebaseApp = firebase.initializeApp({
});

export const db = firebaseApp.firestore();
