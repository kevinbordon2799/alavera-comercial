import {
    Section,
    ImageContainer,
    TextContentContainer,
    Img,
    Title,
    DiscoverBtn,
} from "../styled/home-cine-section.styled";

export default function HomeCineSection() {
    return (
        <Section id="cine">
            <TextContentContainer>
                <Title>
                    <span>
                        Disfrutá de las <span className="orange">mejores</span>{" "}
                        películas en el
                    </span>
                    <strong>
                        CINE <span className="orange">ALAVERA</span>
                    </strong>
                </Title>

                <DiscoverBtn href="/cine">
                    <p>Ver estrenos</p>
                </DiscoverBtn>
            </TextContentContainer>

            <ImageContainer className="end">
                <Img src="/img/cine-home.png" />
            </ImageContainer>
        </Section>
    );
}
