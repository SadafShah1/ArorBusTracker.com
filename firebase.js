// ---------------- Firebase Setup (Global for all Student Pages) ----------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
  get
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Your Firebase Project Keys
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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

