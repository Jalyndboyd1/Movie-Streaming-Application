import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyB1hJM7zZT2li6ECdiEDjaQQUTBfrFnSnk",
    authDomain: "movie-streaming-application.firebaseapp.com",
    projectId: "movie-streaming-application",
    storageBucket: "movie-streaming-application.appspot.com",
    messagingSenderId: "190495186295",
    appId: "1:190495186295:web:2007b5f558e16b499e5572"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);