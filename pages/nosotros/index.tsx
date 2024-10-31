import React from "react";

import AboutUsBottomBanner from "../../components/AboutUsBottomBanner";
import AboutUsSection from "../../components/AboutUsSection";
import Layout from "../../components/Layout";
import MainHeader from "../../components/MainHeader";
import MissionSection from "../../components/MissionSection";
import PageFooter from "../../components/PageFooter";
import ValuesSection from "../../components/ValuesSection";
import VisionSection from "../../components/VisionSection";
import { useBackground } from "../../global-hooks/useBackground";

export default function Nosotros() {
    // useBackground();

    return (
        <Layout
            title="Alavera Centro Comercial"
            desc="El Centro Comercial ALAVERA, se encuentra ubicado sobre la ruta 11, en la entrada de la ciudad de Vera, Provincia de Santa Fe. Su innovadora arquitectura, sumada a la estratégica ubicación, hace que sea el referente para las salidas de compra y entretenimiento de los habitantes del lugar y de los visitantes que llegan de la región."
        >
            <MainHeader />
            <AboutUsSection />
            <MissionSection />
            <VisionSection />
            <ValuesSection />
            <AboutUsBottomBanner />
            <PageFooter />
        </Layout>
    );
}
