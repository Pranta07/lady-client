import React from "react";
import useCart from "../../hooks/useCart";
import CartTable from "../CartTable/CartTable";
import TotalPrice from "../TotalPrice/TotalPrice";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const CheckoutPage = () => {
    const { user } = useFirebase();
    const { cart, total } = useCart();
    const discount = JSON.parse(sessionStorage.getItem("discount"));

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.firstName = user.displayName;
        const newData = {
            ...data,
            total: parseFloat(total - discount).toFixed(2),
            products: cart,
        };
        // reset();
        fetch("https://ancient-dawn-22893.herokuapp.com/init", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newData),
        })
            .then((res) => res.json())
            .then((url) => {
                window.location.replace(url);
            });
    };

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
                <div className="container mx-auto text-left grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <h1 className="uppercase tracking-widest text-3xl m-5 md:m-8 pb-2 border-b-4 border-gray-900">
                            Billing Details
                        </h1>
                        <div className="mt-10 sm:mt-0 mx-5 md:mx-8">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="shadow-lg overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        First name
                                                    </label>
                                                    <input
                                                        {...register(
                                                            "firstName"
                                                        )}
                                                        readOnly
                                                        defaultValue={
                                                            user?.displayName
                                                        }
                                                        className="mt-1 p-2 border bg-gray-100 focus:outline-yellow-300 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Last name
                                                    </label>
                                                    <input
                                                        {...register(
                                                            "lastName"
                                                        )}
                                                        autoComplete="given-name"
                                                        className="mt-1 p-2 border bg-gray-100 focus:outline-yellow-300 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-4">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Email address
                                                    </label>
                                                    <input
                                                        {...register("email", {
                                                            required: true,
                                                        })}
                                                        defaultValue={
                                                            user?.email
                                                        }
                                                        className="mt-1 p-2 border bg-gray-100 focus:outline-yellow-300 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                    {errors?.email?.type ===
                                                        "required" && (
                                                        <p className="text-red-600 ml-2 mt-2">
                                                            <i className="fas fa-exclamation-triangle mr-1"></i>
                                                            This field is
                                                            required
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Country
                                                    </label>
                                                    <select
                                                        {...register(
                                                            "country",
                                                            { required: true }
                                                        )}
                                                        autoComplete="country-name"
                                                        className="mt-1 block w-full py-2 px-3 border bg-gray-100 focus:outline-yellow-300 rounded-md shadow-sm sm:text-sm"
                                                    >
                                                        <option value="Bangladesh">
                                                            Bangladesh
                                                        </option>
                                                        <option value="United States">
                                                            United States
                                                        </option>
                                                        <option value="Canada">
                                                            Canada
                                                        </option>
                                                        <option value="Mexico">
                                                            Mexico
                                                        </option>
                                                    </select>
                                                    {errors?.country?.type ===
                                                        "required" && (
                                                        <p className="text-red-600 ml-2 mt-2">
                                                            <i className="fas fa-exclamation-triangle mr-1"></i>
                                                            This field is
                                                            required
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Phone
                                                    </label>
                                                    <input
                                                        {...register("phone", {
                                                            required: true,
                                                        })}
                                                        autoComplete="phone"
                                                        className="mt-1 p-2 border bg-gray-100 focus:outline-yellow-300 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                    {errors?.phone?.type ===
                                                        "required" && (
                                                        <p className="text-red-600 ml-2 mt-2">
                                                            <i className="fas fa-exclamation-triangle mr-1"></i>
                                                            This field is
                                                            required
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="col-span-6">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Street address
                                                    </label>
                                                    <input
                                                        {...register("street", {
                                                            required: true,
                                                        })}
                                                        autoComplete="street-address"
                                                        className="mt-1 p-2 border bg-gray-100 focus:outline-yellow-300 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                    {errors?.street?.type ===
                                                        "required" && (
                                                        <p className="text-red-600 ml-2 mt-2">
                                                            <i className="fas fa-exclamation-triangle mr-1"></i>
                                                            This field is
                                                            required
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        City
                                                    </label>
                                                    <input
                                                        {...register("city", {
                                                            required: true,
                                                        })}
                                                        autoComplete="address-level2"
                                                        className="mt-1 p-2 border bg-gray-100 focus:outline-yellow-300 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                    {errors?.city?.type ===
                                                        "required" && (
                                                        <p className="text-red-600 ml-2 mt-2">
                                                            <i className="fas fa-exclamation-triangle mr-1"></i>
                                                            This field is
                                                            required
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        State / Province
                                                    </label>
                                                    <input
                                                        {...register("region")}
                                                        autoComplete="address-level1"
                                                        className="mt-1 p-2 border bg-gray-100 focus:outline-yellow-300 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        ZIP / Postal code
                                                    </label>
                                                    <input
                                                        {...register(
                                                            "postCode",
                                                            { required: true }
                                                        )}
                                                        autoComplete="postal-code"
                                                        className="mt-1 p-2 border bg-gray-100 focus:outline-yellow-300 block w-full shadow-md sm:text-sm rounded-md"
                                                    />
                                                    {errors?.postCode?.type ===
                                                        "required" && (
                                                        <p className="text-red-600 ml-2 mt-2">
                                                            <i className="fas fa-exclamation-triangle mr-1"></i>
                                                            This field is
                                                            required
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="uppercase bg-black text-yellow-400 tracking-wider px-8 py-3 my-4 hover:bg-gray-900 cursor-pointer"
                                            >
                                                Place Order
                                            </button>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="px-8">
                        <h1 className="uppercase tracking-widest text-3xl my-8 pb-2 border-b-4 border-gray-900">
                            Product Details
                        </h1>
                        <CartTable cart={cart}></CartTable>
                    </div>

                    <div className="m-5 md:m-8">
                        <h1 className="uppercase tracking-widest text-3xl pb-2 mb-3 border-b-4 border-gray-900">
                            Payment Method
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex items-center border p-4 mb-2">
                                <input
                                    id="stripe"
                                    type="radio"
                                    {...register("payType", { required: true })}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    value="stripe"
                                />
                                <label
                                    htmlFor="stripe"
                                    className="uppercase ml-3 block text-md font-semibold tracking-wider text-gray-900"
                                >
                                    Stripe
                                </label>
                            </div>
                            <div className="flex items-center border p-4">
                                <input
                                    id="ssl"
                                    type="radio"
                                    {...register("payType", { required: true })}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    value="ssl"
                                />
                                <label
                                    htmlFor="ssl"
                                    className="uppercase ml-3 block text-md font-semibold tracking-wider text-gray-900"
                                >
                                    SSL Commerz
                                </label>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                {errors?.payType?.type === "required" && (
                                    <p className="text-red-600 ml-2 mt-2">
                                        <i className="fas fa-exclamation-triangle mr-1"></i>
                                        Select a Payment Method
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    className="uppercase bg-black text-yellow-400 tracking-wider px-8 py-3 my-4 hover:bg-gray-900 cursor-pointer"
                                >
                                    Proceed To Pay
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mx-5 md:mx-8">
                        <TotalPrice
                            total={total}
                            discount={discount}
                        ></TotalPrice>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
