import { TypeApiShow } from '../../domain/apiShowType';
import { TypeShow } from '../../domain/showType';

export function getAllShow(apiMovie: TypeApiShow) {
	return async (payload: any): Promise<TypeShow[]> => {
		return await apiMovie.getAll(payload);
	};
}
