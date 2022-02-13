import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useEffect } from "react";
import ProductsTable from "../ProductsTable/ProductsTable";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://ancient-dawn-22893.herokuapp.com/products?type=catalog&&page=${pageNum}`
        )
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setPageCount(Math.ceil(data.count / 8));
                setProducts(data.result);
            });
    }, [pageNum]);

    return (
        <>
            <div className="container mx-auto">
                <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                    Admin /{" "}
                    <span className=" bg-black text-yellow-400 p-2">
                        Manage Products
                    </span>
                </p>
            </div>
            <ProductsTable products={products}></ProductsTable>
            {/* pagination */}
            <div className="my-5">
                <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                >
                    <button
                        onClick={() => {
                            pageNum > 0 && setPageNum(pageNum - 1);
                        }}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-yellow-400"
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                    </button>

                    {[...Array(pageCount).keys()].map((number) => (
                        <button
                            key={number}
                            onClick={() => {
                                setPageNum(number);
                            }}
                            className={
                                pageNum === number
                                    ? "bg-yellow-400 border-gray-300 text-gray-900 hover:bg-yellow-400 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                    : "bg-white border-gray-300 text-gray-900 hover:bg-yellow-400 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            }
                        >
                            {number}
                        </button>
                    ))}

                    <button
                        onClick={() => {
                            pageNum < pageCount - 1 && setPageNum(pageNum + 1);
                        }}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-yellow-400"
                    >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                    </button>
                </nav>
            </div>
        </>
    );
};

export default ManageProducts;
