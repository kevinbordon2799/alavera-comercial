import {
    Section,
    ImageContainer,
    TextContentContainer,
    Img,
    Title,
    DiscoverBtn,
} from "../styled/home-cine-section.styled";

export default function Test() {
    return (
        <Section>
            <ImageContainer className="start">
                <Img src="/img/1954-home.png" />
            </ImageContainer>

            <TextContentContainer>
                <Title>
                    <span>
                        Viví una experiencia gastronómica{" "}
                        <span className="orange">única</span> en
                    </span>
                    <strong>
                        1954 <span className="orange">RESTO BAR</span>
                    </strong>
                </Title>
            </TextContentContainer>
        </Section>
    );
}
