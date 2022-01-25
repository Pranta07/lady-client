import React from "react";

const Carousel = () => {
    return (
        <div
            id="carouselExampleControls"
            class="carousel slide relative"
            data-bs-ride="carousel"
        >
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                    <img
                        src="https://i.ibb.co/pWSS7tm/freestocks-3-Q3ts-J01nc-unsplash.jpg"
                        class="block w-full"
                        alt="Wild Landscape"
                    />
                </div>
                <div class="carousel-item relative float-left w-full">
                    <img
                        src="https://i.ibb.co/rdDfDVm/priscilla-du-preez-dlx-LGIy-2-VU-unsplash.jpg"
                        class="block w-full"
                        alt="Camera"
                    />
                </div>
                <div class="carousel-item relative float-left w-full">
                    <img
                        src="https://i.ibb.co/xXznRp1/kristina-petrick-qmyebf-Kk3pw-unsplash.jpg"
                        class="block w-full"
                        alt="Exotic Fruits"
                    />
                </div>
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
    );
};

export default Carousel;
