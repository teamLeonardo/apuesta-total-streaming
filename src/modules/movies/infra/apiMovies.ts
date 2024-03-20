import { point } from "@/services/config.service";
import { TypeMovie } from "../domain/movieType";
import { TypeApiMovie } from "../domain/apiMovieType";


export const apiMovies = (): TypeApiMovie => {
    const cache = new Map<number, any>();


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

    async function getById(id: string): Promise<TypeMovie> {
        return (await point.get(`/movie/${id}`)).data
    }

    return {
        getAll,
        getById
    }
}






