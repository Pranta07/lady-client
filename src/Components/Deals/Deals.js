import React from "react";

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-8 mb-10">
                {deals.map((deals, index) => (
                    <div key={index} className="bg-white p-6">
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
                        <button className="flex uppercase bg-black text-yellow-400 tracking-wider px-6 py-3 mt-4 hover:bg-gray-900 cursor-pointer">
                            Get it now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Deals;
