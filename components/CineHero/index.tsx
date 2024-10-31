import React from "react";
import { FaPlay } from "react-icons/fa";
import { useMoviesCtx } from "../../contexts/MoviesContext";
import { Movie } from "../../fake-api/movies/types";
import {
    Section,
    InnerContainer,
    MovieImg,
    InfoContainer,
    MovieTitle,
    SynopsisContainer,
    SynopsisTitle,
    Synopsis,
    ShowMoreBtn,
    ButtonsContainer,
    OrangeBtn,
    BlackBtn,
    TrailerBtnContainer,
    ShowTrailerBtn,
    ShowTrailerText,
} from "./styled/cine-hero.styled";

export default function CineHero() {
    const moviesCtx = useMoviesCtx();
    const movie =
        (moviesCtx.moviesData && moviesCtx.moviesData[moviesCtx.activeIndex]) ||
        null;

    return (
        <Section>
            <MovieImg
                className="movie-hero-img show"
                src={movie?.heroImgSrc}
                alt={`Hero Image - ${movie?.title}`}
            />

            <InnerContainer>
                <InfoContainer>
                    <MovieTitle>{movie?.title}</MovieTitle>

                    <SynopsisContainer>
                        <SynopsisTitle>Sinópsis</SynopsisTitle>
                        <Synopsis>{movie?.synopsis}</Synopsis>
                        <ShowMoreBtn>Ver más</ShowMoreBtn>
                    </SynopsisContainer>

                    <ButtonsContainer>
                        <OrangeBtn>Detalles</OrangeBtn>
                        <BlackBtn>Funciones</BlackBtn>
                    </ButtonsContainer>
                </InfoContainer>

                <TrailerBtnContainer>
                    <ShowTrailerBtn href={movie?.trailerUrl} target={"_blank"}>
                        <FaPlay />
                        <ShowTrailerText>Ver trailer</ShowTrailerText>
                    </ShowTrailerBtn>
                </TrailerBtnContainer>
            </InnerContainer>
        </Section>
    );
}
