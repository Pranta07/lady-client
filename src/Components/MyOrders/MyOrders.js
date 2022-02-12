import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFirebase from "../../hooks/useFirebase";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useFirebase();

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);
    // console.log(orders);

    return (
        <>
            <div className="container mx-auto">
                <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                    Home /{" "}
                    <span className=" bg-black text-yellow-400 p-2">
                        My Orders
                    </span>
                </p>
            </div>
            <div className="bg-gray-50 p-6 md:p-8 xl:p-14">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {orders.map((order) => (
                        <div
                            key={order._id}
                            className="p-4 border rounded-md shadow-md"
                        >
                            <div className="text-left">
                                <p>
                                    <span className="font-semibold">
                                        TrxId:{" "}
                                    </span>
                                    {order.tran_id}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Total Cost:{" "}
                                    </span>
                                    {order.currency}
                                    {order.total_amount}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Payment Status:{" "}
                                    </span>
                                    {order.payment_status ? "PAID" : "PENDING"}
                                </p>
                            </div>
                            <h2 className="text-xl my-2 font-semibold tracking-widest">
                                Ordered Items
                            </h2>
                            {order.ordered_products?.map((product) => (
                                <div
                                    key={product._id}
                                    className="border p-2 flex items-center text-left"
                                >
                                    <div className="w-1/6">
                                        <img
                                            src={product.imgUrl}
                                            alt=""
                                            className="w-full h-20"
                                        />
                                    </div>

                                    <div className="m-2">
                                        <h1 className="text-xl font-semibold tracking-widest">
                                            {product.name}
                                        </h1>
                                        <p className="text-sm font-semibold tracking-widest">
                                            Price: {order.currency}
                                            {product.price}
                                        </p>
                                        <p className="text-sm font-semibold tracking-widest">
                                            Quantity: {product.quantity}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyOrders;
