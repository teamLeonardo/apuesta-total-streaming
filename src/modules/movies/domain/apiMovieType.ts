import { TypeMovie } from "./movieType";

export interface TypeApiMovie {
    getAll: (payload: any) => Promise<TypeMovie[]>;
    getById: (id: string) => Promise<TypeMovie>;
}
