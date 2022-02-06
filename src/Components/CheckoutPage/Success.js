import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CartTable from "../CartTable/CartTable";

const Success = () => {
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/orders/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data) {
                    navigate("/");
                } else setOrder(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);
    // console.log(order);

    const handleConfirm = () => {
        const data = { tran_id: order.tran_id, val_id: order.val_id };
        // console.log(data);
        fetch("http://localhost:5000/validate", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    alert("Order Placed Successfully!");
                    window.location.replace("http://localhost:3000");
                    localStorage.clear();
                    sessionStorage.clear();
                } else {
                    alert("Confirm Your Order First!");
                }
            });
    };

    if (loading) {
        return (
            <div className="m-10">
                <svg
                    class="animate-spin h-5 w-5 bg-yellow-400 mx-auto ..."
                    viewBox="0 0 24 24"
                ></svg>
            </div>
        );
    }

    return (
        <div>
            <h1 className="uppercase m-8 text-3xl tracking-widest">
                Order Summery
            </h1>
            <p className="uppercase text-xl py-2">
                Payment Received : ${order?.total_amount}
            </p>
            <div className="mx-5 md:mx-8">
                <div>
                    {order?.ordered_products && (
                        <CartTable cart={order.ordered_products}></CartTable>
                    )}
                </div>
            </div>
            <button
                onClick={handleConfirm}
                type="submit"
                className="uppercase bg-black text-yellow-400 tracking-wider px-8 py-3 my-4 hover:bg-gray-900 cursor-pointer"
            >
                Confirm Order
            </button>
        </div>
    );
};

export default Success;
