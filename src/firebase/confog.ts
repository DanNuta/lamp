import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBb7NMYQKDvN8Gpq8JqhEhVdr108swV4gI",
    authDomain: "lamp-ce3d7.firebaseapp.com",
    projectId: "lamp-ce3d7",
    storageBucket: "lamp-ce3d7.appspot.com",
    messagingSenderId: "123447745369",
    appId: "1:123447745369:web:bdb8eb4743a504ab0e4a48"
  };


  firebase.initializeApp(firebaseConfig);

  const firestore = firebase.firestore();

  export {firestore};