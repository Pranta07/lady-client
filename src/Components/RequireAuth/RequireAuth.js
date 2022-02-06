import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const RequireAuth = ({ children }) => {
    let { user, loading } = useFirebase();
    let location = useLocation();

    if (loading) {
        return (
            <div className="m-10">
                <svg
                    class="animate-spin h-5 w-5 bg-yellow-400 mx-auto ..."
                    viewBox="0 0 24 24"
                ></svg>
            </div>
        );
    }

    if (!user?.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
