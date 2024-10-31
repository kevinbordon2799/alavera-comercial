import React from "react";
import { Movie } from "../../../fake-api/movies/types";

import {
    ListItem,
    Button,
    Img,
    MovieNameContainer,
    MovieName,
    ShowInfoIconContainer,
    InfoIconText,
} from "../styled/movie-card.styled";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { useMoviesCtx } from "../../../contexts/MoviesContext";

export default function MovieCard(props: {
    movieData: Movie;
    movieIndex: number;
}) {
    const moviesCtx = useMoviesCtx();
    const { movieData } = props;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = function (
        e
    ) {
        const $currentImg = window.document.querySelector(".movie-hero-img");

        $currentImg?.classList.remove("show");
        window.scrollTo(0, 0);

        setTimeout(function () {
            moviesCtx.setActiveIndex(props.movieIndex);

            setTimeout(function () {
                $currentImg?.classList.add("show");
            }, 2000);
        }, 1000);
    };

    return (
        <ListItem>
            <Button className="movie-card-btn" onClick={handleClick}>
                <Img
                    src={movieData.thumbnailSrc}
                    alt={`Miniatura de ${movieData.title}`}
                />

                <ShowInfoIconContainer className="show-info-container">
                    <BsFillArrowUpRightSquareFill />
                    <InfoIconText>Ver info</InfoIconText>
                </ShowInfoIconContainer>

                <MovieNameContainer>
                    <MovieName>{movieData.title}</MovieName>
                </MovieNameContainer>
            </Button>
        </ListItem>
    );
}
