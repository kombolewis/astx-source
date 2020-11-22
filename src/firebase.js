import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyA3f8XUWWZs1xvvzl4o5uXRJW2VYFsLMY4",
  authDomain: "astrx-59bd7.firebaseapp.com",
  databaseURL: "https://astrx-59bd7.firebaseio.com",
  projectId: "astrx-59bd7",
  storageBucket: "astrx-59bd7.appspot.com",
  messagingSenderId: "241976776699",
  appId: "1:241976776699:web:3dfb1823746a2bf4dc1d5e",
  measurementId: "G-L9LTTJ992D"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

export default fb
