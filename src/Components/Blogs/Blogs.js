import React from "react";
import { Link } from "react-router-dom";

const blogs = [
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

const Blogs = () => {
    return (
        <div className="container mx-auto">
            <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                Home /{" "}
                <span className=" bg-black text-yellow-400 p-2">Blogs</span>
            </p>
            <div className="w-2/3 mx-8 mb-10">
                {blogs.map((blog) => (
                    <div className="bg-white border-2 border-gray-300 rounded-md p-6 mb-8">
                        <div className="overflow-hidden">
                            <img
                                src={blog.imgUrl}
                                alt=""
                                className="hover:scale-110 duration-300"
                            />
                        </div>
                        <h1 className="text-xl text-left font-medium tracking-widest mt-6">
                            {blog.title}
                        </h1>
                        <p className="font-thin text-xl text-left my-4">
                            Like your favorite lightweight sweater, only
                            sleeker, chicer, and longer. Like your favorite
                            lightweight sweater, only sleeker, chicer, and
                            longer.. Like your favorite lightweight sweater,
                            only sleeker, chicer, and longer...
                        </p>
                        <Link to="/blogSingle">
                            <button className="flex uppercase bg-black text-yellow-400 tracking-wider px-6 py-3 mt-4 hover:bg-yellow-400 hover:text-black cursor-pointer">
                                read more
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
