import React, { Fragment, useRef } from "react";
import { PencilIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ProductEditModal = ({ setIsUpdated, product, open, setOpen }) => {
    const cancelButtonRef = useRef(null);
    const { name, price, imgUrl, stock } = product;

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name,
            price,
            imgUrl,
            stock: stock ? "In Stock" : "Out of Stock",
        },
    });

    const onSubmit = (data) => {
        // console.log(data);
        if (data.stock === "In Stock") data.stock = true;
        else data.stock = false;

        setIsUpdated(false);
        setOpen(false);
        fetch(`https://ancient-dawn-22893.herokuapp.com/edit/${product._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    Swal.fire({
                        title: "Well done!",
                        text: "Product Information Updated Successfully!",
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
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <PencilIcon
                                            className="h-6 w-6 text-yellow-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                            Edit Item
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to edit
                                                this product infromation? Don't
                                                worry! Item information can be
                                                updated as many times you want!
                                            </p>
                                            <form
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <div className="overflow-hidden sm:rounded-md">
                                                    <div className="px-4 py-5 bg-white sm:p-6">
                                                        <div className="grid grid-cols-6 gap-6">
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label className="block text-sm font-medium text-gray-700">
                                                                    Product name{" "}
                                                                    <span className="text-red-600">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    {...register(
                                                                        "name",
                                                                        {
                                                                            required: true,
                                                                        }
                                                                    )}
                                                                    className="mt-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                                                                />
                                                            </div>

                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label className="block text-sm font-medium text-gray-700">
                                                                    Price{" "}
                                                                    <span className="text-red-600">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    {...register(
                                                                        "price",
                                                                        {
                                                                            required: true,
                                                                        }
                                                                    )}
                                                                    className="mt-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                                                                />
                                                            </div>

                                                            <div className="col-span-6">
                                                                <label className="block text-sm font-medium text-gray-700">
                                                                    Image URL{" "}
                                                                    <span className="text-red-600">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    {...register(
                                                                        "imgUrl",
                                                                        {
                                                                            required: true,
                                                                        }
                                                                    )}
                                                                    className="mt-1 p-2 border bg-gray-100 focus:outline-pink-500 block w-full shadow-md sm:text-sm rounded-md"
                                                                />
                                                            </div>

                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label className="block text-sm font-medium text-gray-700">
                                                                    Availability{" "}
                                                                    <span className="text-red-600">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <select
                                                                    {...register(
                                                                        "stock",
                                                                        {
                                                                            required: true,
                                                                        }
                                                                    )}
                                                                    className="mt-1 block w-full py-2 px-3 border bg-gray-100 focus:outline-pink-500 rounded-md shadow-sm sm:text-sm"
                                                                >
                                                                    <option>
                                                                        In Stock
                                                                    </option>
                                                                    <option>
                                                                        Out of
                                                                        Stock
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-3 sm:flex sm:flex-row-reverse px-4">
                                                        <button
                                                            type="submit"
                                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-400 text-base font-medium text-black hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 sm:ml-3 sm:w-auto sm:text-sm"
                                                        >
                                                            Save Changes
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                            onClick={() => {
                                                                setOpen(false);
                                                                reset();
                                                            }}
                                                            ref={
                                                                cancelButtonRef
                                                            }
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ProductEditModal;
