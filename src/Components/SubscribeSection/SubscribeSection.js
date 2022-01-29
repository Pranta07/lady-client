import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const SubscribeSection = () => {
    return (
        <div className="bg-white text-black">
            <div className="p-8">
                <p className="uppercase py-4 tracking-widest">
                    GET LASTEST NEW AND COUPON FROM LADY Fashion
                </p>
                <h1 className="uppercase text-4xl font-bold tracking-widest">
                    SUBSCRIBE
                </h1>
                <p className="w-1/5 h-3 bg-yellow-400 my-5 mx-auto "></p>

                <div className="relative mt-1 rounded-md shadow-sm md:w-2/3 lg:w-1/3 xl:w-1/3 mx-auto mb-0">
                    <span className="absolute top-6 left-0 text-gray-500 sm:text-md px-4">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </span>

                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="YOUR EMAIL ADDRESS"
                        className="border-2 focus:border-yellow-400 bg-black text-white text-center rounded-md w-full py-3 px-10 my-3 outline-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;
