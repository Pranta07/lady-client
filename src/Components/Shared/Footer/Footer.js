import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="pt-16 bg-black text-white">
            <div className="grid lg:grid-cols-4 text-white sm:grid-cols-1 md:grid-cols-2 md:justify-items-center gap-4">
                {/* LINKS */}
                <div>
                    <h2 className="hover:underline-offset-8 title font-bold hover:text-yellow-400">
                        QUICK-LINKS
                    </h2>
                    <div className="flex flex-col mt-8 link text-justify font-normal">
                        <a href="#myAccount">MY ACCOUNT</a>
                        <a href="#contactUs"> CONTACT US</a>
                        <a href="#storeLocation"> STORE LOCATION</a>
                        <a href="#sizeGuide">SIZE GUIDE</a>
                        <a className="box" href="#shippingInfo">
                            SHIPPING INFO
                        </a>
                    </div>
                </div>

                {/* Blogs */}
                <div className="text-justify">
                    <h2 className="hover:underline-offset-8 title font-bold hover:text-yellow-400">
                        RECENT BLOGS
                    </h2>

                    <div className="mt-8 flex flex-col blogs-item">
                        <div>
                            <p>TOP 10 TRENDING DRESS THIS SUM</p>
                        </div>
                        <div>
                            <p>THE AWESOME CUTE STACK</p>
                        </div>
                        <div>
                            <p>NEWS ABOUT OPEN HOUR OF STORE</p>
                        </div>
                    </div>
                </div>

                {/* TAGS */}
                <div className="text-justify">
                    <h2 className="hover:underline-offset-8 title font-bold hover:text-yellow-400">
                        TAGS
                    </h2>
                    <div className="grid mt-8 box font-normal pl-2">
                        <div className="flex items-center">
                            <span>DRESS</span>
                            <span className="ml-6">LIPS</span>
                        </div>
                        <span>DOTTED</span>
                        <span> ACCESSORIES</span>
                        <div className="flex items-center">
                            <span> DRESS</span>
                            <span className="ml-6">CROSS</span>
                        </div>
                        <span>ABSTRACT</span>
                        <span>BABYDOLL</span>
                        <span>SALEOFF</span>
                        <span>FLORAL</span>
                    </div>
                </div>

                {/* Social links */}
                <div className="text-justify pr-10">
                    <h2 className="hover:underline-offset-8 title font-bold hover:text-yellow-400">
                        FIND US ON
                    </h2>
                    <div className="mt-8 font">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter "></i>
                        <i className="fab fa-instagram "></i>
                        <i className="fab fa-google-plus-g "></i>
                    </div>
                    <div className="mx-2 mt-6">
                        <h4 className="font-bold">@AKES</h4>
                        <p className="text-sm hover:text-yellow-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                        <h4 className="font-bold">@FTPS</h4>
                        <p className="text-sm hover:text-yellow-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
            </div>
            <hr className="bg-green-200 w-5/6 mx-auto mt-8 hover:bg-cyan-600" />
            <p className="p-4 font-normal text-slate-100 hover:text-slate-400">
                COPYRIGHT 2022 BY Hero-Team-Mate . ALL RIGHTS RESERVED
            </p>
        </div>
    );
};

export default Footer;
