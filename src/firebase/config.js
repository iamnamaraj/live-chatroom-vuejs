// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBs3uFHbcXjUvXom-9ure1FQxeOKmmDfME",
    authDomain: "netninja-vue-2a439.firebaseapp.com",
    projectId: "netninja-vue-2a439",
    storageBucket: "netninja-vue-2a439.appspot.com",
    messagingSenderId: "360072446490",
    appId: "1:360072446490:web:810e903536db8fbc1707a3",
    measurementId: "G-P01NE2PWQS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

export { projectAuth, projectFirestore, timestamp };