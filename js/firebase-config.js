// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3lgIZ7m8OycFnITe2iA8MUbqvzCoYqRs",
  authDomain: "arorbustracker-b8416.firebaseapp.com",
  databaseURL: "https://arorbustracker-b8416-default-rtdb.firebaseio.com",
  projectId: "arorbustracker-b8416",
  storageBucket: "arorbustracker-b8416.firebasestorage.app",
  messagingSenderId: "581927473953",
  appId: "1:581927473953:web:d34ecc360f06d8e9a56460",
  measurementId: "G-F1C4DB83VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);