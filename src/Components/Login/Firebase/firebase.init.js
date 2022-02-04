import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebaseApp = () => {
    initializeApp(firebaseConfig);
};

export default initializeFirebaseApp;
