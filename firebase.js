import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYAyX6-wIbSATRnbBS5fPGltkVryQiHFo",
  authDomain: "signal-clone-rn-5a07b.firebaseapp.com",
  projectId: "signal-clone-rn-5a07b",
  storageBucket: "signal-clone-rn-5a07b.appspot.com",
  messagingSenderId: "508092442995",
  appId: "1:508092442995:web:ea992a90ba15ad1c557d06",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
