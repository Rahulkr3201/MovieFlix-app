// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzlWg3wVBei7BB1Rpxx8HtKFMvv3zgn1k",
  authDomain: "movieflix-c6d1b.firebaseapp.com",
  projectId: "movieflix-c6d1b",
  storageBucket: "movieflix-c6d1b.appspot.com",
  messagingSenderId: "97908693763",
  appId: "1:97908693763:web:3334a3ddfe4e9ff4c92736",
  measurementId: "G-WD9K6XQ5HP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
