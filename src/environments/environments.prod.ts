// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEB5dS_7mPcGE1qMJNdCXxx4yceFTjOF8",
  authDomain: "monetiqued17.firebaseapp.com",
  projectId: "monetiqued17",
  storageBucket: "monetiqued17.appspot.com",
  messagingSenderId: "452700936556",
  appId: "1:452700936556:web:c9578c345c8b42f9277b49",
  measurementId: "G-QH60NEE9XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
