import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUhw1wPGBy7Ig_HEI0qkccH55moylxUFs",
  authDomain: "duminstagram-bc246.firebaseapp.com",
  projectId: "duminstagram-bc246",
  storageBucket: "duminstagram-bc246.appspot.com",
  messagingSenderId: "903462617354",
  appId: "1:903462617354:web:8f6c2a001cb759e8417af3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
