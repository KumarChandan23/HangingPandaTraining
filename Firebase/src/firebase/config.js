import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDzqRR4aZXPV5HHADp_bkPRTibM9TfcGmQ",
    authDomain: "todo-app-a4db3.firebaseapp.com",
    projectId: "todo-app-a4db3",
    storageBucket: "todo-app-a4db3.firebasestorage.app",
    messagingSenderId: "544926050148",
    appId: "1:544926050148:web:f251c18b2029325a1c3c71",
    measurementId: "G-2F94NQRN19"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
