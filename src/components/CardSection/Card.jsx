import { Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoIosHeart } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";

const Card = ({photo}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm relative">
                <figure>
                    <Image
                        className="aspect-square object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="eager"
                        src={photo.imageUrl}
                        width={400}
                        alt="Photo"
                        height={400}
                    ></Image>
                </figure>
                <div className="space-y-4 pt-2">
                    <h2 className="card-title">{photo.title}</h2>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1">
                            <p className="text-xl">
                                <IoIosHeart />
                            </p>
                            <p className="text-xl">{photo.likes}</p>
                        </div>
                        <Separator orientation="vertical"></Separator>
                        <div className="flex items-center gap-1">
                            <p className="text-xl">
                                <MdFileDownload />
                            </p>
                            <p className="text-xl">{photo.downloads}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-white shadow-sm w-full rounded-full">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="badge badge-soft text-black badge-accent absolute top-6 right-6">
                    {photo.category}
                </div>
            </div>
        </div>
    );
};

export default Card;
