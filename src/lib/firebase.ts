import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4_NqjIiQiWGNskOmkV-T_NjzzJAPX_6s",
  authDomain: "club-clothing-ecommerce-e7cc0.firebaseapp.com",
  projectId: "club-clothing-ecommerce-e7cc0",
  storageBucket: "club-clothing-ecommerce-e7cc0.firebasestorage.app",
  messagingSenderId: "435960140408",
  appId: "1:435960140408:web:524c533adf2ad6c2cad38d",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
