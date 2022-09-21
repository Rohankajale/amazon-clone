
import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYb2J1SxFXBZV-N3r7cR-1fzDC3EbHHNM",
    authDomain: "clone-3cdbb.firebaseapp.com",
    projectId: "clone-3cdbb",
    storageBucket: "clone-3cdbb.appspot.com",
    messagingSenderId: "453743839032",
    appId: "1:453743839032:web:dd2e3c3380e62e707623cd",
    measurementId: "G-V8SFRTKM00"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };