'use client'

import { createRef, useState } from "react";

const images = [
    'https://image.tmdb.org/t/p/w780/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg',
    'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
]

export const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

 
    const refs = images.reduce((acc: any, val, i) => {
        acc[i] = createRef();
        return acc;
    }, {});

    const scrollToImage = (i: any) => {
        setCurrentImage(i);
      
        refs[i].current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        });
    };

    const totalImages = images.length;


    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
            scrollToImage(0);
        } else {
            scrollToImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1);
        } else {
            scrollToImage(currentImage - 1);
        }
    };

    const arrowStyle =
        'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

    const sliderControl = (isLeft = false) => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
            style={{ top: '40%' }}
        >
            <span className="font-bold" role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
                {isLeft ? '<' : '>'}
            </span>
        </button>
    );

    return (

        <div className="flex  w-full h-[500px] relative items-center overflow-hidden">
            <div className="relative w-full h-full">
                <div className="carouse h-full ">
                    {sliderControl(true)}
                    {images.map((img, i) => (
                        <div className="w-full h-[500px] flex-shrink-0" key={img} ref={refs[i]}>
                            <img src={img} className="absolute select-none [aspect-ratio:auto_1200_/_780] w-full h-full object-cover " />
                            <div className="text-white font-[30pt] ">titlqasdasd </div>

                        </div>
                    ))}
                    {sliderControl()}
                </div>
            </div>
        </div>
    );
};