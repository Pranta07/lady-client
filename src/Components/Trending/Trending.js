import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

const trendingProducts = [
    {
        imgUrl: "https://i.ibb.co/jHWpfRY/nathan-walker-C0j-Ixemc-Lo-unsplash.jpg",
        title: "White Gown Dress",
        price: 30.5,
    },
    {
        imgUrl: "https://i.ibb.co/VwKdPPJ/rocknwool-GUzkgot7-LN8-unsplash.jpg",
        title: "Rocknwool Dress",
        price: 20.5,
    },
    {
        imgUrl: "https://i.ibb.co/bvWNJvB/ehimetalor-akhere-unuabona-qi3qc-Q3v-Yu-I-unsplash.jpg",
        title: "WJ Bags",
        price: 20.3,
    },
    {
        imgUrl: "https://i.ibb.co/chF8MKG/jasmin-chew-4-IULx-F9-Z0-YA-unsplash.jpg",
        title: "Denim Jeans",
        price: 19.4,
    },
    {
        imgUrl: "https://i.ibb.co/DM8JFzM/kayan-baby-msq6-ZTv-Manw-unsplash.jpg",
        title: "Baby Girl Frock",
        price: 23.2,
    },
    {
        imgUrl: "https://i.ibb.co/RDk0Bf0/mohammad-metri-E-0-ON3-VGr-Bc-unsplash.jpg",
        title: "Pencil Hill",
        price: 30.2,
    },
    {
        imgUrl: "https://i.ibb.co/BGHqWwk/engin-akyurt-RSm7-GBu-Mqos-unsplash.jpg",
        title: "Dress Combo",
        price: 99.9,
    },
];

const Trending = () => {
    return (
        <div className="container mx-auto">
            {/* Heading Part */}
            <div className="my-3">
                <p className="uppercase py-4 tracking-widest">
                    The new arrivals
                </p>
                <h1 className="uppercase text-4xl font-bold tracking-widest">
                    Trending
                </h1>
                <p className="w-1/5 h-3 bg-yellow-400 my-4 mx-auto "></p>
                <p className="tracking-widest">
                    DEFINE YOUR WARDROBE WITH ACCESSORIES
                </p>
            </div>

            {/* Products Section */}
            <div className="bg-white m-6 lg:flex">
                <div className="w-full lg:flex">
                    <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-0">
                        {trendingProducts.map((product, index) => (
                            <div
                                key={index}
                                className="h-full overflow-hidden relative cursor-crosshair product first:row-span-2"
                            >
                                <img
                                    src={product.imgUrl}
                                    alt=""
                                    className="w-full h-full hover:scale-110 duration-300"
                                />
                                <div className="absolute top-32 md:top-32 lg:top-16 xl:top-24 left-24 md:left-20 lg:left-7 xl:left-14 animate-pulse rounded-t-md price duration-300">
                                    <p className="text-2xl font-bold">
                                        $ {product.price}
                                    </p>
                                    <Link to="/shopSingle">
                                        <button className="bg-black text-yellow-400 tracking-wider px-6 py-3 m-4 hover:bg-gray-900">
                                            VIEW DETAILS
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;
