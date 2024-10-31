import styled from "styled-components";
import { Container1200Center } from "../../../styled/Container1200Center";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const Section = styled.section`
    --movies-section-padding: 100px;

    padding-top: var(--movies-section-padding);
    padding-bottom: var(--movies-section-padding);
`;

export const InnerContainer = styled(Container1200Center)``;

export const Title = styled.h2`
    padding-bottom: var(--movies-section-padding);

    font-family: ${fonts.orbitron};
    font-weight: 700;
    font-size: 40px;
    text-align: center;

    color: ${colors.fullWhite};

    & .orange {
        color: ${colors.orange};
    }
`;

export const CardsContainer = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;

    list-style: none;

    @media (max-width: 540px) {
        flex-direction: column;
        flex-wrap: no-wrap;
        gap: 40px;

        width: 100%;

        /* background: yellow; */
    }
`;
