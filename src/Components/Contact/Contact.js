import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="pb-16">
            <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                Home /{" "}
                <span className=" bg-black text-yellow-400 p-2">Contact</span>
            </p>
            <div className="flex flex-col lg:w-4/6 mx-auto md:w-4/6">
                <h1 className="font-bold text-5xl">Contact</h1>
                <div className="mt-8 font">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter "></i>
                    <i className="fab fa-instagram "></i>
                    <i className="fab fa-google-plus-g "></i>
                </div>
                <p className="text-xl tracking-widest font-semibold p-3">
                    For any kind of information needed feel free to contact us!
                </p>
                <div className="contact">
                    <input
                        className="px-2 mb-3 w-3/4 mx-auto mt-8 border-black placeholder:italic placeholder:text-center focus:outline-gray-500"
                        type="text"
                        name=""
                        id=""
                        placeholder="NAME *"
                    />

                    <input
                        className="px-2 mb-3 w-3/4 mx-auto border-black placeholder:italic placeholder:text-center focus:outline-gray-500"
                        type="text"
                        name=""
                        placeholder="EMAIL *"
                        id=""
                    />

                    <input
                        className="px-2 w-3/4 mx-auto border-black placeholder:italic placeholder:text-center mb-3 focus:outline-gray-500"
                        type="text"
                        name=""
                        placeholder="SUBJECT *"
                        id=""
                    />

                    <textarea
                        className="p-2 w-3/4 mx-auto border-black placeholder:italic placeholder:text-center mb-3 focus:outline-gray-500"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="MESSAGE GOES HERE..."
                    />

                    <div>
                        <button
                            type="submit"
                            className="uppercase bg-black text-yellow-400 tracking-wider px-8 py-3 my-4 mx-auto hover:bg-gray-900 cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
