import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const AdminRoute = ({ children }) => {
    const { user, loading } = useFirebase();
    const [admin, setAdmin] = useState(false);
    const [done, setDone] = useState(false);

    let location = useLocation();

    useEffect(() => {
        if (!loading) {
            setDone(false);
            fetch(`http://localhost:5000/user/${user.email}`)
                .then((res) => res.json())
                .then((user) => {
                    if (user?.role === "admin") {
                        setAdmin(true);
                    }
                })
                .finally(() => setDone(true));
        }
    }, [loading]);

    if (loading || !done) {
        return (
            <div className="m-10">
                <svg
                    className="animate-spin h-5 w-5 bg-yellow-400 mx-auto"
                    viewBox="0 0 24 24"
                ></svg>
            </div>
        );
    }

    if (user?.email && admin) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default AdminRoute;
