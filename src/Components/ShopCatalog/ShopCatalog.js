import React, { useState, useEffect } from "react";
import DressGallery from "../DressGallery/DressGallery";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const sortItems = [
    { name: "Best Sellers", href: "" },
    { name: "Lower Prices", href: "" },
    { name: "Higher Prices", href: "" },
    { name: "Most Popular", href: "" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ShopCatalog = () => {
    const [pageNum, setPageNum] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://lady.up.railway.app/products?type=catalog&&page=${pageNum}`
        )
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                /* setPageCount(Math.ceil(data.length / 8));
                const Products = data.filter(
                    (product, id) => id >= pageNum * 8 && id < pageNum * 8 + 8
                ); */
                setPageCount(Math.ceil(data.count / 8));
                setDisplayProducts(data.result);
            });
    }, [pageNum]);

    return (
        <>
            <div className="container mx-auto">
                <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                    Dress Collection /{" "}
                    <span className=" bg-black text-yellow-400 p-2">
                        Shop Catalog
                    </span>
                </p>
            </div>
            <div className="bg-white py-10">
                <div className="container mx-auto px-8 flex justify-between">
                    <div>
                        <h1 className="uppercase tracking-wide text-4xl text-left">
                            Shop Catalog
                        </h1>
                    </div>
                    {/* Sort By Dropdown */}
                    <Menu as="div" className="ml-3 relative">
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-300">
                                Sort By
                                <ChevronDownIcon
                                    className="-mr-1 ml-2 h-5 w-5"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute z-40 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                {sortItems.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-700 text-white"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>

                {loading ? (
                    <svg
                        className="animate-spin h-5 w-5 bg-yellow-400 mx-auto ..."
                        viewBox="0 0 24 24"
                    ></svg>
                ) : (
                    <>
                        {/* Products Section */}
                        <div>
                            <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    {displayProducts.map((product) => (
                                        <div
                                            key={product._id}
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
                                                to={`/shopSingle/${product._id}?type=catalog`}
                                            >
                                                <div className="absolute top-40 md:top-32 left-24 md:left-14 lg:left-5 xl:left-10 z-20 price">
                                                    <button className="uppercase bg-black text-yellow-400 tracking-wider px-6 py-3 m-4 hover:bg-gray-900 cursor-pointer">
                                                        Add to cart
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

                        {/* pagination */}
                        <div>
                            <nav
                                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                aria-label="Pagination"
                            >
                                <button
                                    onClick={() => {
                                        pageNum > 0 && setPageNum(pageNum - 1);
                                    }}
                                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-yellow-400"
                                >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </button>

                                {[...Array(pageCount).keys()].map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => {
                                            setPageNum(number);
                                        }}
                                        className={
                                            pageNum === number
                                                ? "bg-yellow-400 border-gray-300 text-gray-900 hover:bg-yellow-400 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                : "bg-white border-gray-300 text-gray-900 hover:bg-yellow-400 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                        }
                                    >
                                        {number}
                                    </button>
                                ))}

                                <button
                                    onClick={() => {
                                        pageNum < pageCount - 1 &&
                                            setPageNum(pageNum + 1);
                                    }}
                                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-yellow-400"
                                >
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </button>
                            </nav>
                        </div>
                    </>
                )}
            </div>

            <DressGallery></DressGallery>
        </>
    );
};

export default ShopCatalog;
