'use client'
import { CardMovieAndShow } from "@/components/molecules/card/cardMovie";
import { getAllMovies, getAllShows } from "@/services/config.service";
import { MoviesAndSeries } from "@/shared/types/moviesType";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";


let page = 2;

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
                const getAll = type === "tv" ? getAllShows : getAllMovies
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