import {
    Section,
    ImageContainer,
    TextContainer,
    Img,
    Image1,
    Image2,
    Title,
    Text,
} from "./styled/about-us-section.styled";

export default function AboutUsSection() {
    return (
        <Section>
            <ImageContainer className="img-container">
                <Img src="/img/about-us-main.png" />
                {/* <Image1 src="/img/alavera-photo-2.jpg" /> */}
                {/* <Image2 src="/img/alavera-photo-1.jpg" /> */}
            </ImageContainer>

            <TextContainer className="text-container">
                <Title>
                    Sobre <span className="orange">nosotros</span>
                </Title>
                <Text className="text">
                    El Centro Comercial ALAVERA, se encuentra ubicado sobre la
                    ruta 11, en la entrada de la ciudad de Vera, Provincia de
                    Santa Fe. Su innovadora arquitectura, sumada a la
                    estratégica ubicación, hace que sea el referente para las
                    salidas de compra y entretenimiento de los habitantes del
                    lugar y de los visitantes que llegan de la región.
                </Text>
            </TextContainer>
        </Section>
    );
}
