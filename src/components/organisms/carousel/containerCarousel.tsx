import { fetchData } from "@/shared/utils/fetchData"
import { Carousel } from "./CarouselHome"

export const ContainerCarousel = async ({
    path,
    page,
}: {
    path: string
    page?: string
}) => {
    const query = page ? `language=es-ES&page=${page}` : ''
    const { results: data } = await fetchData(path, query)
    return <Carousel data={data} />
}