import { TrashIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://ancient-dawn-22893.herokuapp.com/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .finally(() => setLoading(false));
    }, [isDelete]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                setIsDelete(false);
                fetch(`https://ancient-dawn-22893.herokuapp.com/orders/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((result) => {
                        if (result.deletedCount) {
                            Swal.fire(
                                "Deleted!",
                                "Deleted Successfully!",
                                "success"
                            );
                            setIsDelete(true);
                        } else {
                            Swal.fire(
                                "Opps!",
                                "Try again! Something went wrong!",
                                "warning"
                            );
                        }
                    });
            }
        });
    };

    return (
        <>
            <div className="container mx-auto">
                <p className="py-4 m-8 tracking-widest text-left uppercase cursor-pointer">
                    Admin /{" "}
                    <span className="p-2 text-yellow-400 bg-black ">
                        Manage Orders
                    </span>
                </p>
            </div>
            {loading ? (
                <div className="m-10">
                    <svg
                        className="w-5 h-5 mx-auto bg-yellow-400 animate-spin"
                        viewBox="0 0 24 24"
                    ></svg>
                </div>
            ) : (
                <div className="p-6 bg-gray-50 md:p-8 xl:p-14">
                    <div className="container grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
                        {orders.map((order) => (
                            <div
                                key={order._id}
                                className="relative p-4 border border-yellow-300 rounded-md shadow-md"
                            >
                                <div
                                    onClick={() => handleDelete(order._id)}
                                    className="absolute cursor-pointer top-2 right-2 hover:text-red-600"
                                >
                                    <TrashIcon className="w-6 h-6"></TrashIcon>
                                </div>
                                <div className="text-left">
                                    <p>
                                        <span className="font-semibold">
                                            Customer Email:{" "}
                                        </span>
                                        {order.cus_email}
                                    </p>
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
                                        {order.payment_status
                                            ? "PAID"
                                            : "PENDING"}
                                    </p>
                                </div>
                                <h2 className="my-2 text-xl font-semibold tracking-widest">
                                    Ordered Items
                                </h2>
                                {order.ordered_products?.map((product) => (
                                    <div
                                        key={product._id}
                                        className="flex items-center p-2 text-left border"
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
            )}
        </>
    );
};

export default ManageOrders;
