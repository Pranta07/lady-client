import React from "react";
import SingleRow from "../SingleRow/SingleRow";

const ShoppingCart = () => {
    const data = JSON.parse(localStorage.getItem("cart"));
    console.log(data);
    const keys = Object.keys(data);
    console.log(keys);

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
            <div className="bg-white py-10">
                <div className="container mx-auto text-left">
                    <h1 className="uppercase tracking-widest text-4xl m-8">
                        Shopping Cart
                    </h1>
                    <div className="m-8">
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
                                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Product
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Size
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Price
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Quantity
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {keys.map((key) => (
                                                    <SingleRow
                                                        key={key}
                                                        id={key}
                                                        quantity={data[key]}
                                                    ></SingleRow>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
