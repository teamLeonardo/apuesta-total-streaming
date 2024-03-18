import { TypeShow } from "./showType";

export interface TypeApiShow {
    getAll: (payload: any) => Promise<TypeShow[]>;
}
