import styled from "styled-components";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const Button = styled.button`
    display: none;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0);
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

    @media (max-width: 800px) {
        display: flex;
    }
`;

export const Text = styled.p`
    font-family: ${fonts.orbitron};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
`;
