import { TypeApiMovie } from '../../domain/apiMovieType';
import { TypeMovie } from '../../domain/movieType';

export function getByIdMovie(apiMovie: TypeApiMovie) {
	return async (id: string): Promise<TypeMovie> => {
		return await apiMovie.getById(id);
	};
}
