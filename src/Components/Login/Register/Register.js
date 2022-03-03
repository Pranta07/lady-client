import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Register = () => {
    const { handleRegister } = useFirebase();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const onSubmit = (data) => {
        handleRegister(data.name, data.email, data.password, navigate);
    };

    return (
        <div className="container mx-auto">
            <p className="py-4 m-8 tracking-widest text-left uppercase cursor-pointer">
                Home /{" "}
                <span className="p-2 text-yellow-400 bg-black ">Register</span>
            </p>
            <div className="p-8 mx-8 mb-12 bg-white rounded-md shadow-lg">
                <div className="flex justify-center">
                    <div>
                        <h1 className="mb-3 text-xl font-semibold tracking-widest">
                            SIGN-UP WITH YOUR EMAIL ACCOUNT
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="block pl-1 text-sm font-medium text-left text-gray-700">
                                Name
                            </label>
                            <input
                                {...register("name", {
                                    required: true,
                                })}
                                autoComplete="email"
                                placeholder="Your Name Goes Here..."
                                className="block w-full p-3 mt-1 mb-3 text-yellow-400 bg-black border rounded-md shadow-md placeholder:text-yellow-400 focus:outline-yellow-300 sm:text-sm"
                            />
                            {errors?.name?.type === "required" && (
                                <p className="mb-2 ml-2 text-left text-red-600">
                                    <i class="fas fa-exclamation-triangle mr-1"></i>
                                    This field is required
                                </p>
                            )}
                            <label className="block pl-1 text-sm font-medium text-left text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: true,
                                })}
                                autoComplete="email"
                                placeholder="somebody@example.com"
                                className="block w-full p-3 mt-1 mb-3 text-yellow-400 bg-black border rounded-md shadow-md placeholder:text-yellow-400 focus:outline-yellow-300 sm:text-sm"
                            />
                            {errors?.email?.type === "required" && (
                                <p className="mb-2 ml-2 text-left text-red-600">
                                    <i class="fas fa-exclamation-triangle mr-1"></i>
                                    This field is required
                                </p>
                            )}
                            <label className="block pl-1 text-sm font-medium text-left text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                })}
                                autoComplete="password"
                                placeholder="Password"
                                className="block w-full p-3 mt-1 mb-3 text-yellow-400 bg-black border rounded-md shadow-md placeholder:text-yellow-400 focus:outline-yellow-300 sm:text-sm"
                            />
                            {errors?.password?.type === "required" && (
                                <p className="mt-2 ml-2 text-left text-red-600">
                                    <i class="fas fa-exclamation-triangle mr-1"></i>
                                    This field is required
                                </p>
                            )}

                            <Link to="/login">
                                <p className="text-sm font-semibold tracking-wider cursor-pointer hover:text-blue-500">
                                    Already have an account? Please Login.
                                </p>
                            </Link>

                            <button
                                type="submit"
                                className="px-8 py-3 my-4 tracking-wider text-yellow-400 uppercase bg-black rounded-md cursor-pointer hover:bg-gray-900"
                            >
                                Register
                            </button>

                            <p className="pb-3 text-sm font-semibold tracking-wider">
                                .......or Sign-up with.......
                            </p>
                            <div>
                                <i class="fab fa-google p-3 mr-2 text-xl rounded-md border hover:border-gray-800 hover:text-yellow-400"></i>
                                <i class="fab fa-facebook-f p-3 mr-2 text-xl rounded-md border hover:border-gray-800 hover:text-yellow-400"></i>
                                <i class="fab fa-twitter p-3 mr-2 text-xl rounded-md border hover:border-gray-800 hover:text-yellow-400"></i>
                                <i class="fab fa-github p-3 mr-2 text-xl rounded-md border hover:border-gray-800 hover:text-yellow-400"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
