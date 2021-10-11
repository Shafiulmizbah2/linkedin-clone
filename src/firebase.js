import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsEOvgBIV8pwx3YtuWgxHyOG6TSDn4ftc",
  authDomain: "linkedin-clone-144b3.firebaseapp.com",
  projectId: "linkedin-clone-144b3",
  storageBucket: "linkedin-clone-144b3.appspot.com",
  messagingSenderId: "328057650158",
  appId: "1:328057650158:web:c0af01f1bc69e32f06acff",
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
