import styled from "styled-components";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const HeroSection = styled.section`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100vh;
    /* min-height: 550px; */
    /* max-height: 720px; */
    margin-left: auto;
    margin-right: auto;

    /* @media (max-width: 450px) {
        max-height: 550px;
    } */
`;

export const HeroVideo = styled.video`
    position: absolute;

    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export const HeroFilter = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(54, 15, 1, 0.53);
    background-color: rgba(0, 0, 0, 0.58);
`;

export const HeroTitle = styled.h1`
    position: relative;
    z-index: 100;

    width: 96%;
    max-width: 1000px;
    margin-top: 3.6em;

    font-family: ${fonts.orbitron};
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 1.1em;
    text-align: center;
    text-transform: uppercase;

    color: ${colors.fullWhite};

    transform: scaleY(1.3);

    & .hashtag {
        color: ${colors.orange};
    }

    @media (max-width: 890px) {
        font-size: 50px;
    }
    @media (max-width: 740px) {
        font-size: 60px;
        animation-name: none;

        & .hashtag {
            display: none;
        }

        & .title-orange {
            color: ${colors.orange};
        }
    }
    @media (max-width: 540px) {
        font-size: 50px;
    }
    @media (max-width: 450px) {
        font-size: 40px;
    }
`;
