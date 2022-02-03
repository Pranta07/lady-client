import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const TopHeader = () => {
    const { cart, total } = useCart();

    return (
        <div className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-3 ">
                <div className="block md:flex text-sm  justify-between pb-5">
                    <div>
                        <p className="">FREE SHIPPING OVER $50</p>
                    </div>
                    <div className="text-center pt-3  md:pt-0">
                        <p className="cursor-pointer">
                            <span className="pr-3 hover:text-yellow-400">
                                LOGIN / SIGN-UP
                            </span>
                            <Link to="/cart">
                                <span className="hover:text-yellow-400">
                                    {cart.length} ITEMS ${total}
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative  hidden md:flex  float-left r text-gray-600 focus-within:border-2 border-yellow-300 w-6/12 mr-3">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2 ">
                            <button
                                type="submit"
                                class="p-1 focus:outline-none focus:shadow-outline "
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    class="w-6 h-6"
                                >
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="q"
                            className="py-4 w-full text-xs  text-white bg-gray-800  pl-10 focus:outline-none  "
                            placeholder="SEARCH SOMETHING"
                            autocomplete="off"
                        />
                    </div>
                    <img
                        className="mx-auto md:mx-0 "
                        src="./HeaderAlogo.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
