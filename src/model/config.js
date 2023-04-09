import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBVF_fS2KjI-OjYtO8LeTMwdsUg8nAMMJ4",
  authDomain: "tasks-clone-ec9df.firebaseapp.com",
  projectId: "tasks-clone-ec9df",
  storageBucket: "tasks-clone-ec9df.appspot.com",
  messagingSenderId: "99420979429",
  appId: "1:99420979429:web:ab6cc1fdb5194620fa140c",
  measurementId: "G-Z7YMSKN7CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};