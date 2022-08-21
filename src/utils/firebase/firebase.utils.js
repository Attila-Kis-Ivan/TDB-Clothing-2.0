import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4Q2-okfisd_stigqTgt-_LWcIu6wrqKQ",
  authDomain: "tdb-clothing-2-db.firebaseapp.com",
  projectId: "tdb-clothing-2-db",
  storageBucket: "tdb-clothing-2-db.appspot.com",
  messagingSenderId: "695449080127",
  appId: "1:695449080127:web:21f17aeabcf8142327838a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
