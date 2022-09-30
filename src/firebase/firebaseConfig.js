import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const FirebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAAdIrjCJFcQUFsfe8ZbEQJLCEgWDQv35o",
    authDomain: "reactrappi2.firebaseapp.com",
    projectId: "reactrappi2",
    storageBucket: "reactrappi2.appspot.com",
    messagingSenderId: "1076009274145",
    appId: "1:1076009274145:web:fd4863914bafb930528c60",
    measurementId: "G-NQ3RBVTW1X"
});

export default FirebaseConfig