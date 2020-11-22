import firebase from 'firebase'
// require("firebase/firestore")
// import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "astrx-59bd7",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

export default fb
