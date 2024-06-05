import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBs3uFHbcXjUvXom-9ure1FQxeOKmmDfME",
    authDomain: "netninja-vue-2a439.firebaseapp.com",
    projectId: "netninja-vue-2a439",
    storageBucket: "netninja-vue-2a439.appspot.com",
    messagingSenderId: "360072446490",
    appId: "1:360072446490:web:810e903536db8fbc1707a3",
    measurementId: "G-P01NE2PWQS"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }
