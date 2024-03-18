'use client'

import { storeCurrentPage } from "@/store/storeCurrentPage"
import { useEffect, useState } from "react"

export function FrameMedia({ data }: any) {
    const [setInfo] = storeCurrentPage((state) => [state.setInfoCurrentPage])
    useEffect(() => {
        if (data) {
            setInfo(data)
        }
        return () => {
            setInfo(null)
        }
    }, [])
    const [open, setOpen] = useState<boolean>(false)
    return <div className="aspect-video cursor-pointer group relative">

        {
            open && <iframe
                className=" bg-panel aspect-video"
                src={process.env.iframer + data.id}
                width="100%" height="100%" frameBorder="0" scrolling="no" allowFullScreen
            />
        }
        {
            !open &&
            <>
                <div className={`absolute w-full h-full
                    top-0 left-0 -z-10 
                    bg-panel
                    aspect-video 
                    blur-sm
                `}

                >
                    <img
                        className="w-full"
                        src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`}
                        alt=""
                    />
                </div>
                <div
                    className="w-[3.75rem] 
                h-[3.75rem] 
                leading-[3.75rem] 
                text-center 
                border-[2px] 
                border-solid 
                border-[#fff] 
                absolute 
                left-[0] 
                top-[0] 
                right-[0] 
                bottom-[0] 
                m-auto 
                z-[1] 
                rounded-[50%] 
                text-[1.25rem] 
                text-[#fff] 
                hover:scale-105
                active:scale-95
                "
                    onClick={() => {
                        setOpen(true)
                    }}
                >
                    <p className="ml-[18px] mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1.5em" viewBox="0 0 384 512">
                            <path d="M73 39A47.9 47.9 0 0 0 0 80v352a48 48 0 0 0 73 41l288-176a48 48 0 0 0 0-82L73 39z" />
                        </svg>
                    </p>
                </div>
            </>
        }

    </div>
}