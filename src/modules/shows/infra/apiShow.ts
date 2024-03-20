import { point } from "@/services/config.service";
import { TypeShow } from "../domain/showType";
import { TypeApiShow } from "../domain/apiShowType";


export const apiShows = (): TypeApiShow => {
    const cache = new Map<number, any>();


    async function getAll(payload: any): Promise<TypeShow[]> {
        // if (cache.size > 0) {
        //     return Array.from(cache.values());
        // }
        const { pageParam: page = 1, ...resto } = payload
        const response = await point.get("/discover/tv", { params: { page, ...resto } || {} })
        const shows = response.data.results as TypeShow[];
        shows.forEach((movie: any) => cache.set(movie.id, movie));

        return shows;
    }

        
    async function getById(id: string): Promise<TypeShow> {
        return (await point.get(`/tv/${id}`)).data
    }


    return {
        getAll,
        getById
    }
}






