import { point } from "@/services/config.service";
import { TypeMovie } from "../domain/movieType";


export const apiMovies = () => {
    const cache = new Map<number, any>();

    // const getAllMovies = async (payload: any) => {
    //     const { pageParam: page = 1, ...resto } = payload
    //     return (await point.get("/discover/movie", { params: { page, ...resto } || {} })).data.results
    // }

    async function getAll(payload: any): Promise<TypeMovie[]> {
        // if (cache.size > 0) {
        //     return Array.from(cache.values());
        // }
        const { pageParam: page = 1, ...resto } = payload
        const response = await point.get("/discover/movie", { params: { page, ...resto } || {} })
        const movies = response.data.results as TypeMovie[];
        movies.forEach((movie: any) => cache.set(movie.id, movie));

        return movies;
    }

    return {
        getAll
    }
}






