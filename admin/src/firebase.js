// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVjcCqLC3SsfRf97Ut3n3uq3E51WvW-dw",
    authDomain: "shop-99d1b.firebaseapp.com",
    projectId: "shop-99d1b",
    storageBucket: "shop-99d1b.appspot.com",
    messagingSenderId: "184385945932",
    appId: "1:184385945932:web:64eac9d547836b7588cfe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;