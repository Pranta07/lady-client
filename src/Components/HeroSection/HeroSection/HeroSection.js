import React from "react";
import Carousel from "../Carousel/Carousel";

const IMAGES = [
    {
        imageUrl: "https://loremflickr.com/600/300/paris",
        placeHolder: "Paris",
    },
    {
        imageUrl: "https://loremflickr.com/600/300/dog",
        placeHolder: "Dog",
    },
    {
        imageUrl: "https://loremflickr.com/600/300/cat",
        placeHolder: "Cat",
    },
    {
        imageUrl: "https://loremflickr.com/600/300/forest",
        placeHolder: "Forest",
    },
];

const HeroSection = () => {
    return (
        <div className="">
            <Carousel></Carousel>
        </div>
    );
};

export default HeroSection;
