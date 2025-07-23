// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kech-realestate.firebaseapp.com",
  projectId: "kech-realestate",
  storageBucket: "kech-realestate.firebasestorage.app",
  messagingSenderId: "1018547239103",
  appId: "1:1018547239103:web:6a8ea3fa5cae487cffae0a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
