import { CardMovieAndShow } from "@/components/molecules/card/cardMovie";
import { MoviesAndShowList } from "@/components/organisms/listCard/moviesAndShowList";
import { getAllShows } from "@/services/config.service";
import { MoviesAndSeries } from "@/shared/types/moviesType";

export default async function shoew() {
    const movies = await getAllShows({ pageParam: 1, ...{} });

    return (
        <div className='w-full h-full pb-32'>

            <div className="w flex flex-col gap-7">
                <h1 className="text-4xl text-white font-bold ">
                    Series
                </h1>
                <span className="text-[#8DA0BC] text-md">
                    Aquí estan todas las <strong> Series disponibles </strong> en el <strong>sitio.</strong>
                </span>
            </div>
            <div className="grid grid-cols-2 laptop:grid-cols-4 mt-10 gap-2 laptop:gap-10 relative">
                {
                    movies && movies?.map((movie: MoviesAndSeries) => {
                        return <CardMovieAndShow key={movie.id} type="tv" movie={movie} />
                    })
                }
            </div>
            <MoviesAndShowList type="tv"  />
        </div>

    );
}
