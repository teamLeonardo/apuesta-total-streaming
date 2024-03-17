'use client'
import { CardMovie } from "@/components/molecules/card/cardMovie";
import { getAllMovies } from "@/services/config.service";
import { MoviesAndSeries } from "@/shared/types/moviesType";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";


let page = 2;

export function MoviesList() {

    const { ref, inView } = useInView();

    const [movies, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (inView) {
            setIsLoading(true);
            // Add a delay of 500 milliseconds
            const delay = 500;

            const timeoutId = setTimeout(() => {
                getAllMovies({ pageParam: page, ...{} })
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
        <div className="w-full grid grid-cols-4 m-auto mt-10 gap-10 relative">
            {
                movies && movies?.map((movie: MoviesAndSeries) => {
                    return <CardMovie key={movie.id} movie={movie} />
                })
            }
        </div>
        <div className="w-full h-[20vh] m-auto flex justify-center items-center" ref={ref}>
            {inView && isLoading && (
                <div>
                    ... loading
                </div>
            )}
        </div>
    </>
}