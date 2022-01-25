import React, { useState } from "react";

const DressCollection = () => {
    const [popular, setPopular] = useState("text-4xl font-bold");
    const [recent, setRecent] = useState("text-2xl font-bold");
    const [random, setRandom] = useState("text-2xl font-bold");

    const handlePopular = () => {
        setPopular("text-4xl font-bold");
        setRecent("text-2xl font-bold");
        setRandom("text-2xl font-bold");
    };
    const handleRecent = () => {
        setPopular("text-2xl font-bold");
        setRecent("text-4xl font-bold");
        setRandom("text-2xl font-bold");
    };
    const handleRandom = () => {
        setPopular("text-2xl font-bold");
        setRecent("text-2xl font-bold");
        setRandom("text-4xl font-bold");
    };

    return (
        <div className="container mx-auto">
            <div className="my-3">
                <p className="uppercase py-4 tracking-widest">
                    Dress Collecton
                </p>
                <h1 className="uppercase tracking-widest text-3xl">
                    <span className={popular} onClick={() => handlePopular()}>
                        Popular
                    </span>
                    {" / "}
                    <span className={recent} onClick={() => handleRecent()}>
                        Recent
                    </span>
                    {" / "}
                    <span className={random} onClick={() => handleRandom()}>
                        Random
                    </span>
                </h1>
                <p className="w-1/5 h-3 bg-yellow-400 my-4 mx-auto "></p>
            </div>
            <div>dress collection</div>
        </div>
    );
};

export default DressCollection;
