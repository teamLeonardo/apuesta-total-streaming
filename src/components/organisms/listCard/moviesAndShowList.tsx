'use client'
import { CardMovieAndShow } from "@/components/molecules/card/cardMovie";
import { MoviesAndSeries } from "@/shared/types/moviesType";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { apiMovies as createApiMovies } from "@/modules/movies/infra/apiMovies";

import { apiShows as createApiShows } from "@/modules/shows/infra/apiShow";

import { getAllMovies } from "@/modules/movies/application/get/getAllMovie";
import { getAllShow } from "@/modules/shows/application/get/getAllShow";

let page = 2;

const apiMovies = createApiMovies();
const apiShows = createApiShows();

export function MoviesAndShowList({ type }: { type: string }) {

    const { ref, inView } = useInView();

    const [movies, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (inView) {
            setIsLoading(true);
            // Add a delay of 500 milliseconds
            const delay = 500;

            const timeoutId = setTimeout(() => {
                const moviesFetch = getAllMovies(apiMovies);
                const showFetch = getAllShow(apiShows);

                const getAll = type === "tv" ? showFetch : moviesFetch

                getAll({ pageParam: page, ...{} })
                    .then((res) => {
                        setData([...movies, ...res]);
                        page++;
                    });

                setIsLoading(false);
            }, delay);

            // Clear the timeout if the component is unmounted or inView becomes false
            return () => clearTimeout(timeoutId);
        }
    }, [inView, movies, isLoading]);
    return <>
        <div className="grid grid-cols-2 laptop:grid-cols-4 mt-10 gap-2 laptop:gap-10 relative">
            {
                movies && movies?.map((movie: MoviesAndSeries) => {
                    return <CardMovieAndShow type={type} key={movie.id} movie={movie} />
                })
            }
        </div>
        <div className="w-full h-[20vh] flex justify-center items-center" ref={ref}>
            {inView && isLoading && (
                <div>
                    ... loading
                </div>
            )}
        </div>
    </>
}