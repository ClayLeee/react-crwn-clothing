// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKXWzTQKlUH92fO9pHij1E5goHU-w2eHQ",
  authDomain: "crwn-clothing-db-ca37b.firebaseapp.com",
  projectId: "crwn-clothing-db-ca37b",
  storageBucket: "crwn-clothing-db-ca37b.appspot.com",
  messagingSenderId: "80138188303",
  appId: "1:80138188303:web:626cdbf0e9a3efbbb7557a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
