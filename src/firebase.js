// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyBwxejYZoZj_cYVWJ7ZN8t3nqoMg5dU5Ys",
//   authDomain: "maybatch-2022.firebaseapp.com",
//   projectId: "maybatch-2022",
//   storageBucket: "maybatch-2022.appspot.com",
//   messagingSenderId: "1052711431988",
//   appId: "1:1052711431988:web:df10fb4f295c9a7cdfbf61",
//   measurementId: "G-7QTBKJMEM4"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBeyvwfMwF2in6E2uRPqdzarqM30h3jc5g",
  authDomain: "clone-c7180.firebaseapp.com",
  projectId: "clone-c7180",
  storageBucket: "clone-c7180.appspot.com",
  messagingSenderId: "1026620406726",
  appId: "1:1026620406726:web:722478e8d0c7c21917d0c7",
  measurementId: "G-V99FTJQY8E"
};


const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();


export {db, auth};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
