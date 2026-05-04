import React from 'react';

const topGenarationPhoto = async () => {
    const res = await fetch("https://pixen-1.vercel.app/data.json");
    const photo = await res.json();
    return photo;
};

const page = async({ params }) => {
    const photos = await topGenarationPhoto();
    const { id } = await params
    
    const photo = photos.find(p => p.id === Number(id))
    console.log(photo)
    return (
        <div className='py-10'>
            <h1>{photo.title}</h1>
            <h3>{photo.prompt}</h3>
        </div>
    );
};

export default page;