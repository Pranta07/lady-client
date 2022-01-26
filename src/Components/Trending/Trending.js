import React from "react";
import "./Trending.css";

const Images = [
    "https://i.ibb.co/VSfFKWw/rocknwool-GUzkgot7-LN8-unsplash.jpg",
    "https://i.ibb.co/ZNQFtFV/mohammad-metri-E-0-ON3-VGr-Bc-unsplash.jpg",
    "https://i.ibb.co/16wQdgX/ehimetalor-akhere-unuabona-qi3qc-Q3v-Yu-I-unsplash.jpg",
    "https://i.ibb.co/MNPgwyc/kayan-baby-msq6-ZTv-Manw-unsplash.jpg",
    "https://i.ibb.co/4sXYH1C/jasmin-chew-4-IULx-F9-Z0-YA-unsplash.jpg",
    "https://i.ibb.co/MnBPN6s/engin-akyurt-RSm7-GBu-Mqos-unsplash.jpg",
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
            <div className="bg-white m-6 flex">
                <div className="w-full lg:flex">
                    <div className="md:w-full lg:w-1/4 overflow-hidden relative cursor-crosshair product">
                        <img
                            src="https://i.ibb.co/C0kXRgr/nathan-walker-C0j-Ixemc-Lo-unsplash.jpg"
                            alt=""
                            className="h-full hover:scale-125 duration-300"
                        />
                        <div className="absolute lg:top-48 xl:top-60 md:left-20 lg:left-8 xl:left-14 animate-pulse rounded-t-md price">
                            <p className="text-2xl font-bold">$ 99.00</p>
                            <button className="bg-black text-yellow-400 tracking-wider px-6 py-3 m-4 hover:bg-gray-900">
                                VIEW DETAILS
                            </button>
                        </div>
                    </div>
                    <div className="md:w-full lg:w-3/4 h-full grid md:grid-cols-2 lg:grid-cols-3 gap-0">
                        {Images.map((url, index) => (
                            <div
                                key={index}
                                className="h-full overflow-hidden relative cursor-crosshair product"
                            >
                                <img
                                    src={url}
                                    alt=""
                                    className="w-full h-full hover:scale-125 duration-300"
                                />
                                <div className="absolute md:top-6 lg:top-16 xl:top-24 lg:left-7 xl:left-14 animate-pulse rounded-t-md price">
                                    <p className="text-2xl font-bold">
                                        $ 99.00
                                    </p>
                                    <button className="bg-black text-yellow-400 tracking-wider px-6 py-3 m-4 hover:bg-gray-900">
                                        VIEW DETAILS
                                    </button>
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
