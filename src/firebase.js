// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcA6lrfCUjGylXk3umPsaogCKMKdmS9H0",
  authDomain: "chat-live-react-mike.firebaseapp.com",
  projectId: "chat-live-react-mike",
  storageBucket: "chat-live-react-mike.appspot.com",
  messagingSenderId: "992136114406",
  appId: "1:992136114406:web:161d127cf33d13410d0b27",
  measurementId: "G-FV9S6FB0YD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
