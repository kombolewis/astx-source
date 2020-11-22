import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

export default fb
