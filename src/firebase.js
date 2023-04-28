import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDNqqlyjrHV2NJYY8CUG-WCOUvKP9x6iJU",
    authDomain: "react-blog-app-ca93c.firebaseapp.com",
    projectId: "react-blog-app-ca93c",
    storageBucket: "react-blog-app-ca93c.appspot.com",
    messagingSenderId: "330026587612",
    appId: "1:330026587612:web:123c21e1a621d0bf222b19"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };