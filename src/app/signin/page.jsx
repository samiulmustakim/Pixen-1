"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm, Watch } from "react-hook-form";

const page = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSignUp = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", // ← এটা নেই
        });
    };

    return (
        <div className="flex items-center justify-center pt-20">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 border-gray-200 border">
                <div className="">
                    <form
                        className="card-body"
                        onSubmit={handleSubmit(handleSignUp)}
                    >
                        <h1 className="text-2xl text-center">Sign Up</h1>
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
                        <p className="text-xs">
                            Don&apos;t have an accout{" "}
                            <Link href={"/signup"} className="text-red-600 ">
                                register
                            </Link>
                        </p>
                    </form>
                    <div className="card pt-0 mt-0">
                        <h1 className="text-2xl text-center">or</h1>
                        <button
                            onClick={handleGoogleSignIn}
                            className="border  w-full hover:bg-gray-100 border-gray-200 p-1.5 rounded-full"
                        >
                            Sign In With Goggle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
