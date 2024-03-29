import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import CartTable from "../CartTable/CartTable";

const Success = () => {
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch(`https://lady.up.railway.app/orders/${id}`)
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
        fetch("https://lady.up.railway.app/validate", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    Swal.fire(
                        "Success!",
                        "Order Placed Successfully!",
                        "success"
                    );
                    window.location.replace(
                        "https://ladyecommerce-d15fd.web.app/"
                    );
                    localStorage.clear();
                    sessionStorage.clear();
                } else {
                    Swal.fire("Opps!", "Confirm Your Order First!", "warning");
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
            <h1 className="m-8 text-3xl tracking-widest uppercase">
                Order Summery
            </h1>
            <p className="py-2 text-xl uppercase">
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
                className="px-8 py-3 my-4 tracking-wider text-yellow-400 uppercase bg-black cursor-pointer hover:bg-gray-900"
            >
                Confirm Order
            </button>
        </div>
    );
};

export default Success;
