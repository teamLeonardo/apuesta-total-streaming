import { TypeShow } from "./showType";

export interface TypeApiShow {
    getAll: (payload: any) => Promise<TypeShow[]>;
    getById: (id: string) => Promise<TypeShow>;
}
