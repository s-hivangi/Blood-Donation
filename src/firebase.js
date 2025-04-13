// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTzs42CwflCpGFRW6Q3qHyHnPn4I_Wegk",
  authDomain: "blood-donation-a7ecb.firebaseapp.com",
  projectId: "blood-donation-a7ecb",
  storageBucket: "blood-donation-a7ecb.firebasestorage.app",
  messagingSenderId: "213901909746",
  appId: "1:213901909746:web:92c1972635bf216d127a6b",
  measurementId: "G-38LK2P6DRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };