import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1IAgBUi5fTWq9g6NPWAnh-18_218GJqo",
  authDomain: "chat-app-d2133.firebaseapp.com",
  projectId: "chat-app-d2133",
  storageBucket: "chat-app-d2133.appspot.com",
  messagingSenderId: "606293767047",
  appId: "1:606293767047:web:91d249cdcf273515bb5922"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
