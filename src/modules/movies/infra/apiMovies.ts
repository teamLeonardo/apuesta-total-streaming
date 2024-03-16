import { point } from "@/services/config.service";


export const apiMovies = () => {
    const cache = new Map<number, any>();

    async function getAll(): Promise<any> {
        if (cache.size > 0) {
            return Array.from(cache.values());
        }
        // const { pageParam: page = 1, ...resto } = payload
        const response = await point.get("/discover/movie")
        const movies = response.data.results as any[];
        movies.forEach((movie: any) => cache.set(movie.id, movie));

        return movies;
    }

    return {
        getAll
    }
}






