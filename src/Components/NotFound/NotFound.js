import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div
            style={{ height: "400px", width: "90%" }}
            className="shadow-2xl mx-auto bg-white rounded-md my-20 py-10"
        >
            <h1 className="font-extrabold text-8xl pt-8">404</h1>
            <h4 className="font-bold my-8">
                WE ARE VERY SORRY, BUT THE PAGE NOT FOUND!
            </h4>
            <NavLink to="/home">
                <button className="bg-black text-yellow-400 tracking-wider px-6 py-3 m-4 uppercase">
                    Back To Homepage
                </button>
            </NavLink>
        </div>
    );
};

export default NotFound;
