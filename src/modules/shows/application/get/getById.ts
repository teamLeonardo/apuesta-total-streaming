import { TypeApiShow } from '../../domain/apiShowType';
import { TypeShow } from '../../domain/showType';

export function getByIdShow(apiMovie: TypeApiShow) {
	return async (id: string): Promise<TypeShow> => {
		return await apiMovie.getById(id);
	};
}
