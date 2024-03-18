import { TypeMovie } from "./movieType";

export interface TypeApiMovie {
    getAll: (payload: any) => Promise<TypeMovie[]>;
}
