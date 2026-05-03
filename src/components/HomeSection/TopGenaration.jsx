import { Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoIosHeart } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import Card from "../CardSection/Card";

const topGenarationPhoto = async () => {
    const res = await fetch("https://pixen-1.vercel.app/data.json");
    const photo = await res.json();
    return photo;
};

const TopGenaration = async () => {
    const photos = await topGenarationPhoto();

    return (
        <div>
            <h1 className="text-3xl py-10 font-bold">Top Generations</h1>
            <div className="grid grid-cols-4 gap-10">
                {photos.slice(0, 8).map((photo) => {
                    return (
                        <Card key={photo.id} photo={photo}></Card>
                    );
                })}
            </div>
        </div>
    );
};

export default TopGenaration;
