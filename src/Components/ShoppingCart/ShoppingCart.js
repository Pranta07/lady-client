import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import CartTable from "../CartTable/CartTable";
import TotalPrice from "../TotalPrice/TotalPrice";

const ShoppingCart = () => {
    const { cart, total } = useCart();
    const [text, setText] = useState("");
    const [discount, setDiscount] = useState(0);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleCoupon = () => {
        const couponCode = "LAGBENAKI";
        if (discount === 0) {
            if (text === couponCode) {
                // console.log("lagbe");
                const discount = (total / 100) * 10;
                setDiscount(discount);
                sessionStorage.setItem("discount", JSON.stringify(discount));
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
                        <CartTable cart={cart}></CartTable>

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
                            <div>
                                <TotalPrice
                                    total={total}
                                    discount={discount}
                                ></TotalPrice>
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
