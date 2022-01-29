import React from "react";
import { Link } from "react-router-dom";

const categories = [
    "new arrivals",
    "popular",
    "top",
    "featured",
    "women",
    "men",
    "bags",
    "shoes",
    "sale-off",
];

const About = () => {
    return (
        <div className="container mx-auto">
            <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                Home /{" "}
                <span className=" bg-black text-yellow-400 p-2">About</span>
            </p>
            <div className="lg:flex">
                <div className="lg:w-2/3">
                    <div className="mx-4 md:mx-8 mb-10">
                        <div className="bg-white border-2 border-gray-300 rounded-md p-6 mb-8">
                            <div className="overflow-hidden">
                                <img
                                    src="https://i.ibb.co/rdDfDVm/priscilla-du-preez-dlx-LGIy-2-VU-unsplash.jpg"
                                    alt=""
                                    className="hover:scale-110 duration-300 h-80 w-full"
                                />
                            </div>
                            <h1 className="text-xl text-left font-medium tracking-widest mt-6">
                                WELCOME, WE ARE LADY!
                            </h1>
                            <p className="font-thin text-xl text-left mt-4 mb-6">
                                Like your favorite lightweight sweater, only
                                sleeker, chicer, and longer.. Like your favorite
                                lightweight sweater, only sleeker, chicer, and
                                longerLike your favorite lightweight sweat..Like
                                your favorite nd longerLike your favorite
                                lightweight sweat..Like your favorite
                                lightweight, only sl lightweight, only sleeker,
                                chicer, and longer Like your favorite
                                lightweight sweater, only sleeker, chicer, and
                                longer...
                            </p>
                            <Link to="/contact">
                                <button className="flex uppercase bg-black text-yellow-400 tracking-wider px-6 py-3 mt-4 hover:bg-yellow-400 hover:text-black cursor-pointer duration-300">
                                    Contact Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* categories */}
                <div className="lg:block w-2/3 lg:w-1/3 text-left uppercase tracking-widest mt-6 pr-6 mx-8 lg:mx-0">
                    <h1 className="text-xl border-2 border-b-stone-900 pb-3 mb-6">
                        Categories
                    </h1>
                    {categories.map((category, index) => (
                        <p
                            key={index}
                            className="mb-6 hover:p-2 hover:bg-black hover:text-yellow-400 duration-300"
                        >
                            {category}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
