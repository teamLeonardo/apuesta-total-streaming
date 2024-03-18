import { Carousel } from "./CarouselHome"

import { apiMovies as createApiMovies } from "@/modules/movies/infra/apiMovies";
import { apiShows as createApiShows } from "@/modules/shows/infra/apiShow";
import { getAllMovies } from "@/modules/movies/application/get/getAllMovie"
import { getAllShow } from "@/modules/shows/application/get/getAllShow"

const apiMovies = createApiMovies();
const apiShows = createApiShows();

export const ContainerCarousel = async ({
    path,
    page,
}: {
    path: string
    page?: string
}) => {
    const type = path.includes('movie') ? 'movie' : 'tv'

    const moviesFetch = getAllMovies(apiMovies);
    const showFetch = getAllShow(apiShows);

    const getAll = type === "tv" ? showFetch : moviesFetch

    const data = await getAll({ pageParam: page })
    
    return <Carousel data={data} />
}