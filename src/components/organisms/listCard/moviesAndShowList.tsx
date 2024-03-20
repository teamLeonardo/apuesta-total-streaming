'use client'
import { CardMovieAndShow } from "@/components/molecules/card/cardMovie";
import { MoviesAndSeries } from "@/shared/types/moviesType";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { useMoviesData } from "@/hooks/useMovies";
import { useShowsData } from "@/hooks/useShows";
import { TypeMovie } from "@/modules/movies/domain/movieType";
import { TypeShow } from "@/modules/shows/domain/showType";

let page = 2;


export function MoviesAndShowList({ type }: { type: "tv" | "movie" }) {

    const { ref, inView } = useInView();

    const [isLoading, setIsLoading] = useState(true);

    const { data: dataMovies, send: sendMovies } = useMoviesData();
    const { data: dataShow, send: sendShows } = useShowsData();

    const data = {
        tv: dataShow as TypeShow[],
        movie: dataMovies as TypeMovie[]
    }

    useEffect(() => {
        if (inView) {
            setIsLoading(true);

            const delay = 500;

            const timeoutId = setTimeout(() => {

                const getAll = type === "tv" ? sendShows : sendMovies

                getAll({ pageParam: page})
                    .then(() => {
                        page++;
                    });

                setIsLoading(false);
            }, delay);

            return () => clearTimeout(timeoutId);
        }
    }, [inView, isLoading]);

    return <>
        <div className="grid grid-cols-2 laptop:grid-cols-4 mt-10 gap-2 laptop:gap-10 relative">
            {
                data[type] && data[type]?.map((movie: MoviesAndSeries) => {
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