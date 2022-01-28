import React from "react";
import DressCollection from "../DressCollection/DressCollection";
import DressGallery from "../DressGallery/DressGallery";
import HappyCustomers from "../HappyCustomers/HappyCustomers";
import HeroSection from "../HeroSection/HeroSection/HeroSection";
import Navigation from "../Shared/Navigation/Navigation";
import Trending from "../Trending/Trending";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <Trending></Trending>
            <DressCollection></DressCollection>
            <HappyCustomers></HappyCustomers>
            <DressGallery></DressGallery>
            <SubscribeSection></SubscribeSection>
            <Footer></Footer>
        </>
    );
};

export default Home;
