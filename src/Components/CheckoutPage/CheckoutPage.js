import React from "react";
import useCart from "../../hooks/useCart";
const CheckoutPage = () => {
    const { cart, total } = useCart();

    return (
        <>
            <div className="container mx-auto">
                <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                    Shopping Cart /{" "}
                    <span className=" bg-black text-yellow-400 p-2">
                        Checkout
                    </span>
                </p>
            </div>
            <div className="bg-white py-10 border-b-2 border-gray-300">
                <div className="container mx-auto text-left grid grid-cols-2 gap-4">
                    <div>
                        <h1 className="uppercase tracking-widest text-3xl m-8 pb-2 border-b-4 border-gray-900">
                            Billing Details
                        </h1>
                        <div className="mt-10 sm:mt-0 mx-8">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form>
                                    <div className="shadow-lg overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="first-name"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        First name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="mt-1 p-2 border bg-gray-100 outline-gray-500 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="last-name"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Last name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="given-name"
                                                        className="mt-1 p-2 border bg-gray-100 outline-gray-500 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-4">
                                                    <label
                                                        htmlFor="email-address"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="email-address"
                                                        id="email-address"
                                                        autoComplete="email"
                                                        className="mt-1 p-2 border bg-gray-100 outline-gray-500 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="country"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Country
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="mt-1 block w-full py-2 px-3 border outline-gray-500 bg-gray-100 rounded-md shadow-sm sm:text-sm"
                                                    >
                                                        <option>
                                                            Bangladesh
                                                        </option>
                                                        <option>
                                                            United States
                                                        </option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="last-name"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Phone
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        id="phone"
                                                        autoComplete="phone"
                                                        className="mt-1 p-2 border bg-gray-100 outline-gray-500 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6">
                                                    <label
                                                        htmlFor="street-address"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Street address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="street-address"
                                                        id="street-address"
                                                        autoComplete="street-address"
                                                        className="mt-1 p-2 border bg-gray-100 outline-gray-500 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label
                                                        htmlFor="city"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        City
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        autoComplete="address-level2"
                                                        className="mt-1 p-2 border bg-gray-100 outline-gray-500 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label
                                                        htmlFor="region"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        State / Province
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="region"
                                                        id="region"
                                                        autoComplete="address-level1"
                                                        className="mt-1 p-2 border bg-gray-100 outline-gray-500 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label
                                                        htmlFor="postal-code"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        ZIP / Postal code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="postal-code"
                                                        id="postal-code"
                                                        autoComplete="postal-code"
                                                        className="mt-1 p-2 border bg-gray-100 outline-gray-500 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="uppercase tracking-wider inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-yellow-400 bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                            >
                                                Place Order
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="uppercase tracking-widest text-3xl m-8 pb-2 border-b-4 border-gray-900">
                            Product Details
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
