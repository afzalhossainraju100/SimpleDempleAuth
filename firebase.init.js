// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxVEDGW1KJDLFndVLAAVJpYow7v9u4yJ8",
  authDomain: "simple-dimple-auth-30e06.firebaseapp.com",
  projectId: "simple-dimple-auth-30e06",
  storageBucket: "simple-dimple-auth-30e06.firebasestorage.app",
  messagingSenderId: "1062512517812",
  appId: "1:1062512517812:web:800310aa9da021ff9b2de1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
