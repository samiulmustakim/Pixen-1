"use client";
import { UpdateUserModel } from "@/components/ProfileSection/UpdateUserModel";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
    const userdata = authClient.useSession();
    const user = userdata.data?.user;

    
    return (
        <div className="container  mx-auto flex justify-center items-center pt-20">
            <Card className="max-w-120 bg-gray-100 flex justify-center items-center gap-0 p-20">
                <Avatar className="w-20 h-20">
                    <Avatar.Image
                        referrerPolicy="no-referrer"
                        alt=""
                        src={user?.image}
                        
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <h1 className="text-lg font-bold mt-2">{user?.name}</h1>
                <p className="text-sm text-gray-500 mb-3">{user?.email}</p>
                <UpdateUserModel></UpdateUserModel>
            </Card>
        </div>
    );
};

export default page;