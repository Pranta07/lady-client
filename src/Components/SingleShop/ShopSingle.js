import React, { useEffect, useState } from "react";
import DressGallery from "../DressGallery/DressGallery";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../Redux/slices/counterSlice";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

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
        Swal.fire("Success!", "Product Added Successfully!", "success");
    };

    return (
        <>
            {/* Single Item */}
            <div className="container mx-auto">
                <p className="py-4 m-8 tracking-widest text-left uppercase cursor-pointer">
                    Dress Collection /{" "}
                    <span className="p-2 text-yellow-400 bg-black ">
                        Shop Single
                    </span>
                </p>
                <div className="grid grid-cols-1 gap-10 mx-8 mb-16 lg:grid-cols-2">
                    <div>
                        <img
                            src={singleProduct.imgUrl}
                            alt=""
                            className="w-full"
                        />
                    </div>
                    <div className="tracking-widest text-left">
                        <p className="py-4 my-4 text-3xl uppercase">
                            $ {singleProduct.price}
                        </p>
                        <h1 className="text-4xl font-semibold tracking-widest uppercase">
                            {singleProduct.name}
                        </h1>
                        <p className="h-3 my-6 bg-yellow-400"></p>
                        <h1 className="mb-6 text-2xl font-semibold tracking-widest uppercase">
                            size chart
                        </h1>
                        <div className="flex flex-wrap text-xl cursor-pointer">
                            <span className="px-8 py-2 mt-2 mr-3 text-yellow-400 bg-black">
                                S
                            </span>
                            <span className="px-8 py-2 mt-2 mr-3 text-gray-700 hover:bg-black hover:text-yellow-400">
                                M
                            </span>
                            <span className="px-8 py-2 mt-2 mr-3 text-gray-700 hover:bg-black hover:text-yellow-400">
                                L
                            </span>
                            <span className="px-8 py-2 mt-2 mr-3 text-gray-700 hover:bg-black hover:text-yellow-400">
                                XL
                            </span>
                            <span className="px-8 py-2 mt-2 mr-3 text-gray-700 hover:bg-black hover:text-yellow-400">
                                XXL
                            </span>
                        </div>
                        <h1 className="my-8 text-2xl font-semibold tracking-widest uppercase">
                            Quantity
                        </h1>
                        <button
                            onClick={() => dispatch(decrement())}
                            className="px-3 py-1 text-xl text-yellow-400 bg-black cursor-pointer hover:bg-gray-900"
                        >
                            -
                        </button>
                        <input
                            readOnly
                            type="text"
                            name=""
                            id=""
                            value={quantity}
                            className="w-10 p-1 mx-2 bg-gray-200"
                        />
                        <button
                            onClick={() => dispatch(increment())}
                            className="px-2 py-1 text-xl text-yellow-400 bg-black cursor-pointer hover:bg-gray-900"
                        >
                            +
                        </button>
                        <br></br>
                        <Link to="/shopCatalog">
                            <button
                                onClick={handleAddToCart}
                                className="px-8 py-3 my-8 tracking-wider text-yellow-400 uppercase bg-black cursor-pointer hover:bg-gray-900"
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
            <div className="p-10 bg-white">
                <h1 className="text-4xl font-bold tracking-widest uppercase">
                    related items
                </h1>
                <p className="w-1/6 h-3 mx-auto my-5 bg-yellow-400 "></p>
                <div>
                    <div className="max-w-2xl px-4 py-6 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {relatedProducts.map((product, index) => (
                                <div
                                    key={index}
                                    className="relative group product"
                                >
                                    <div className="w-full overflow-hidden duration-300 bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 lg:h-80 lg:aspect-none group-hover:scale-105 md:group-hover:scale-110">
                                        <img
                                            src={product.imgUrl}
                                            alt=""
                                            className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                                        />
                                    </div>
                                    <div className="absolute z-20 top-40 md:top-32 left-24 md:left-14 lg:left-5 xl:left-10 price">
                                        <button className="px-6 py-3 m-4 tracking-wider text-yellow-400 bg-black cursor-pointer hover:bg-gray-900">
                                            VIEW DETAILS
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="py-3 text-sm text-gray-700">
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
