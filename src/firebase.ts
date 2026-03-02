import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDSJ5ubLeDJQfM2I3X7zI2QShTLBOuV7U",
  authDomain: "soke-digital-admin.firebaseapp.com",
  projectId: "soke-digital-admin",
  storageBucket: "soke-digital-admin.firebasestorage.app",
  messagingSenderId: "194962921445",
  appId: "1:194962921445:web:ffbdab481ae65396ce410c",
  measurementId: "G-QNYSFXZ32X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
