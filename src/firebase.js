// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCMCwYUwAfWuwiaV4b_F9i8DMbpYwGvTlM",
  authDomain: "messier-music.firebaseapp.com",
  projectId: "messier-music",
  storageBucket: "messier-music.appspot.com",
  messagingSenderId: "586205334651",
  appId: "1:586205334651:web:5e21c7debca1fc391f66de",
  measurementId: "G-7719L1ZQLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

