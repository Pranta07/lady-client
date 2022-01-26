import React from "react";

const reviews = [
    {
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi temporibus accusantiumagnam consectetur optio porro ex numquamrecusandae cum corrupti.",
        name: "Pranta Pal",
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi temporibus accusantiumagnam consectetur optio porro ex numquamrecusandae cum corrupti.",
        name: "Ema Watsom",
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi temporibus accusantiumagnam consectetur optio porro ex numquamrecusandae cum corrupti.",
        name: "David Josh",
    },
];

const HappyCustomers = () => {
    return (
        <div className="bg-black text-white">
            {/* Heading */}
            <div className="my-3 p-4">
                <p className="uppercase py-4 tracking-widest">
                    WHAT DOES THE FOX SAY?
                </p>
                <h1 className="uppercase text-4xl font-bold tracking-widest">
                    HAPPY CUSTOMERS
                </h1>
                <p className="w-1/5 h-3 bg-yellow-400 my-5 mx-auto "></p>
            </div>

            {/* Reviews */}
            <div
                id="carouselExampleControls"
                className="carousel slide relative pb-12"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner relative mx-auto p-3 w-3/4 md:w-2/3 overflow-hidden bg-yellow-400 text-black rounded-md">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={
                                index === 0
                                    ? "carousel-item active relative float-left w-full"
                                    : "carousel-item relative float-left w-full"
                            }
                        >
                            <div className="w-2/3 h-80 mx-auto flex flex-col justify-center">
                                <p className="text-xl tracking-wide">
                                    {review.desc}
                                </p>
                                <h1 className="text-2xl tracking-wide font-bold m-4">
                                    {review.name}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon inline-block bg-no-repeat"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon inline-block bg-no-repeat"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HappyCustomers;
