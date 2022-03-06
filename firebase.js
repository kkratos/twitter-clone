import {initializeApp, getApp, getApps} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey:process.env.FIREBASE_API,
  authDomain: "twitter-clone-7b8fc.firebaseapp.com",
  projectId: "twitter-clone-7b8fc",
  storageBucket: "twitter-clone-7b8fc.appspot.com",
  messagingSenderId: "1006902194613",
  appId: "1:1006902194613:web:13c867b87c3c2d3365a9fc"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage}