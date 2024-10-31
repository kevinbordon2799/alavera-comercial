import { GetServerSideProps } from "next";
import { CinePageProps } from "./types";
import CineHero from "../../components/CineHero";
import Layout from "../../components/Layout";
import MainHeader from "../../components/MainHeader";
import PageFooter from "../../components/PageFooter";
import { getMovies } from "../../fake-api/movies";
import { MoviesCtxProvider } from "../../contexts/MoviesContext";
import AllMoviesSection from "../../components/AllMoviesSection";

export default function cine(props: CinePageProps) {
    // useBackground();

    return (
        <Layout
            title="Alavera Centro Comercial"
            desc="El Centro Comercial ALAVERA, se encuentra ubicado sobre la ruta 11, en la entrada de la ciudad de Vera, Provincia de Santa Fe. Su innovadora arquitectura, sumada a la estratégica ubicación, hace que sea el referente para las salidas de compra y entretenimiento de los habitantes del lugar y de los visitantes que llegan de la región."
        >
            <MoviesCtxProvider moviesData={props.moviesData}>
                <MainHeader />
                <CineHero />
                <AllMoviesSection />
                <PageFooter />
            </MoviesCtxProvider>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps<
    CinePageProps
> = async () => {
    const movies = getMovies();

    return {
        props: {
            moviesData: movies,
        },
    };
};
