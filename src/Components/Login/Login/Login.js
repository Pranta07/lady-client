import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { user, error, handleGoogleSignIn } = useFirebase();

    const onSubmit = (data) => {
        // console.log(data);
    };
    console.log(user);

    return (
        <div className="container mx-auto">
            <p className="uppercase py-4 tracking-widest text-left m-8 cursor-pointer">
                Home /{" "}
                <span className=" bg-black text-yellow-400 p-2">Login</span>
            </p>
            <div className="bg-white p-8 mb-12 rounded-md shadow-lg mx-8">
                <div className="flex justify-center">
                    <div>
                        <h1 className="text-xl tracking-widest font-semibold mb-3">
                            LOG IN WITH YOUR EMAIL ACCOUNT
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="block text-sm text-left pl-1 font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: true,
                                })}
                                autoComplete="email"
                                placeholder="somebody@example.com"
                                className="mt-1 mb-3 p-3 border bg-black placeholder:text-yellow-400 text-yellow-400 focus:outline-yellow-300 block w-full shadow-md sm:text-sm rounded-md"
                            />
                            {errors?.email?.type === "required" && (
                                <p className="text-red-600 ml-2 mb-2 text-left">
                                    <i class="fas fa-exclamation-triangle mr-1"></i>
                                    This field is required
                                </p>
                            )}
                            <label className="block text-sm text-left pl-1 font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                })}
                                autoComplete="password"
                                placeholder="Password"
                                className="mt-1 mb-3 p-3 border bg-black placeholder:text-yellow-400 text-yellow-400 focus:outline-yellow-300 block w-full shadow-md sm:text-sm rounded-md"
                            />
                            {errors?.password?.type === "required" && (
                                <p className="text-red-600 ml-2 mt-2 text-left">
                                    <i class="fas fa-exclamation-triangle mr-1"></i>
                                    This field is required
                                </p>
                            )}

                            <Link to="/register">
                                <p className="text-sm tracking-wider hover:text-blue-500 font-semibold cursor-pointer">
                                    New User? Please Register.
                                </p>
                            </Link>

                            <button
                                type="submit"
                                className="uppercase rounded-md bg-black text-yellow-400 tracking-wider px-8 py-3 my-4 hover:bg-gray-900 cursor-pointer"
                            >
                                Login
                            </button>

                            <p className="text-sm tracking-wider font-semibold pb-3">
                                .......or Sign-up with.......
                            </p>
                            <div>
                                <i
                                    onClick={handleGoogleSignIn}
                                    class="fab fa-google p-3 mr-2 text-xl rounded-md border hover:border-gray-800 hover:text-yellow-400"
                                ></i>
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

export default Login;
