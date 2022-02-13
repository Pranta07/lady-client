import { Menu, Transition } from "@headlessui/react";
import { CheckIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";
import Swal from "sweetalert2";
import ProductRow from "../ProductRow/ProductRow";

const ProductsTable = ({ products, setIsUpdated /* setIsDeleted */ }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleStock = (status) => {
        // console.log(selectedItems);
        setIsUpdated(false);
        fetch(
            `https://ancient-dawn-22893.herokuapp.com/products/update/${status}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(selectedItems),
            }
        )
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: "Well done!",
                        text: "Stock Status Updated Successfully!",
                        icon: "success",
                        timer: 1500,
                    });
                    setIsUpdated(true);
                } else {
                    Swal.fire({
                        title: "Warning!",
                        text: "Already up to date!",
                        icon: "warning",
                        timer: 2000,
                    });
                }
            });
    };

    return (
        <>
            <div className="block">
                <div
                    className={selectedItems.length === 0 ? "hidden" : "block"}
                >
                    <div className="w-1/2 md:mx-auto rounded p-2 bg-green-200 text-black font-semibold tracking-widest">
                        <CheckIcon className="inline h-5 w-5 pr-1"></CheckIcon>
                        <span className="text-sm">
                            {selectedItems.length} items selected.
                        </span>
                    </div>
                </div>

                <div className="ml-4 flex justify-end items-center md:ml-6">
                    <Menu as="div" className="ml-3 relative">
                        <div className="flex items-center md:mr-2 lg:mr-9 mb-2">
                            <span className="text-sm pr-3 font-semibold tracking-widest">
                                Update Stock
                            </span>
                            <Menu.Button className="max-w-xs bg-gray-100 hover:bg-yellow-400 p-2 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-400 focus:ring-white">
                                <DotsVerticalIcon className="hover:text-white inline h-5 w-5"></DotsVerticalIcon>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-yellow-400 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                <Menu.Item>
                                    <button
                                        onClick={() => handleStock(false)}
                                        className="font-semibold tracking-widest hover:bg-gray-800 hover:text-white block w-full px-4 py-2 text-sm"
                                    >
                                        Mark as Out of Stock
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button
                                        onClick={() => handleStock(true)}
                                        className="font-semibold tracking-widest hover:bg-gray-800 hover:text-white block w-full px-4 py-2 text-sm"
                                    >
                                        Mark as In Stock
                                    </button>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>

            <div className="flex flex-col overflow-x-scroll">
                <div className="mx-2">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="">
                            <table className="min-w-full">
                                <thead className="bg-gray-100 border border-gray-900">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="font-semibold text-gray-900 px-6 py-4 text-left"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="font-semibold text-gray-900 px-6 py-4 text-left"
                                        >
                                            Product Img
                                        </th>
                                        <th
                                            scope="col"
                                            className="font-semibold text-gray-900 px-6 py-4 text-left"
                                        >
                                            Product Name
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
                                            Availability
                                        </th>
                                        <th
                                            scope="col"
                                            className="font-semibold text-gray-900 px-6 py-4 text-left"
                                        >
                                            Edit
                                        </th>
                                        <th
                                            scope="col"
                                            className="font-semibold text-gray-900 px-6 py-4 text-left"
                                        >
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products?.map((product) => (
                                        <ProductRow
                                            key={product._id}
                                            product={product}
                                            setIsUpdated={setIsUpdated}
                                            // setIsDeleted={setIsDeleted}
                                            selectedItems={selectedItems}
                                            setSelectedItems={setSelectedItems}
                                        ></ProductRow>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsTable;
