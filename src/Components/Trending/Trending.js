import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

const Trending = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/trending")
            .then((res) => res.json())
            .then((data) => setTrendingProducts(data));
    }, []);

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
