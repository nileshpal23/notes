// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjB3jlKxwgyK4cA4AQcXJkNGtqzJhnbWk",
  authDomain: "react-notes-8c6c8.firebaseapp.com",
  projectId: "react-notes-8c6c8",
  storageBucket: "react-notes-8c6c8.appspot.com",
  messagingSenderId: "279127879220",
  appId: "1:279127879220:web:e20fff6a51fd8d60cde461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")