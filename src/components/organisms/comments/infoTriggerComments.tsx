'use client'
import { ButtonUI } from "@/components/atom/button/buttonUI"
import { TilleHome } from "@/components/atom/title/titleHome"
import Image from "next/image"
import { GiLoveMystery } from "react-icons/gi"

export const InfoTriggerComments = ({ data }: any) => {
    if (data === null) {
        return <></>
    }
    return <div className="py-10 pl-5 relative flex flex-col gap-2 w-full h-full">
        <Image
            className="[aspect-ratio:auto_178_/_267] group-hover:opacity-[0.5] object-cover object-top rounded-[5px] mx-auto"
            alt="s"
            width={178}
            height={267}
            src={process.env.imageTmdb + data?.poster_path}
        />
        <TilleHome type="h1">
            {data?.title || data?.name}
        </TilleHome>
        <div className="max-h-[45%] overflow-auto">
            <p>
                {data.overview}
            </p>
        </div>
        <div className="absolute bottom-[-5%] h-[10%] w-[80%] flex justify-center items-center ">
            <ButtonUI className="flex justify-center items-center gap-2 ">
                <GiLoveMystery size={30} /> Me Gusta
            </ButtonUI>
        </div>
    </div>
}