import Card from '@/components/CardSection/Card';
import React from 'react';

const topGenarationPhoto = async () => {
    const res = await fetch("https://pixen-1.vercel.app/data.json");
    const photo = await res.json();
    return photo;
};

const page = async() => {
    const photos = await topGenarationPhoto();
    console.log(photos)

    return (
        <div>
            <h1 className="text-3xl py-10 font-bold">All Photos</h1>
            <div className="grid grid-cols-4 gap-10">
                {photos.map((photo) => {
                    return (
                        <Card key={photo.id} photo={photo}></Card>
                    );
                })}
            </div>
        </div>
    );
};

export default page;