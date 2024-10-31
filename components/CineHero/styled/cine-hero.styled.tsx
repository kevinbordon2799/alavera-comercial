import styled from "styled-components";
import { Container1200Center } from "../../../styled/Container1200Center";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const Section = styled.section`
    position: relative;

    height: 100vh;
    min-height: 600px;
    width: 100%;

    overflow: hidden;

    &::after {
        content: "";

        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;

        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 840px) {
        min-height: 100vw;
        min-height: 840px;
    }
`;

export const MovieImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 100%;

    object-fit: cover;
    opacity: 0;
    transition-property: opacity;
    transition-duration: 1s;

    &.show {
        opacity: 1;
    }
`;

export const InnerContainer = styled(Container1200Center)`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 20;

    flex-direction: row;

    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 840px) {
        flex-direction: column;
        justify-content: space-between;

        height: 100%;
        max-height: calc(100% - 200px);
    }
`;

export const InfoContainer = styled.div`
    --title-font-size: 50px;
    --title-padding-bottom: 40px;

    max-width: 600px;

    font-family: ${fonts.orbitron};

    color: ${colors.fullWhite};

    @media (max-width: 840px) {
        width: 100%;
        max-width: none;
    }

    @media (max-width: 500px) {
        --title-font-size: 30px;
    }
`;

export const MovieTitle = styled.h1`
    margin: 0;
    padding-top: calc(var(--title-padding-bottom) * 1);
    padding-bottom: var(--title-padding-bottom);

    font-size: var(--title-font-size);
    font-weight: 700;
`;

export const SynopsisContainer = styled.div``;

export const SynopsisTitle = styled.p`
    padding-bottom: calc(var(--title-padding-bottom) * 0.3);

    font-size: 20px;
    font-weight: 700;

    color: ${colors.orange};
`;

export const Synopsis = styled.p`
    max-height: 120px;

    font-family: ${fonts.varelaRound};
    font-size: 16px;
    line-height: 1.5em;

    overflow: hidden;
`;

export const ShowMoreBtn = styled.button`
    padding-top: 0.3em;

    font-size: 16px;
    font-weight: 700;

    color: ${colors.orange};
    background: none;
    border: none;
    outline: none;

    cursor: pointer;
`;

export const ButtonsContainer = styled.div`
    padding-top: var(--title-padding-bottom);

    @media (max-width: 840px) {
        display: flex;
        justify-content: center;
    }
`;

export const Button = styled.button`
    padding: 0.8em 1em;

    font-size: 16px;
    font-weight: 700;

    outline: none;
    border: none;

    cursor: pointer;

    transition-property: background;
    transition-duration: 0.5s;
`;

export const OrangeBtn = styled(Button)`
    margin-right: 20px;

    color: ${colors.orange};
    background: ${colors.rgbaOrange(0.22)};

    &:hover,
    &:focus {
        background: ${colors.rgbaOrange(0.4)};
    }
`;

export const BlackBtn = styled(Button)`
    color: ${colors.fullWhite};
    background: ${colors.rgbaDarkGray(0.54)};

    &:hover,
    &:focus {
        background: ${colors.rgbaDarkGray(0.8)};
    }
`;

export const TrailerBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;

    @media (max-width: 840px) {
        width: 100%;
    }
`;

export const ShowTrailerBtn = styled.a`
    --trailer-icon-size: 60px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-left: 40%;
    margin-right: 0;

    font-size: var(--trailer-icon-size);

    background: none;
    color: ${colors.fullWhite};
    border: none;
    outline: none;

    cursor: pointer;
    transition-property: color;
    transition-duration: 0.5s;

    &:hover,
    &:focus {
        color: ${colors.orange};
    }

    @media (max-width: 840px) {
        margin: 0;
    }
`;

export const ShowTrailerText = styled.p`
    padding-top: 1em;

    font-size: calc(var(--trailer-icon-size) * 0.3);
`;
