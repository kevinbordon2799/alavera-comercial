import React from "react";
import { Movie } from "../../fake-api/movies/types";
import { MoviesCtxValue } from "./types";

const defaultValue: MoviesCtxValue = {
    moviesData: null,
    activeIndex: 0,
    setActiveIndex() {},
};

const MoviesCtx = React.createContext(defaultValue);

export function MoviesCtxProvider(props: {
    children: React.ReactNode;
    moviesData: Movie[] | null;
}) {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const changeActiveIndex = function (index: number) {
        setActiveIndex(index);
    };

    return (
        <MoviesCtx.Provider
            value={{
                moviesData: props.moviesData,
                activeIndex,
                setActiveIndex: changeActiveIndex,
            }}
            children={props.children}
        />
    );
}

export function useMoviesCtx() {
    return React.useContext(MoviesCtx);
}
