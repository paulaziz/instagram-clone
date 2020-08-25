import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBI7VXczb2F5GZqXYnvMqKUGbp9fpz7lnQ",
  authDomain: "instagram-clone-28170.firebaseapp.com",
  databaseURL: "https://instagram-clone-28170.firebaseio.com",
  projectId: "instagram-clone-28170",
  storageBucket: "instagram-clone-28170.appspot.com",
  messagingSenderId: "823025738128",
  appId: "1:823025738128:web:7ade470dde2a4eb983d315",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
