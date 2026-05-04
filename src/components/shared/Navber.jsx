"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const Navber = () => {
    const handleSignout = async() => {
        await authClient.signOut();

    }
    const userdata = authClient.useSession();
    const user = userdata.data?.user;
    return (
        <div className="shadow-lg px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">pixgen.</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <NavLink href={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/all-photo"}>All Photos</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/pricing"}>Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/profile"}>Profile</NavLink>
                    </li>
                </ul>

                <div className="flex">
                    {!user && (
                        <ul className="flex items-center gap-4 text-sm">
                            <li>
                                <NavLink href={"/signup"}>SignUp</NavLink>
                            </li>
                            <li>
                                <NavLink href={"/signin"}>SignIn</NavLink>
                            </li>
                        </ul>
                    )}
                    {user && (
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <Avatar.Image
                                    referrerPolicy="no-referrer"
                                    alt=""
                                    src={user.image}
                                />
                                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                            <button onClick={handleSignout} className="font-bold">SignOut</button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navber;
