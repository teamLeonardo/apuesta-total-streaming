import { CardMovie } from "@/components/molecules/card/cardMovie";
import { MoviesList } from "@/components/organisms/listCard/moviesList";
import { getAllMovies } from "@/services/config.service";
import { MoviesAndSeries } from "@/shared/types/moviesType";

export default async function movie() {
    const movies = await getAllMovies({ pageParam: 1, ...{} });

    return (
        <div className='w-full h-full pb-32'>

            <div className="w m-auto flex flex-col gap-7">
                <h1 className="text-4xl text-white font-bold ">
                    Peliculas
                </h1>
                <span className="text-[#8DA0BC] text-md">
                    Aquí estan todas las <strong> peliculas disponibles </strong> en el <strong>sitio.</strong>
                </span>
            </div>
            <div className="grid grid-cols-4 m-auto mt-10 gap-10 relative">
                {
                    movies && movies?.map((movie: MoviesAndSeries) => {
                        return <CardMovie key={movie.id} movie={movie} />
                    })
                }
            </div>
            <MoviesList />
        </div>

    );
}
