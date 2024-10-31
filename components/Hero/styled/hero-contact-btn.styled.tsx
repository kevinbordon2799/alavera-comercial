import styled from "styled-components";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const HeroContactAnchor = styled.a`
    position: relative;
    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100px;
    margin-bottom: 60px;

    &:hover > p,
    &:focus > p {
        color: ${colors.orange};
        text-shadow: 0 0 20px ${colors.orange};
    }

    &:hover > div > span,
    &:focus > div > span {
        box-shadow: 0 0 20px #ff9900;
    }

    &:hover > div > span:first-of-type,
    &:focus > div > span:first-of-type {
        transform: rotate(20deg) translateY(20px);
    }

    &:hover > div > span:last-of-type,
    &:focus > div > span:last-of-type {
        transform: rotate(-20deg) translateY(20px);
    }
`;

export const HeroContactText = styled.p`
    margin-bottom: 0.3em;

    font-family: ${fonts.orbitron};
    font-size: 30px;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: ${colors.fullWhite};

    @media (max-width: 750px) {
        font-size: 24px;
    }
    @media (max-width: 400px) {
        font-size: 18px;
    }
`;

export const HeroContactArrowContainer = styled.div`
    display: flex;
    justify-content: center;

    width: 125%;
`;

export const HeroContactArrow = styled.span`
    width: 60%;
    min-width: 60%;
    height: 10px;
    background: ${colors.orange};

    transition: all 1s;

    &:first-of-type {
        margin-right: -12px;
    }

    &:last-of-type {
        margin-left: -12px;
    }
`;
