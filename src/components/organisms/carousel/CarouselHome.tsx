'use client'

import { Block } from "@/components/atom/block/block";
import { useEffect, useRef, useState } from "react";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";


let count = 0;
let slideInterval: any = null;

export const Carousel = ({ data }: { data: any[] }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef<any>();

    const removeAnimation = () => {
        if (slideRef.current) {
            slideRef.current.classList.remove("fade-anim");

        }
    };

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.addEventListener("animationend", removeAnimation);
            slideRef.current.addEventListener("mouseenter", pauseSlider);
            slideRef.current.addEventListener("mouseleave", startSlider);
        }

        startSlider();
        return () => {
            pauseSlider();
        };
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % 5;
        setCurrentIndex(count);
        if (slideRef.current) {
            slideRef.current.classList.add("fade-anim");
        }
    };
    const handleOnPrevClick = () => {
        const productsLength = 5;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        if (slideRef.current) {
            slideRef.current.classList.add("fade-anim");
        }
    };

    return (
        <div ref={slideRef} className="w-full h-auto mt-[28px] select-none relative overflow-hidden rounded-[30px] ">
            <div className="aspect-video relative">
                <div className="relative w-full h-full flex flex-col justify-center items-center ">
                    <h1 className="relative font-bold text-text2 text-3xl">{data[currentIndex].title}</h1>
                    <Block className="w-[150px] h-[200px] relative">
                        <img className="w-full relative"
                            src={`https://image.tmdb.org/t/p/w780${data[currentIndex].poster_path}`} alt="" />
                    </Block>
                </div>
                <div className="absolute w-full h-full backdrop-blur-3xl blur-md  top-0 left-0 -z-10 
                    bg-gradient-radial
                    to-transparent
                    aspect-video 
                    from-red
                ">
                    <img
                        className="w-full"
                        src={`https://image.tmdb.org/t/p/w780${data[currentIndex].backdrop_path}`}
                        alt=""
                    />
                </div>
            </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnPrevClick}
                >
                    <AiOutlineVerticalRight size={30} />
                </button>
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnNextClick}
                >
                    <AiOutlineVerticalLeft size={30} />
                </button>
            </div>
        </div>

    );
}