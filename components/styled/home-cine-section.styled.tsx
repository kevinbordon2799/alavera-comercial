import styled from "styled-components";
import fonts from "../../consts/fonts";
import colors from "../../consts/colors";

export const Section = styled.section`
    --h2-strong-font-size: 6vw;
    display: flex;

    align-items: center;

    width: 92%;
    max-width: 1300px;
    padding-top: calc(var(--h2-strong-font-size) * 1.5);
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1200px) {
        --h2-strong-font-size: 84px;
    }

    @media (max-width: 640px) {
        flex-direction: column;

        --h2-strong-font-size: 50px;
    }

    @media (max-width: 400px) {
        --h2-strong-font-size: 40px;
    }

    @media (max-width: 320px) {
        --h2-strong-font-size: 32px;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;

    width: 50%;

    &.end {
        justify-content: flex-end;
        padding-left: 40px;
    }

    &.start {
        justify-content: flex-start;
        padding-right: 40px;
    }

    @media (max-width: 640px) {
        order: 10;
        justify-content: center;

        width: 90%;

        &.end,
        &.start {
            padding-left: 0;
            padding-right: 0;
        }
    }
`;

export const TextContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 50%;

    @media (max-width: 640px) {
        order: 20;
        align-items: center;

        width: 100%;
        margin-top: calc(var(--h2-strong-font-size) * 1);
    }
`;

export const Img = styled.img`
    width: 100%;

    object-fit: contain;
`;

export const Title = styled.h2`
    display: flex;
    flex-direction: column;

    font-family: ${fonts.varelaRound};
    font-size: calc(var(--h2-strong-font-size) * 0.715);

    color: ${colors.fullWhite};

    & strong {
        padding: 0.5em 0;

        font-family: ${fonts.orbitron};
        font-size: var(--h2-strong-font-size);
        font-weight: 700;
    }

    & .orange {
        color: ${colors.orange};
    }

    @media (max-width: 640px) {
        text-align: center;

        & strong {
            padding: 1em 0;
        }
    }
`;

export const DiscoverBtn = styled.a`
    position: relative;

    padding: 0.5em 0.6em;

    font-family: ${fonts.orbitron};
    font-size: calc(var(--h2-strong-font-size) * 0.343);
    font-weight: 700;

    border: 4px solid ${colors.orange};
    color: ${colors.fullWhite};

    & > p {
        position: relative;
        z-index: 20;
    }

    &::before {
        content: "";

        position: absolute;
        top: -1%;
        left: 0;

        z-index: 10;

        width: 0%;
        height: 102%;

        background: ${colors.orange};

        transition-property: width;
        transition-duration: 0.5s;
    }

    &:hover::before,
    &:focus::before {
        width: 101%;
    }

    @media (max-width: 400px) {
        font-size: 14px;
    }
`;
