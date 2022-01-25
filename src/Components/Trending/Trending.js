import React from "react";

const Images = [
    "https://i.ibb.co/VSfFKWw/rocknwool-GUzkgot7-LN8-unsplash.jpg",
    "https://i.ibb.co/ZNQFtFV/mohammad-metri-E-0-ON3-VGr-Bc-unsplash.jpg",
    "https://i.ibb.co/16wQdgX/ehimetalor-akhere-unuabona-qi3qc-Q3v-Yu-I-unsplash.jpg",
    "https://i.ibb.co/MNPgwyc/kayan-baby-msq6-ZTv-Manw-unsplash.jpg",
    "https://i.ibb.co/4sXYH1C/jasmin-chew-4-IULx-F9-Z0-YA-unsplash.jpg",
    "https://i.ibb.co/cw62M5M/timothee-pons-95-XV8-Bsm-Xn8-unsplash.jpg",
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
            <div className="bg-white m-6 flex object-fill">
                <div className="w-full flex">
                    <div className="w-1/4 h-full">
                        <img
                            src="https://i.ibb.co/C0kXRgr/nathan-walker-C0j-Ixemc-Lo-unsplash.jpg"
                            alt=""
                            className="h-full"
                        />
                    </div>
                    <div className="w-3/4 h-full columns-3 gap-0">
                        {Images.map((url) => (
                            <div className="h-1/2">
                                <img
                                    src={url}
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p>Next</p>
        </div>
    );
};

export default Trending;
