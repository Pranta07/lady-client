import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import SingleRow from "../SingleRow/SingleRow";

const ShoppingCart = () => {
    const { cart, total } = useCart();
    const [text, setText] = useState("");
    const [discount, setDiscount] = useState(true);
    const [disPrice, setDisPrice] = useState(0);

    const orderTotal = total - disPrice;

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleCoupon = () => {
        const couponCode = "LAGBENAKI";
        if (discount) {
            if (text === couponCode) {
                // console.log("lagbe");
                const discount = (total / 100) * 10;
                setDisPrice(discount);
                setDiscount(false);
                sessionStorage.setItem("discount", discount);
            } else {
                alert("Invalid Coupon! Try Again.");
            }
        } else {
            alert("Already Applied!");
        }
    };

    return (
        <>
            <div className="container mx-auto">
                <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                    Home /{" "}
                    <span className=" bg-black text-yellow-400 p-2">
                        Shopping Cart
                    </span>
                </p>
            </div>
            <div className="bg-white py-10 border-b-2 border-gray-300">
                <div className="container mx-auto text-left">
                    <h1 className="uppercase tracking-widest text-4xl m-8">
                        Shopping Cart
                    </h1>
                    <div className="m-8">
                        {/* Cart Items */}
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <thead class="bg-white border-2 border-gray-900">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        #
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="font-semibold text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Product
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="font-semibold text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Size
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="font-semibold text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Price
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="font-semibold text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Quantity
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="font-semibold text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((item, index) => (
                                                    <SingleRow
                                                        key={item._id}
                                                        item={item}
                                                        num={index}
                                                    ></SingleRow>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="coupon"
                                    placeholder="Coupon Code"
                                    className="md:w-1/2 rounded-sm p-3 bg-gray-300 text-gray-800 focus:border-2 border-gray-900 placeholder:uppercase"
                                />
                                <button
                                    onClick={handleCoupon}
                                    className="uppercase bg-black text-yellow-400 tracking-wider px-8 py-3 my-8 ml-2 hover:bg-gray-900 cursor-pointer"
                                >
                                    Apply
                                </button>
                            </div>
                            <div className="lg:w-3/4">
                                <h1 className="uppercase text-2xl font-semibold tracking-wider py-3 border-b-2 border-gray-900">
                                    Total Price
                                </h1>
                                <div className="flex justify-between my-6">
                                    <p className="uppercase text-xl">
                                        Subtotal:
                                    </p>
                                    <p className="text-xl">${total}</p>
                                </div>
                                <div className="flex justify-between mt-6 pb-4 border-b-2 border-gray-900">
                                    <p className="uppercase text-xl">
                                        Shipping Fee:
                                    </p>
                                    <p className="text-xl">FREE</p>
                                </div>
                                {!discount && (
                                    <div className="flex justify-between mt-4 pb-4 border-b-2 border-gray-900">
                                        <p className="uppercase text-xl">
                                            Discount:
                                        </p>
                                        <p className="text-xl">- ${disPrice}</p>
                                    </div>
                                )}
                                <div className="flex justify-between my-4">
                                    <p className="uppercase text-xl">
                                        Order Total:
                                    </p>
                                    <p className="text-xl">${orderTotal}</p>
                                </div>
                                <Link to="/checkout">
                                    <button className="uppercase bg-black text-yellow-400 tracking-wider px-8 py-3 my-8 hover:bg-gray-900 cursor-pointer">
                                        process to checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
