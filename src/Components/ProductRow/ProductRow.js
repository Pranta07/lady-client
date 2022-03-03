import React, { useState } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import ProductEditModal from "../ProductEditModal/ProductEditModal";
import Swal from "sweetalert2";

const ProductRow = ({
    product,
    setIsUpdated,
    // setIsDeleted,
    selectedItems,
    setSelectedItems,
}) => {
    const [open, setOpen] = useState(false);
    // const [dmopen, setDmOpen] = useState(false);
    const { name, price, imgUrl, stock } = product;

    const handleSelect = (e) => {
        const checked = e.target.checked;
        if (checked) {
            setSelectedItems([...selectedItems, product._id]);
        } else {
            setSelectedItems(selectedItems.filter((id) => id !== product._id));
        }
    };

    const handleDelete = () => {
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
                // backend skipped...
                Swal.fire("Opps!", "This action can not be done!", "warning");
            }
        });
    };

    return (
        <>
            <tr className="text-left transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100">
                <td className="px-6 py-4 ml-2">
                    <input
                        onClick={handleSelect}
                        type="checkbox"
                        className="w-4 h-4 text-yellow-400 border-gray-300 rounded checked:bg-yellow-400 focus:ring-yellow-400"
                    />
                </td>
                <td className="px-6 py-4 ml-2 text-sm font-semibold tracking-wider text-gray-900 whitespace-nowrap">
                    <img src={imgUrl} alt="" className="w-16 h-20" />
                </td>
                <td className="px-6 py-4 ml-2 text-sm font-semibold tracking-wider text-gray-900 whitespace-nowrap">
                    {name}
                </td>
                <td className="px-6 py-4 ml-2 text-sm font-semibold tracking-wider text-gray-900 whitespace-nowrap">
                    {price}
                </td>
                <td className="px-6 py-4 ml-2 text-sm font-semibold tracking-wider text-gray-900 whitespace-nowrap">
                    <span
                        className={
                            stock
                                ? "p-2 rounded-xl bg-green-200"
                                : "p-2 rounded-xl bg-gray-200"
                        }
                    >
                        {stock ? "In Stock" : "Out of Stock"}
                    </span>
                </td>
                <td
                    onClick={() => setOpen(true)}
                    className="px-6 py-4 ml-2 text-sm font-semibold tracking-wider text-gray-900 whitespace-nowrap hover:text-yellow-400"
                >
                    <PencilAltIcon className="inline w-5 h-5"></PencilAltIcon>
                </td>
                <td
                    onClick={handleDelete}
                    className="px-6 py-4 ml-2 text-sm font-semibold tracking-wider text-gray-900 whitespace-nowrap hover:text-red-600"
                >
                    <TrashIcon className="inline w-5 h-5"></TrashIcon>
                </td>
            </tr>

            {/*Edit Modal */}
            <ProductEditModal
                product={product}
                setIsUpdated={setIsUpdated}
                open={open}
                setOpen={setOpen}
            ></ProductEditModal>
        </>
    );
};

export default ProductRow;
