// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-c2197.firebaseapp.com",
  projectId: "blog-c2197",
  storageBucket: "blog-c2197.appspot.com",
  messagingSenderId: "281982561353",
  appId: "1:281982561353:web:e039a76015aaf5df366398"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);