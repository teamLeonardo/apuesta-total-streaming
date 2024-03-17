import { Block } from "@/components/atom/block/block"
import { LinkButton } from "@/components/atom/button/link"
import { TilleHome } from "@/components/atom/title/titleHome"
import SliderMedia from "@/components/molecules/slider/sliderMedia"
import { fetchData } from "@/shared/utils/fetchData"

export default async function TopListHome({
    path,
    title,
    page,
}: {
    path: string
    title: string
    page?: string
}) {
    const type = path.includes('movie') ? 'movie' : 'tv'
    const toPlus = path.includes('movie') ? "peliculas" : "series"
    const query = page ? `language=es-ES&page=${page}` : ''
    const { results: data } = await fetchData(path, query)

    return <Block className="relative 
    w-full
    h-auto p-5 bg-transparent border-[1px] border-[var(--secondary-color-transparent)]
    rounded-[30px] 
    overflow-hidden"
    >
        <div className="absolute w-full h-full blur-xl backdrop-blur-xl bg-[rgba(var(--secondary-color),.05)] top-0 left-0" />

        <div className="relative w-full mb-[20px] flex justify-between ">
            <TilleHome type={"h1"}>
                {title}
            </TilleHome>
            <LinkButton to={"/" + toPlus}>
                ver mas
            </LinkButton>
        </div>
        <SliderMedia data={data} type={type} />
    </Block>

} 