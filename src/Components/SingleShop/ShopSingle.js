import React from "react";
import { useState } from "react/cjs/react.development";
import DressGallery from "../DressGallery/DressGallery";

const ShopSingle = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const handleQuantity = (e) => {
        const name = e.target.name;
        if (name === "plus") {
            setQuantity(quantity + 1);
        } else {
            if (quantity !== 0) setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div className="container mx-auto">
                <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                    Dress Collection /{" "}
                    <span className=" bg-black text-yellow-400 p-2">
                        Shop Single
                    </span>
                </p>
                <div className="grid md:grid-cols-2 gap-10 mx-8 mb-16">
                    <div>
                        <img
                            src="https://i.ibb.co/0fWRMGf/jonathan-borba-Mkq-Vie-Spi5-U-unsplash.jpg"
                            alt=""
                            className="w-full"
                        />
                    </div>
                    <div className="tracking-widest text-left">
                        <p className="uppercase text-3xl py-4 my-4">$ 23.5</p>
                        <h1 className="uppercase tracking-widest text-4xl font-semibold">
                            FLARE STRAP DRESS
                        </h1>
                        <p className="h-3 bg-yellow-400 my-6"></p>
                        <h1 className="uppercase tracking-widest text-2xl font-semibold mb-8">
                            size chart
                        </h1>
                        <div className="cursor-pointer text-xl">
                            <span className="bg-black text-yellow-400 px-8 py-2 mr-3">
                                S
                            </span>
                            <span className="text-gray-700 px-8 py-2 mr-3 hover:bg-black hover:text-yellow-400">
                                M
                            </span>
                            <span className="text-gray-700 px-8 py-2 mr-3 hover:bg-black hover:text-yellow-400">
                                L
                            </span>
                            <span className="text-gray-700 px-8 py-2 mr-3 hover:bg-black hover:text-yellow-400">
                                XL
                            </span>
                            <span className="text-gray-700 px-8 py-2 mr-3 hover:bg-black hover:text-yellow-400">
                                XXL
                            </span>
                        </div>
                        <h1 className="uppercase tracking-widest text-2xl font-semibold my-8">
                            Quantity
                        </h1>
                        <button
                            onClick={handleQuantity}
                            name="minus"
                            className="py-1 px-3 bg-black text-yellow-400 text-xl hover:bg-gray-900 cursor-pointer"
                        >
                            -
                        </button>
                        <input
                            type="text"
                            name=""
                            id=""
                            value={quantity}
                            className="w-10 mx-2 p-1 bg-gray-200"
                        />
                        <button
                            onClick={handleQuantity}
                            name="plus"
                            className="py-1 px-2 bg-black text-yellow-400 text-xl hover:bg-gray-900 cursor-pointer"
                        >
                            +
                        </button>
                        <br></br>
                        <button className="uppercase bg-black text-yellow-400 tracking-wider px-8 py-3 my-8 hover:bg-gray-900 cursor-pointer">
                            add to cart
                        </button>
                        <p className="text-sm">
                            Like your favorite lightweight sweater, only
                            sleeker, chicer, and longer, this maxi dress is as
                            dreamy to wear as it is to look at. Its super-soft
                            ribbed knit and 3/4 sleeves keep this piece comfy,
                            while its marled fabrication and a single side slit
                            raise its sartorial appeal.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-10">
                <h1 className="uppercase text-4xl font-bold tracking-widest">
                    related items
                </h1>
                <p className="w-1/6 h-3 bg-yellow-400 my-5 mx-auto "></p>
            </div>

            {/* New in Featured Top */}
            <DressGallery></DressGallery>
        </>
    );
};

export default ShopSingle;
