import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmIC4wi7aCnb1MXVw_Vb-_rRxBTC3LzXM",
  authDomain: "zestory-a0418.firebaseapp.com",
  projectId: "zestory-a0418",
  storageBucket: "zestory-a0418.firebasestorage.app",
  messagingSenderId: "155038021838",
  appId: "1:155038021838:web:0a1d1473ef6b3ad29a789f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
