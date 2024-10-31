import styled from "styled-components";
import fonts from "../../../consts/fonts";

export const HeroLinkLi = styled.li`
    display: flex;

    width: 30%;
`;

export const HeroLinkAnchor = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 70px;

    font-family: ${fonts.orbitron};
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: #ffffff;
    background: rgba(54, 15, 1, 0.53);

    transition: all 1s;

    &:hover,
    &:focus {
        color: #ff9900;
        background: rgba(255, 67, 0, 0.36);
        box-shadow: 0 0 11px 0 rgba(255, 102, 0, 0.77);
    }

    @media (max-width: 750px) {
        height: 50px;

        font-size: 14px;
    }
`;
