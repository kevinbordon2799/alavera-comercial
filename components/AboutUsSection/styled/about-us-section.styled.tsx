import styled from "styled-components";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const Section = styled.section`
    display: flex;

    width: 96%;
    max-width: 1200px;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;

    /* background: red; */

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ImageContainer = styled.div`
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 40%;

    /* background: yellow; */

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 3;

        width: 65%;
        height: 50%;

        border: 6px solid #ff9900;
        transform: translateX(-50%) translateY(-50%);
    }

    @media (max-width: 800px) {
        width: 70%;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    width: 60%;
    padding-left: 40px;

    /* background: green; */

    @media (max-width: 1048px) {
        & h2 {
            font-size: 40px;
        }

        & .text {
            font-size: 22px;
        }
    }

    @media (max-width: 800px) {
        width: 100%;
        margin-top: 80px;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media (max-width: 420px) {
        margin-top: 40px;

        & h2 {
            font-size: 30px;
        }

        & .text {
            font-size: 18px;
        }
    }
`;

export const Img = styled.img`
    position: relative;
    z-index: 5;
    width: 100%;

    object-fit: contain;
`;

export const Image1 = styled.img`
    position: absolute;

    top: 0;
    left: 0;
    width: 70%;
`;

export const Image2 = styled.img`
    position: absolute;

    right: 0;
    bottom: 0;
    width: 80%;
`;

export const Title = styled.h2`
    position: relative;

    padding-bottom: 1em;

    font-family: ${fonts.orbitron};
    font-size: 50px;
    font-weight: 700;
    text-align: left;

    color: ${colors.fullWhite};
    /* background: dimgray; */

    & .orange {
        color: ${colors.orange};
    }

    &::before {
        content: "";

        position: absolute;
        top: 60%;
        left: 0;

        width: 14%;
        height: 8px;

        background: ${colors.orange};
    }
`;

export const Text = styled.p`
    font-family: ${fonts.varelaRound};
    font-size: 26px;
    line-height: 1.5em;

    color: ${colors.fullWhite};
`;
