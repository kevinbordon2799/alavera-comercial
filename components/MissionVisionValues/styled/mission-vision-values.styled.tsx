import styled from "styled-components";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const Section = styled.section`
    display: flex;
    align-items: center;

    width: 96%;
    max-width: 1200px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 40px;
    padding: 80px;

    background: ${colors.gray};

    &.last-section {
        margin-bottom: 80px;
    }

    & .desktop-first-cont {
        order: 10;
        margin-right: 40px;
    }

    & .desktop-second-cont {
        order: 20;
    }

    @media (max-width: 1048px) {
        padding: 80px 40px;
    }

    @media (max-width: 800px) {
        flex-direction: column;

        margin-top: 40px;

        &.last-section {
            margin-bottom: 40px;
        }

        & .desktop-first-cont,
        & .desktop-second-cont {
            order: 10;
        }
    }

    @media (max-width: 600px) {
        padding: 40px 20px;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    width: 300px;
    height: 300px;

    /* background: green; */

    @media (max-width: 900px) {
        width: 200px;
        height: 200px;
    }

    @media (max-width: 800px) {
        width: 250px;
        height: auto;
        margin: 0 !important;
        margin-bottom: 40px !important;
    }

    @media (max-width: 600px) {
        width: 200px;
    }
`;

export const Image = styled.img`
    width: 100%;

    object-fit: contain;
`;

export const TextContainer = styled.div`
    /* background: red; */
`;

export const Title = styled.h2`
    position: relative;

    padding-bottom: 1em;

    font-family: ${fonts.orbitron};
    font-size: 50px;
    font-weight: 700;
    text-align: left;
    color: ${colors.fullWhite};

    &::before {
        content: "";
        position: absolute;
        top: 60%;
        left: 0;
        width: 14%;
        height: 8px;
        background: ${colors.orange};
    }

    & .orange {
        color: ${colors.orange};
    }

    @media (max-width: 1048px) {
        font-size: 40px;
    }

    @media (max-width: 600px) {
        font-size: 30px;
    }

    @media (max-width: 400px) {
        font-size: 24px;
    }
`;

export const Text = styled.p`
    font-family: ${fonts.varelaRound};
    font-size: 26px;
    line-height: 1.5em;

    color: ${colors.fullWhite};

    @media (max-width: 1048px) {
        font-size: 22px;
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;
