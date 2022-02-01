import React, { useEffect, useState } from "react";

const SingleRow = ({ id, quantity }) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, [id]);

    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                1
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <img src={item?.imgUrl} alt="" width={50} />
                    <span className="font-semibold tracking-wider ml-2">
                        {item?.name}
                    </span>
                </div>
            </td>
            <td class="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                S
            </td>
            <td class="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                $ {item?.price}
            </td>
            <td class="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                {quantity}
            </td>
            <td class="text-sm font-semibold tracking-wider ml-2 text-gray-900 px-6 py-4 whitespace-nowrap">
                $ {quantity * item?.price}
            </td>
        </tr>
    );
};

export default SingleRow;
