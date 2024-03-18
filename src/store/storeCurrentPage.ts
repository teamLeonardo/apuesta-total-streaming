
import { MoviesAndSeries } from "@/shared/types/moviesType";
import { create } from "zustand";

interface IstorePage {
    infoCurrentPage: MoviesAndSeries | null;
    setInfoCurrentPage: (info: MoviesAndSeries | null) => void;

}

export const storeCurrentPage = create<IstorePage>((set) => ({
    infoCurrentPage: null,
    setInfoCurrentPage: (info) => set({ infoCurrentPage: info }),
}));
