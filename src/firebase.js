import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAzehh4ySPitJut-Wt760V9gX7Pdm71MI8",
  authDomain: "chat-9c2a6.firebaseapp.com",
  projectId: "chat-9c2a6",
  storageBucket: "chat-9c2a6.appspot.com",
  messagingSenderId: "70810007716",
  appId: "1:70810007716:web:6e6fb7aca9729f419e8e31",
  measurementId: "G-L7M9808DJH"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);

export const storage = getStorage();
export const db = getFirestore();