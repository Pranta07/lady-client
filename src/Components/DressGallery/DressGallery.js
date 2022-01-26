import React from "react";
import Featured from "../Featured/Featured";
import NewIn from "../NewIn/NewIn";
import Top from "../Top/Top";

const DressGallery = () => {
    return (
        <div className="container mx-auto md:px-6 pb-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            <NewIn></NewIn>
            <Featured></Featured>
            <Top></Top>
        </div>
    );
};

export default DressGallery;
