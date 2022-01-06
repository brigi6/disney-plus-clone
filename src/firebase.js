import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKOJ9IxaUy4M6y7q4mFKW-ezplflVWwaM",
  authDomain: "disneyplus-clone-18ecf.firebaseapp.com",
  projectId: "disneyplus-clone-18ecf",
  storageBucket: "disneyplus-clone-18ecf.appspot.com",
  messagingSenderId: "333654278127",
  appId: "1:333654278127:web:297e898e741184f78b001a",
  measurementId: "G-TCQGMXGVC3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
