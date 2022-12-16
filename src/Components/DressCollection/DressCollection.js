import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DressCollection = () => {
    const [type, setType] = useState("popular");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://lady.up.railway.app/products?type=${type}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.result);
                setLoading(false);
            });
    }, [type]);

    return (
        <div className="container mx-auto">
            {/* Heading */}
            <div className="m-3">
                <p className="py-4 tracking-widest uppercase">
                    Dress Collecton
                </p>
                <h1 className="text-3xl tracking-widest uppercase cursor-pointer">
                    <span
                        className={
                            type === "popular"
                                ? "text-4xl font-bold"
                                : "text-2xl font-bold"
                        }
                        onClick={() => setType("popular")}
                    >
                        Popular
                    </span>
                    {" / "}
                    <span
                        className={
                            type === "recent"
                                ? "text-4xl font-bold"
                                : "text-2xl font-bold"
                        }
                        onClick={() => setType("recent")}
                    >
                        Recent
                    </span>
                    {" / "}
                    <span
                        className={
                            type === "random"
                                ? "text-4xl font-bold"
                                : "text-2xl font-bold"
                        }
                        onClick={() => setType("random")}
                    >
                        Random
                    </span>
                </h1>
                <p className="w-1/3 h-3 mx-auto my-4 bg-yellow-400 md:w-1/5"></p>
            </div>
            {/* Products Section */}
            {loading ? (
                <svg
                    className="animate-spin h-5 w-5 bg-yellow-400 mx-auto ..."
                    viewBox="0 0 24 24"
                ></svg>
            ) : (
                <div className="">
                    <div className="max-w-2xl px-4 py-6 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product, index) => (
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
                                    <Link
                                        to={`/shopSingle/${product._id}?type=${type}`}
                                    >
                                        <div className="z-20 price">
                                            <button className="px-6 py-3 m-4 tracking-wider text-yellow-400 bg-black cursor-pointer hover:bg-gray-900">
                                                VIEW DETAILS
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="mt-4">
                                        <h3 className="py-3 text-sm text-gray-700">
                                            {product.name}
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
            )}
        </div>
    );
};

export default DressCollection;
