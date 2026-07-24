import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "sd-artist-base.firebaseapp.com",
  projectId: "sd-artist-base",
  storageBucket: "sd-artist-base.firebasestorage.app",
  messagingSenderId: "840807965785",
  appId: "1:840807965785:web:796b697a42a520a0b4fd48",
  measurementId: "G-WT56NFB56N",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
