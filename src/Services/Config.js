import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRibdevgU-h5q08JtFJob1_fVFMtmPbcQ",
  authDomain: "squadgamer1-83553.firebaseapp.com",
  projectId: "squadgamer1-83553",
  storageBucket: "squadgamer1-83553.appspot.com",
  messagingSenderId: "669314019626",
  appId: "1:669314019626:web:6fce99e45b1f8e899cae53"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
