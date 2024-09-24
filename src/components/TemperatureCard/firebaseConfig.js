// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzV_pmdA_bF35qS4Yxp7BMCa5yE7Nd0mc",
    authDomain: "smart-agro-dcfd0.firebaseapp.com",
    projectId: "smart-agro-dcfd0",
    storageBucket: "smart-agro-dcfd0.appspot.com",
    databaseURL: "https://smart-agro-dcfd0-default-rtdb.firebaseio.com/",
    messagingSenderId: "792568032538",
    appId: "1:792568032538:web:04316a930990666586d0a3",
    measurementId: "G-M8V3XZSSYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database }; 