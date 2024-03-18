import { CardMovieAndShow } from "@/components/molecules/card/cardMovie";
import { MoviesAndShowList } from "@/components/organisms/listCard/moviesAndShowList";
import { getAllMovies } from "@/modules/movies/application/get/getAllMovie";
import { apiMovies as createApiMovies } from "@/modules/movies/infra/apiMovies";
import { MoviesAndSeries } from "@/shared/types/moviesType";

const apiMovies = createApiMovies();

export default async function movie() {
    const movies = (await getAllMovies(apiMovies)({ pageParam: 1, ...{} }));
    return (
        <div className='w-full h-full pb-32'>

            <div className=" flex flex-col gap-7">
                <h1 className="text-4xl text-white font-bold ">
                    Peliculas
                </h1>
                <span className="text-[#8DA0BC] text-md">
                    Aquí estan todas las <strong> peliculas disponibles </strong> en el <strong>sitio.</strong>
                </span>
            </div>
            <div className="grid grid-cols-2 laptop:grid-cols-4 mt-10 gap-2 laptop:gap-10 relative">
                {
                    movies && movies?.map((movie: MoviesAndSeries) => {
                        return <CardMovieAndShow type="movie" key={movie.id} movie={movie} />
                    })
                }
            </div>
            <MoviesAndShowList type="movie" />
        </div>

    );
}
