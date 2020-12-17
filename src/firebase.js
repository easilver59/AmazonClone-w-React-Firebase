import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4HG1mu60tZwnLHR-2hFqbKWlTsE41bnw",
  authDomain: "clone-cefc0.firebaseapp.com",
  databaseURL: "https://clone-cefc0.firebaseio.com",
  projectId: "clone-cefc0",
  storageBucket: "clone-cefc0.appspot.com",
  messagingSenderId: "1047083893803",
  appId: "1:1047083893803:web:784f1081ad5824fd46966e",
  measurementId: "G-70B26RFX76"
});



const auth = firebase.auth(); 

export { auth };