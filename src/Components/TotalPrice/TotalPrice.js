import React from "react";

const TotalPrice = ({ total, discount }) => {
    return (
        <div className="lg:w-3/4">
            <h1 className="uppercase text-2xl font-semibold tracking-wider py-3 border-b-2 border-gray-900">
                Total Price
            </h1>
            <div className="flex justify-between my-6">
                <p className="uppercase text-xl">Subtotal:</p>
                <p className="text-xl">${total}</p>
            </div>
            <div className="flex justify-between mt-6 pb-4 border-b-2 border-gray-900">
                <p className="uppercase text-xl">Shipping Fee:</p>
                <p className="text-xl">FREE</p>
            </div>
            {discount !== 0 && (
                <div className="flex justify-between mt-4 pb-4 border-b-2 border-gray-900">
                    <p className="uppercase text-xl">Discount:</p>
                    <p className="text-xl">- ${discount}</p>
                </div>
            )}
            <div className="flex justify-between my-4">
                <p className="uppercase text-xl">Order Total:</p>
                <p className="text-xl">${total - discount}</p>
            </div>
        </div>
    );
};

export default TotalPrice;
