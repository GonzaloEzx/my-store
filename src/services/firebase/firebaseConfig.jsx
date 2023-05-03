// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVWsNRu1H5hPiOnYau1mcyWAleRTSPLF8",
  authDomain: "checommers.firebaseapp.com",
  projectId: "checommers",
  storageBucket: "checommers.appspot.com",
  messagingSenderId: "903207878076",
  appId: "1:903207878076:web:de2ff2d5e7b00e5b9c3fb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const initFirebase = () => app;
export const db = getFirestore(app)