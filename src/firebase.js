import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-n6QLiGWjdfqin53w-9CepKfMWDBcadQ",
    authDomain: "facebook-clone-d7b20.firebaseapp.com",
    databaseURL: "https://facebook-clone-d7b20.firebaseio.com",
    projectId: "facebook-clone-d7b20",
    storageBucket: "facebook-clone-d7b20.appspot.com",
    messagingSenderId: "319213946068",
    appId: "1:319213946068:web:05b0a751261d654a56e741",
    measurementId: "G-F81FQG0187"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;