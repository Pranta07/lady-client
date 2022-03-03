import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import CartTable from "../CartTable/CartTable";
import TotalPrice from "../TotalPrice/TotalPrice";

const ShoppingCart = () => {
    const { cart, total, loading } = useCart();
    const [text, setText] = useState("");
    const [discount, setDiscount] = useState(0);

    const handleChange = (e) => {
        setText(e.target.value);
    };
    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const handleCoupon = () => {
        const couponCode = "LAGBENAKI";
        if (discount === 0) {
            if (text === couponCode) {
                // console.log("lagbe");
                Swal.fire(
                    "Success!",
                    "Discount Applied Successfully!",
                    "success"
                );
                const discount = (total / 100) * 10;
                setDiscount(parseFloat(discount).toFixed(2));
                sessionStorage.setItem("discount", JSON.stringify(discount));
            } else {
                Swal.fire("Opps!", "Invalid Coupon! Try Again.", "warning");
            }
        } else {
            Swal.fire("Warning!", "Already Grabbed Discount Offer!", "warning");
        }
    };

    if (loading) {
        return (
            <div className="m-10">
                <svg
                    className="animate-spin h-5 w-5 bg-yellow-400 mx-auto ..."
                    viewBox="0 0 24 24"
                ></svg>
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto">
                <p className="py-4 m-8 tracking-widest text-left uppercase cursor-pointer">
                    Home /{" "}
                    <span className="p-2 text-yellow-400 bg-black ">
                        Shopping Cart
                    </span>
                </p>
            </div>
            {cart?.length === 0 ? (
                <div>
                    <p className="mb-8 text-xl font-semibold tracking-widest">
                        Your cart is empty! Back to Shopping!
                    </p>
                </div>
            ) : (
                <div className="py-10 bg-white border-b-2 border-gray-300">
                    <div className="container mx-auto text-left">
                        <h1 className="m-8 text-4xl tracking-widest uppercase">
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
                                        className="p-3 text-gray-800 bg-gray-100 border rounded-sm shadow-md md:w-1/2 focus:outline-yellow-300 placeholder:uppercase"
                                    />
                                    <button
                                        onClick={handleCoupon}
                                        className="px-8 py-3 my-8 ml-2 tracking-wider text-yellow-400 uppercase bg-black cursor-pointer hover:bg-gray-900"
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
                                        <button className="px-8 py-3 my-8 tracking-wider text-yellow-400 uppercase bg-black cursor-pointer hover:bg-gray-900">
                                            process to checkout
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ShoppingCart;
