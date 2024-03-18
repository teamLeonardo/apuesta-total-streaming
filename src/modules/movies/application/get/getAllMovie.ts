import { TypeApiMovie } from '../../domain/apiMovieType';
import { TypeMovie } from '../../domain/movieType';

export function getAllMovies(apiMovie: TypeApiMovie) {
	return async (payload: any): Promise<TypeMovie[]> => {
		return await apiMovie.getAll(payload);
	};
}
