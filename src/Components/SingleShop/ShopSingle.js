import React, { useEffect, useState } from "react";
import DressGallery from "../DressGallery/DressGallery";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../Redux/slices/counterSlice";
import { Link, useParams } from "react-router-dom";

const relatedProducts = [
    {
        imgUrl: "https://i.ibb.co/Kbp3BYg/valerie-elash-Rfo-ISVd-KM4-U-unsplash.jpg",
        name: "ABSTRACT DOOTED DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/987Jkd7/oleg-ivanov-sg-g-Rhb-YXhc-unsplash.jpg",
        name: "CHIFON & FLORAL DRESS",
        price: "21.5",
    },
    {
        imgUrl: "https://i.ibb.co/MpMY0y0/aiony-haust-IXYxq-P4zejo-unsplash.jpg",
        name: "CAMI STRAP DRESS",
        price: "23.5",
    },
    {
        imgUrl: "https://i.ibb.co/ccNcX9R/jonathan-borba-Mkq-Vie-Spi5-U-unsplash.jpg",
        name: "FLARE STRAP DRESS",
        price: "19.6",
    },
];

const ShopSingle = () => {
    const quantity = useSelector((state) => state.counter.quantity); //read data from store
    const dispatch = useDispatch();

    const [singleProduct, setSingleProduct] = useState({});

    const { id } = useParams();
    /* const queryParams = new URLSearchParams(window.location.search);
    const type = queryParams.get("type"); */

    useEffect(() => {
        fetch(`https://ancient-dawn-22893.herokuapp.com/singleProduct/${id}`)
            .then((res) => res.json())
            .then((data) => setSingleProduct(data));
    }, [id]);

    const handleAddToCart = () => {
        const data = JSON.parse(localStorage.getItem("cart"));
        if (!data) {
            localStorage.setItem("cart", JSON.stringify({}));
        }

        let newCart = {};
        if (data) {
            newCart = data;
            if (newCart[id]) newCart[id] += quantity;
            else newCart[id] = quantity;
            // newCart["price"] = singleProduct.price * quantity;
        } else {
            newCart[id] = quantity;
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        alert("Product Added Successfully!");
    };

    return (
        <>
            {/* Single Item */}
            <div className="container mx-auto">
                <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                    Dress Collection /{" "}
                    <span className=" bg-black text-yellow-400 p-2">
                        Shop Single
                    </span>
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-8 mb-16">
                    <div>
                        <img
                            src={singleProduct.imgUrl}
                            alt=""
                            className="w-full"
                        />
                    </div>
                    <div className="tracking-widest text-left">
                        <p className="uppercase text-3xl py-4 my-4">
                            $ {singleProduct.price}
                        </p>
                        <h1 className="uppercase tracking-widest text-4xl font-semibold">
                            {singleProduct.name}
                        </h1>
                        <p className="h-3 bg-yellow-400 my-6"></p>
                        <h1 className="uppercase tracking-widest text-2xl font-semibold mb-6">
                            size chart
                        </h1>
                        <div className="cursor-pointer text-xl flex flex-wrap">
                            <span className="bg-black text-yellow-400 px-8 py-2 mr-3 mt-2">
                                S
                            </span>
                            <span className="text-gray-700 px-8 py-2 mr-3 mt-2 hover:bg-black hover:text-yellow-400">
                                M
                            </span>
                            <span className="text-gray-700 px-8 py-2 mr-3 mt-2 hover:bg-black hover:text-yellow-400">
                                L
                            </span>
                            <span className="text-gray-700 px-8 py-2 mr-3 mt-2 hover:bg-black hover:text-yellow-400">
                                XL
                            </span>
                            <span className="text-gray-700 px-8 py-2 mr-3 mt-2 hover:bg-black hover:text-yellow-400">
                                XXL
                            </span>
                        </div>
                        <h1 className="uppercase tracking-widest text-2xl font-semibold my-8">
                            Quantity
                        </h1>
                        <button
                            onClick={() => dispatch(decrement())}
                            className="py-1 px-3 bg-black text-yellow-400 text-xl hover:bg-gray-900 cursor-pointer"
                        >
                            -
                        </button>
                        <input
                            readOnly
                            type="text"
                            name=""
                            id=""
                            value={quantity}
                            className="w-10 mx-2 p-1 bg-gray-200"
                        />
                        <button
                            onClick={() => dispatch(increment())}
                            className="py-1 px-2 bg-black text-yellow-400 text-xl hover:bg-gray-900 cursor-pointer"
                        >
                            +
                        </button>
                        <br></br>
                        <Link to="/shopCatalog">
                            <button
                                onClick={handleAddToCart}
                                className="uppercase bg-black text-yellow-400 tracking-wider px-8 py-3 my-8 hover:bg-gray-900 cursor-pointer"
                            >
                                add to cart
                            </button>
                        </Link>
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

            {/* Related Items */}
            <div className="bg-white p-10">
                <h1 className="uppercase text-4xl font-bold tracking-widest">
                    related items
                </h1>
                <p className="w-1/6 h-3 bg-yellow-400 my-5 mx-auto "></p>
                <div>
                    <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {relatedProducts.map((product, index) => (
                                <div
                                    key={index}
                                    className="group relative product"
                                >
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none group-hover:scale-105 md:group-hover:scale-110 duration-300">
                                        <img
                                            src={product.imgUrl}
                                            alt=""
                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                        />
                                    </div>
                                    <div className="absolute top-40 md:top-32 left-24 md:left-14 lg:left-5 xl:left-10 z-20 price">
                                        <button className="bg-black text-yellow-400 tracking-wider px-6 py-3 m-4 hover:bg-gray-900 cursor-pointer">
                                            VIEW DETAILS
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-sm text-gray-700 py-3">
                                            <a href={product.href}>
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="text-xl font-medium text-gray-900">
                                            $ {product.price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* New in Featured Top */}
            <DressGallery></DressGallery>
        </>
    );
};

export default ShopSingle;
