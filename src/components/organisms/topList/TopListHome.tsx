import { Block } from "@/components/atom/block/block"
import { LinkButton } from "@/components/atom/button/link"
import { TilleHome } from "@/components/atom/title/titleHome"
import SliderMedia from "@/components/molecules/slider/sliderMedia"

import { apiMovies as createApiMovies } from "@/modules/movies/infra/apiMovies";
import { apiShows as createApiShows } from "@/modules/shows/infra/apiShow";
import { getAllMovies } from "@/modules/movies/application/get/getAllMovie"
import { getAllShow } from "@/modules/shows/application/get/getAllShow"

const apiMovies = createApiMovies();
const apiShows = createApiShows();

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

    const moviesFetch = getAllMovies(apiMovies);
    const showFetch = getAllShow(apiShows);

    const getAll = type === "tv" ? showFetch : moviesFetch

    const toPlus = path.includes('movie') ? "peliculas" : "series"

    const data = await getAll({ pageParam: page })

    return <Block className="relative 
    w-full
    h-auto p-5 bg-transparent border-[1px] border-[var(--secondary-color-transparent)]
    rounded-[30px] 
    overflow-hidden"
    >
        <div className="absolute w-full h-full blur-xl backdrop-blur-xl bg-[rgba(var(--secondary-color),.05)] top-0 left-0" />

        <div className="relative w-full mb-[20px] flex justify-between ">
            <TilleHome type={"h2"}>
                {title}
            </TilleHome>
            <LinkButton id={"linkTo" + toPlus} to={"/" + toPlus}>
                ver mas
            </LinkButton>
        </div>
        <SliderMedia data={data} type={type} />
    </Block>

} 