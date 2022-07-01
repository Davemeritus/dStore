import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASyL4vDdKOnxomf8rCPIv99zNrmba7exY",
  authDomain: "d-store-cf587.firebaseapp.com",
  projectId: "d-store-cf587",
  storageBucket: "d-store-cf587.appspot.com",
  messagingSenderId: "554389397948",
  appId: "1:554389397948:web:c4c7549838e3f7fb66cbb9",
  measurementId: "G-76HNX3JR4Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };

