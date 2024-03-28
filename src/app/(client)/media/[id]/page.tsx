import { genPageMetadata } from "@/app/seo"
import { Block } from "@/components/atom/block/block"
import { TilleHome } from "@/components/atom/title/titleHome"
import { FrameMedia } from "@/components/organisms/frame/frameMedia"
import { getById } from "@/services/config.service"
import { GiLoveMystery } from "react-icons/gi"


export const metadata = genPageMetadata({ title: 'Reproduccion' })


export default async function media({ params }: any) {
    const [id, type] = params.id.split('-')
    const data = await getById(id, type)

    return <div className="w-auto h-full relative pb-[100px]">
        <img className="absolute w-[130%] -z-10 blur-3xl" src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`} />
        <div className="w-full h-auto select-none relative overflow-hidden drop-shadow-md rounded-[30px] ">
            <FrameMedia data={data} />

        </div>
        <Block className="relative 
        w-full
         p-5 mt-[100px]  bg-transparent border-[1px] border-[var(--secondary-color-transparent)]
        rounded-[30px] 
        overflow-hidden "
        >
            <TilleHome type="h1">
                Personas a las que le gustaron :
            </TilleHome>
            <div className="mt-[40px] max-h-[10vw] flex gap-2 flex-col
        overflow-auto">
                <div className="flex gap-4">
                    <h1 className="font-bold w-auto">
                        Leonardo sifuentes mozo
                    </h1>
                    <div className="font-bold w-auto">
                        <GiLoveMystery size={30} />
                    </div>
                </div>
                <div className="flex gap-4">
                    <h1 className="font-bold w-auto">
                        Leonardo sifuentes mozo
                    </h1>
                    <div className="font-bold w-auto">
                        <GiLoveMystery size={30} />
                    </div>
                </div>
                <div className="flex gap-4">
                    <h1 className="font-bold w-auto">
                        Leonardo sifuentes mozo
                    </h1>
                    <div className="font-bold w-auto">
                        <GiLoveMystery size={30} />
                    </div>
                </div>
                <div className="flex gap-4">
                    <h1 className="font-bold w-auto">
                        Leonardo sifuentes mozo
                    </h1>
                    <div className="font-bold w-auto">
                        <GiLoveMystery size={30} />
                    </div>
                </div>
                <div className="flex gap-4">
                    <h1 className="font-bold w-auto">
                        Leonardo sifuentes mozo
                    </h1>
                    <div className="font-bold w-auto">
                        <GiLoveMystery size={30} />
                    </div>
                </div>
            </div>
        </Block>
    </div>
}   