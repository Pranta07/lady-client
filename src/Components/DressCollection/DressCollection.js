import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DressCollection = () => {
    const [type, setType] = useState("popular");
    const [products, setProducts] = useState([]);
    const [popular, setPopular] = useState("text-4xl font-bold");
    const [recent, setRecent] = useState("text-2xl font-bold");
    const [random, setRandom] = useState("text-2xl font-bold");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/products?type=${type}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, [type]);

    const handlePopular = (e) => {
        setType("popular");
        setPopular("text-4xl font-bold");
        setRecent("text-2xl font-bold");
        setRandom("text-2xl font-bold");
    };
    const handleRecent = () => {
        setType("recent");
        setPopular("text-2xl font-bold");
        setRecent("text-4xl font-bold");
        setRandom("text-2xl font-bold");
    };
    const handleRandom = () => {
        setType("random");
        setPopular("text-2xl font-bold");
        setRecent("text-2xl font-bold");
        setRandom("text-4xl font-bold");
    };

    return (
        <div className="container mx-auto">
            {/* Heading */}
            <div className="my-3">
                <p className="uppercase py-4 tracking-widest">
                    Dress Collecton
                </p>
                <h1 className="uppercase tracking-widest text-3xl cursor-pointer">
                    <span className={popular} onClick={() => handlePopular()}>
                        Popular
                    </span>
                    {" / "}
                    <span className={recent} onClick={() => handleRecent()}>
                        Recent
                    </span>
                    {" / "}
                    <span className={random} onClick={() => handleRandom()}>
                        Random
                    </span>
                </h1>
                <p className="w-1/5 h-3 bg-yellow-400 my-4 mx-auto"></p>
            </div>
            {/* Products Section */}
            {loading ? (
                <svg
                    class="animate-spin h-5 w-5 bg-yellow-400 mx-auto ..."
                    viewBox="0 0 24 24"
                ></svg>
            ) : (
                <div className="">
                    <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product, index) => (
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
                                    <Link
                                        to={`/shopSingle/${product._id}?type=${type}`}
                                    >
                                        <div className="absolute top-40 md:top-32 left-24 md:left-14 lg:left-5 xl:left-10 z-20 price">
                                            <button className="bg-black text-yellow-400 tracking-wider px-6 py-3 m-4 hover:bg-gray-900 cursor-pointer">
                                                VIEW DETAILS
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="mt-4">
                                        <h3 className="text-sm text-gray-700 py-3">
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
