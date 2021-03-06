import React from "react";

const SingleRow = ({ item, num }) => {
    return (
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {num}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <img src={item?.imgUrl} alt="" width={50} />
                    <span className="font-semibold tracking-wider ml-2">
                        {item?.name}
                    </span>
                </div>
            </td>
            <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                S
            </td>
            <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                $ {parseFloat(item?.price).toFixed(2)}
            </td>
            <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                {item?.quantity}
            </td>
            <td className="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                $ {parseFloat(item?.quantity * item?.price).toFixed(2)}
            </td>
        </tr>
    );
};

export default SingleRow;
