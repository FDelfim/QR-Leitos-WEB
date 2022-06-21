// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUrnlc2GWd1CqIgelEU05ExxdVllBUhUU",
    authDomain: "bdleitosja.firebaseapp.com",
    projectId: "bdleitosja",
    storageBucket: "bdleitosja.appspot.com",
    messagingSenderId: "818105979304",
    appId: "1:818105979304:web:10daaec4f85dfca2454d9d",
    measurementId: "G-GN7H9K6VQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);