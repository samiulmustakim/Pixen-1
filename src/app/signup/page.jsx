"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm, Watch } from "react-hook-form";

const SignUppage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSignUp = async (data) => {
        const { name, email, photo, password } = data;
        console.log(name, email, photo, password);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
        });

        if (error) {
            alert(error.message)
        } else{
            alert("signup sucessfull")
        }
        
    };

    return (
        <div className="flex items-center justify-center pt-20">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 border-gray-200 border">
                <div className="">
                    <form
                        className="card-body"
                        onSubmit={handleSubmit(handleSignUp)}
                    >
                        <h1 className="text-2xl text-center">Login</h1>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Enter Your Name"
                                {...register("name", {
                                    required: "Name Field is required",
                                })}
                            />
                            {errors.name && (
                                <p className="text-sm block text-red-500">
                                    {errors.name.message}
                                </p>
                            )}
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Image URl</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Image URl"
                                {...register("photo", {
                                    required: "Photo Field is required",
                                })}
                            />
                            {errors.photo && (
                                <span className="text-sm block text-red-500 pt-1">
                                    {errors.photo.message}
                                </span>
                            )}
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email Field is required",
                                })}
                            />
                            {errors.email && (
                                <span className="text-sm block text-red-500 pt-1">
                                    {errors.email.message}
                                </span>
                            )}
                        </fieldset>

                        <fieldset>
                            <label className="label">Password</label>
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                {...register("password", {
                                    required: "PassWord Field is required",
                                })}
                            />
                            {errors.password && (
                                <span className="text-sm block text-red-500 pt-1">
                                    {errors.password.message}
                                </span>
                            )}
                        </fieldset>

                        <div>
                            <a className="link link-hover text-xs">
                                Forgot password?
                            </a>
                        </div>
                        <button type="submit" className="btn btn-neutral mt-4">
                            Login
                        </button>
                        <p>
                            Don&apos;t have an accout{" "}
                            <Link href={"/signup"} className="text-red-600 ">
                                register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUppage;
