import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCuVeE0RQffxwA_2EMtTc9MFOwb-XpiPU0",
  authDomain: "react-ecommerce-c08ea.firebaseapp.com",
  databaseURL: "https://react-ecommerce-c08ea.firebaseio.com",
  projectId: "react-ecommerce-c08ea",
  storageBucket: "react-ecommerce-c08ea.appspot.com",
  messagingSenderId: "172439957755",
  appId: "1:172439957755:web:935ce5af001369660c805e",
  measurementId: "G-Y3D310RP4Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
