import React from "react";
import SingleRow from "../SingleRow/SingleRow";

const CartTable = ({ cart }) => {
    return (
        <div className="flex flex-col overflow-x-scroll">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="">
                        <table className="min-w-full">
                            <thead className="bg-white border-2 border-gray-900">
                                <tr>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        #
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Product
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Size
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-semibold text-gray-900 px-6 py-4 text-left"
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
    );
};

export default CartTable;
