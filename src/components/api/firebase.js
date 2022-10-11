import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "",
  authDomain: "netflix-lone-99e81.firebaseapp.com",
  projectId: "netflix-lone-99e81",
  storageBucket: "netflix-lone-99e81.appspot.com",
  messagingSenderId: "400320191088",
  appId: "1:400320191088:web:53f71c620f1dfae7d6f2b5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;