import { Movie } from "../../fake-api/movies/types";

export type MoviesCtxValue = {
    moviesData: Movie[] | null;
    activeIndex: number
    setActiveIndex: (index: number) => void
};