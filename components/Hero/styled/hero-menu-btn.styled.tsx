import styled from "styled-components";
import fonts from "../../../consts/fonts";

export const HeroMenuButton = styled.button`
    position: relative;
    z-index: 100;

    display: none;
    align-items: center;

    margin-top: -100px;

    background: rgba(0, 0, 0, 0);
    color: #fff;
    border: none;
    outline: none;

    cursor: pointer;

    &:hover > svg,
    &:focus > svg,
    &:hover > p,
    &:focus > p {
        color: #ff9900;
        text-shadow: 0 0 20px #ff9900;
    }

    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
    }
`;

export const HeroMenuText = styled.p`
    font-family: ${fonts.orbitron};
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;

    transition: all 1s;
`;
