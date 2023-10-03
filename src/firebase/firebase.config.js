// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuqwXdLJalwUeFEX-ml7_Jl4VjQdup6mw",
  authDomain: "auth-moha-milon-4c6cd.firebaseapp.com",
  projectId: "auth-moha-milon-4c6cd",
  storageBucket: "auth-moha-milon-4c6cd.appspot.com",
  messagingSenderId: "880811400595",
  appId: "1:880811400595:web:07f8045df0de4877ad1c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;