
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDPMd2YuxUKbmiBy1N_Sz-nyxxeSeWk6EA",
  authDomain: "pandaproject-816a9.firebaseapp.com",
  projectId: "pandaproject-816a9",
  storageBucket: "pandaproject-816a9.firebasestorage.app",
  messagingSenderId: "743677876100",
  appId: "1:743677876100:web:fc3512f747488ddfde2fd1",
  measurementId: "G-5SMT9D38JP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();