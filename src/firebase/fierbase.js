import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnJy4S_YwbWuRcm-lqcOnfC3ZnokIMfp4",
  authDomain: "my-dragon-project-761b6.firebaseapp.com",
  projectId: "my-dragon-project-761b6",
  storageBucket: "my-dragon-project-761b6.firebasestorage.app",
  messagingSenderId: "232913184891",
  appId: "1:232913184891:web:a042e21b331924c1dadade",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// npm install -g firebase-tools
