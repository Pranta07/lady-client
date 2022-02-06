import { useState } from "react";
import initializeFirebaseApp from "../Components/Login/Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

initializeFirebaseApp();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState();

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => setUser(result.user))
            .catch((error) => setError(error.message));
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            // User is signed out
            setUser({});
        }
    });
    return { user, error, handleGoogleSignIn, handleSignOut };
};

export default useFirebase;
