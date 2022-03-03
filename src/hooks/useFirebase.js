import { useState } from "react";
import initializeFirebaseApp from "../Components/Login/Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    TwitterAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";

initializeFirebaseApp();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const auth = getAuth();

    const handleGoogleSignIn = (from, navigate) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                saveUser(result.user);
                navigate(from);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    };

    const handleTwitterSignIn = (from, navigate) => {
        setLoading(true);
        signInWithPopup(auth, twitterProvider)
            .then((result) => {
                setUser(result.user);
                navigate(from);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    };

    const handleRegister = (name, email, password, navigate) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                saveUser(result.user);
                handleUpdate(name);
                setError("");
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleSignIn = (email, password, from, navigate) => {
        setLoading(true);
        // console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in
                setError("");
                navigate(from);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleUpdate = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                // Profile updated!
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const saveUser = (newUser) => {
        const user = {
            email: newUser.email,
            role: "customer",
        };
        fetch("https://ancient-dawn-22893.herokuapp.com/user", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        });
    };

    const handleSignOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                // console.log("Sign-out successful.");
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
            setLoading(false);
        });
    }, [auth]);

    return {
        user,
        error,
        loading,
        handleGoogleSignIn,
        handleTwitterSignIn,
        handleRegister,
        handleSignIn,
        handleSignOut,
    };
};

export default useFirebase;
