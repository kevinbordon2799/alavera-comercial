import styled from "styled-components";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const ListItem = styled.li`
    /* background: blue; */
`;

export const Button = styled.button`
    --btn-width: 208px;

    position: relative;

    height: 300px;
    width: var(--btn-width);
    min-width: var(--btn-width);
    max-width: var(--btn-width);
    border-radius: 20px;

    font-family: ${fonts.varelaRound};
    font-size: 18px;

    background: rgba(0, 0, 0, 0);
    color: ${colors.fullWhite};
    outline: none;
    border: none;

    cursor: pointer;
    overflow: hidden;

    &:hover > img,
    &:focus > img {
        transform: scale(1.2);
    }

    &:hover > .show-info-container,
    &:focus > .show-info-container {
        opacity: 1;
    }

    @media (max-width: 540px) {
        display: flex;

        width: 100%;
        min-width: none;
        max-width: none;
        height: 200px;

        border-radius: 10px;

        background: ${colors.gray};

        transition-property: background;
        transition-duration: 0.5s;

        &:hover,
        &:focus {
            background: ${colors.fullWhite};
        }

        &:hover > img,
        &:focus > img {
            transform: none;
        }
    }
`;

export const Img = styled.img`
    width: 100%;

    object-fit: cover;

    transition-property: transform;
    transition-duration: 0.5s;

    @media (max-width: 540px) {
        width: 40%;
        /* min-width: 130px; */

        height: 100%;
    }
`;

export const MovieNameContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;

    display: flex;
    flex-direction: column;

    width: 100%;

    background: rgba(0, 0, 0, 0.6);

    transform: translateY(-96%);

    @media (max-width: 540px) {
        position: static;

        padding: 10px 5px;

        background: rgba(0, 0, 0, 0);

        transform: none;

        .movie-card-btn:hover > &,
        .movie-card-btn:focus > & {
            color: ${colors.darkGray};
        }
    }
`;

export const MovieName = styled.p`
    padding: 0.6em 0.8em;

    text-align: left;
`;

export const ShowInfoIconContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    font-size: 60px;

    opacity: 0;
    background: rgba(0, 0, 0, 0.6);

    transition-property: top, opacity;
    transition-duration: 0.5s;

    @media (max-width: 540px) {
        top: 100%;
        left: 100%;
        width: 100px;
        height: auto;

        background: rgba(0, 0, 0, 0);
        opacity: 1;

        color: ${colors.orange};
        /* background: red; */

        transform: translateX(-110%) translateY(-150%);

        & > svg {
            display: none;
        }

        & > p {
            padding: 0;
        }
    }
`;

export const InfoIconText = styled.p`
    padding-top: 1em;
    font-size: 24px;

    @media (max-width: 540px) {
        .movie-card-btn:hover &,
        .movie-card-btn:focus & {
            color: ${colors.darkGray};
        }
    }
`;
