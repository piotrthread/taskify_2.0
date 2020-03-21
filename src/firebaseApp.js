import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIhN992H-MDNbYWjMMAW_fboZsccpn_b0",
  authDomain: "taskify-3c755.firebaseapp.com",
  databaseURL: "https://taskify-3c755.firebaseio.com",
  projectId: "taskify-3c755",
  storageBucket: "taskify-3c755.appspot.com",
  messagingSenderId: "318912323792",
  appId: "1:318912323792:web:14ba82973b19ce893fbed5"
};

const db = firebase.initializeApp(firebaseConfig);

export default db;
