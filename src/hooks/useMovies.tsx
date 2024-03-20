import { getAllMovies } from '@/modules/movies/application/get/getAllMovie';
import { getByIdMovie } from '@/modules/movies/application/get/getById';
import { TypeMovie } from '@/modules/movies/domain/movieType';

import { apiMovies as createApiMovies } from "@/modules/movies/infra/apiMovies";

import { useState } from 'react';


const apiMovies = createApiMovies();


export function useMoviesData() {
    const [data, setData] = useState<TypeMovie | TypeMovie[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    async function send(params: any) {
        setLoading(true)
        try {
            const fecths: any = params.id ? getByIdMovie(apiMovies) : getAllMovies(apiMovies);
            const dataGet: TypeMovie = await fecths(params);
            if (Array.isArray(dataGet) && Array.isArray(data)) {
                setData([...data, ...dataGet]);
            } else {
                setData(dataGet)
            }
            setLoading(false);
            return dataGet

        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    }

    return { data, loading, error, send };
}

