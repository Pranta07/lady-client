import React, { useState } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import ProductEditModal from "../ProductEditModal/ProductEditModal";
// import StudentEditModal from "../StudentEditModal/StudentEditModal";
// import DeleteModal from "../../AddFood/DeleteModal/DeleteModal";

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

    return (
        <>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-left">
                <td className="ml-2 px-6 py-4">
                    <input
                        onClick={handleSelect}
                        type="checkbox"
                        className="checked:bg-yellow-400 focus:ring-yellow-400 h-4 w-4 text-yellow-400 border-gray-300 rounded"
                    />
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    <img src={imgUrl} alt="" className="w-16 h-20" />
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    {name}
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                    {price}
                </td>
                <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
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
                    className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap hover:text-yellow-400"
                >
                    <PencilAltIcon className="inline h-5 w-5"></PencilAltIcon>
                </td>
                <td
                    // onClick={() => setDmOpen(true)}
                    className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap hover:text-red-600"
                >
                    <TrashIcon className="inline h-5 w-5"></TrashIcon>
                </td>
            </tr>

            {/*Edit Modal */}
            <ProductEditModal
                product={product}
                setIsUpdated={setIsUpdated}
                open={open}
                setOpen={setOpen}
            ></ProductEditModal>

            {/*<DeleteModal
                id={product._id}
                type="student"
                setIsDeleted={setIsDeleted}
                open={dmopen}
                setOpen={setDmOpen}
            ></DeleteModal> */}
        </>
    );
};

export default ProductRow;
