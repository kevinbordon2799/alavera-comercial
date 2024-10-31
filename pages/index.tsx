import Head from "next/head";
import Image from "next/image";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import MainHeader from "../components/MainHeader";
import SocialMediaSection from "../components/SocialMediaSection";
import PageFooter from "../components/PageFooter";
import styles from "../styles/Home.module.css";
import HomeCineSection from "../components/HomeCineSection";
import RestoBarHomeSection from "../components/RestoBarHomeSection";
import AllLocalsHome from "../components/AllLocalsHome";
import { useBackground } from "../global-hooks/useBackground";

export default function Home() {
    // useBackground();

    return (
        <Layout
            title="Alavera Centro Comercial"
            desc="El Centro Comercial ALAVERA, se encuentra ubicado sobre la ruta 11, en la entrada de la ciudad de Vera, Provincia de Santa Fe. Su innovadora arquitectura, sumada a la estratégica ubicación, hace que sea el referente para las salidas de compra y entretenimiento de los habitantes del lugar y de los visitantes que llegan de la región."
        >
            <MainHeader />
            <Hero />
            <HomeCineSection />
            <RestoBarHomeSection />
            <AllLocalsHome />
            <ContactSection />
            <SocialMediaSection />
            <PageFooter />
        </Layout>
    );
}
