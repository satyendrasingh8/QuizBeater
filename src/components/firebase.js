import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA1XaUyx8LcXy86NAOeOjSWjD_fV474uVk",
    authDomain: "quizbeater-cf998.firebaseapp.com",
    projectId: "quizbeater-cf998",
    storageBucket: "quizbeater-cf998.appspot.com",
    messagingSenderId: "218138793028",
    appId: "1:218138793028:web:01ec215f848ab88dd91811",
    measurementId: "G-VHJD12LVP8"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default db;