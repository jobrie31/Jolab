import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAqmRgdjbjd4N5uqiVVWdhYCMtarP3rT0",
  authDomain: "jolab-14e57.firebaseapp.com",
  projectId: "jolab-14e57",
  storageBucket: "jolab-14e57.firebasestorage.app",
  messagingSenderId: "119243464423",
  appId: "1:119243464423:web:433ffad2bbae8d8c998c42",
  measurementId: "G-P5SBRSYF2Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };