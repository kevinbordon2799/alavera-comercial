import {
    HeroContactAnchor,
    HeroContactArrowContainer,
    HeroContactArrow,
    HeroContactText,
} from "../styled/hero-contact-btn.styled";

export default function HeroContactBtn() {
    return (
        <HeroContactAnchor href="#cine">
            <HeroContactText>Ver más</HeroContactText>

            <HeroContactArrowContainer>
                <HeroContactArrow />
                <HeroContactArrow />
            </HeroContactArrowContainer>
        </HeroContactAnchor>
    );
}
