import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const deals = [
    {
        imgUrl: "https://i.ibb.co/bggwxjG/becca-mchaffie-Fzde-6-ITjkw-unsplash.jpg",
        title: "SUMMER TIME $10.00 OFF FOR ALL ORDERS",
    },
    {
        imgUrl: "https://i.ibb.co/nn889pX/markus-spiske-BTKF6-G-O8f-U-unsplash.jpg",
        title: "%10 DISCOUNT ORDER MORE THAN $1000",
    },
    {
        imgUrl: "https://i.ibb.co/Pj6Pn0k/artem-beliaikin-k-Td2-Pvtq-E-o-unsplash.jpg",
        title: "2015 APRIL $10.00 OFF FOR ALL ORDERS",
    },
    {
        imgUrl: "https://i.ibb.co/SQfpbz1/artem-beliaikin-GLg0z5z8-EQU-unsplash.jpg",
        title: "FREE SHIPPING FOR ALL DRESS",
    },
];

const Deals = () => {
    return (
        <div className="container mx-auto">
            <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                Home /{" "}
                <span className=" bg-black text-yellow-400 p-2">Deals</span>
            </p>

            {/* Deals Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-8 mb-10">
                {deals.map((deals, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 border-2 border-gray-300 rounded-md"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={deals.imgUrl}
                                alt=""
                                className="hover:scale-110 duration-300"
                            />
                        </div>
                        <h1 className="text-xl text-left font-medium tracking-widest mt-6">
                            {deals.title}
                        </h1>
                        <p className="font-thin text-xl text-left my-4">
                            Like your favorite lightweight sweater, only
                            sleeker, chicer, and longer...
                        </p>
                        <Link to="/shopSingle">
                            <button className="flex uppercase bg-black text-yellow-400 tracking-wider px-6 py-3 mt-4 hover:bg-gray-900 cursor-pointer">
                                Get it now
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div className="mb-6">
                <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                >
                    <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-yellow-400">
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                    </button>

                    {[...Array(4).keys()].map((number) => (
                        <button
                            key={number}
                            className="bg-white border-gray-300 text-gray-900 hover:bg-yellow-400 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            {number}
                        </button>
                    ))}

                    <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-yellow-400">
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Deals;
