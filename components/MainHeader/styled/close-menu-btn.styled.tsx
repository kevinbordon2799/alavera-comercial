import styled, { keyframes } from "styled-components";
import colors from "../../../consts/colors";
import filters from "../../../consts/filters";

const arrowAnim = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-10px);
    }
`;

export const Button = styled.button`
    display: flex;

    width: 50%;
    max-width: 150px;

    background: rgba(0, 0, 0, 0);
    border: none;
    outline: none;

    color: ${colors.fullWhite};

    cursor: pointer;

    &:hover > img {
        filter: ${filters.orange};
    }
`;

export const UpArrowImg = styled.img`
    width: 100%;

    animation-name: ${arrowAnim};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-play-state: running;
`;
