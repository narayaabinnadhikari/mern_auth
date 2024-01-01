// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-full-stack.firebaseapp.com",
  projectId: "mern-auth-full-stack",
  storageBucket: "mern-auth-full-stack.appspot.com",
  messagingSenderId: "88492540027",
  appId: "1:88492540027:web:46844b3de589bd7ff2a2de",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
