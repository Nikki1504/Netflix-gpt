// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtXe15VkKi0KSOzWZyqVm9oUYaVF6lMfk",
  authDomain: "netflixgpt-99ad6.firebaseapp.com",
  projectId: "netflixgpt-99ad6",
  storageBucket: "netflixgpt-99ad6.firebasestorage.app",
  messagingSenderId: "33247829106",
  appId: "1:33247829106:web:21f8336e638f3078bd36eb",
  measurementId: "G-6BFNW46ZC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
