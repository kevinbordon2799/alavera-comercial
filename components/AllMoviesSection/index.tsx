import { useMoviesCtx } from "../../contexts/MoviesContext";
import { Movie } from "../../fake-api/movies/types";
import MovieCard from "./MovieCard";
import {
    Section,
    InnerContainer,
    Title,
    CardsContainer,
} from "./styled/all-movies-section.styled";

const generateMoviesCards = function (
    moviesData: Movie[] | null
): JSX.Element[] | undefined {
    return moviesData?.map(function (movie, i) {
        return <MovieCard key={i} movieData={movie} movieIndex={i} />;
    });
};

export default function AllMoviesSection() {
    const moviesCtx = useMoviesCtx();

    return (
        <Section>
            <InnerContainer>
                <Title>
                    Todos los <span className="orange">estrenos</span>
                </Title>

                <CardsContainer>
                    {generateMoviesCards(moviesCtx.moviesData)}
                </CardsContainer>
            </InnerContainer>
        </Section>
    );
}
