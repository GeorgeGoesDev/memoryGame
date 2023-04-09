import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

require('dotenv').config()

const firebaseConfig = {
    apiKey: "AIzaSyB1U9XW3PXkvdKK_YJBnjL-5mCPiGCCwmM",
    authDomain: "memorygame-9de72.firebaseapp.com",
    projectId: "memorygame-9de72",
    storageBucket: "memorygame-9de72.appspot.com",
    messagingSenderId: "1001318811600",
    appId: "1:1001318811600:web:a99ba08b1e187e24ca5bd5",
    measurementId: "G-4Y0D4TZF98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



export const dbConnection = db;
export const authenticator = auth;
export const dbStorage = storage;



