import React from "react";
import Featured from "../Featured/Featured";
import NewIn from "../NewIn/NewIn";
import Top from "../Top/Top";

const DressGallery = () => {
    return (
        <div className="mx-4 pb-10 flex">
            <NewIn></NewIn>
            <Featured></Featured>
            <Top></Top>
        </div>
    );
};

export default DressGallery;
