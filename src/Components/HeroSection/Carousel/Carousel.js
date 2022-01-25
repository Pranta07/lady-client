import React from "react";

const Carousel = () => {
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide relative"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner relative w-full h-screen overflow-hidden">
                <div className="carousel-item active relative float-left w-full opacity-60">
                    <img
                        src="https://i.ibb.co/pWSS7tm/freestocks-3-Q3ts-J01nc-unsplash.jpg"
                        className="block w-full object-cover h-screen"
                        alt="lady-shopping"
                    />
                </div>
                <div className="carousel-item relative float-left w-full opacity-60">
                    <img
                        src="https://i.ibb.co/rdDfDVm/priscilla-du-preez-dlx-LGIy-2-VU-unsplash.jpg"
                        className="block w-full object-fill h-screen"
                        alt="dresses"
                    />
                </div>
                <div className="carousel-item relative float-left w-full opacity-60">
                    <img
                        src="https://i.ibb.co/xXznRp1/kristina-petrick-qmyebf-Kk3pw-unsplash.jpg"
                        className="block w-full object-fill h-screen"
                        alt="Exotic Fasion"
                    />
                </div>
                <div className="h-screen flex justify-center items-center bg-inherit">
                    <div>
                        <h1 className="text-7xl m-4">LADY FASHION</h1>
                        <p className="text-2xl mx-3">
                            RETHINK YOUR SWIMWEARAND TAKE IT <br /> TO THE
                            STREET
                        </p>
                        <button className="bg-black text-yellow-400 tracking-wider px-6 py-3 m-4">
                            VIEW THE LOOKBOOK
                        </button>
                    </div>
                </div>
            </div>

            <button
                className="carousel-control-prev w-6 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon inline-block bg-no-repeat bg-black py-10"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next w-6 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon inline-block bg-no-repeat bg-black py-10"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
