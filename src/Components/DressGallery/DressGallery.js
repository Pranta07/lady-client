import React from "react";
import Featured from "../Featured/Featured";
import NewIn from "../NewIn/NewIn";

const DressGallery = () => {
    return (
        <div className="mx-4 pb-10 flex">
            <NewIn></NewIn>
            <Featured></Featured>
        </div>
    );
};

export default DressGallery;
