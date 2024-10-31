import styled from "styled-components";
import { Container1200Center } from "../../../styled/Container1200Center";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const Section = styled.section`
    --font-size: 16px;
    /* margin-top: 80px; */
    padding-top: 80px;

    font-size: var(--font-size);

    background: ${colors.darkGray};
`;

export const SectionContainer = styled(Container1200Center)`
    padding-bottom: 80px;
`;

export const SectionContentContainer = styled.div`
    display: flex;

    width: 100%;

    @media (max-width: 800px) {
        flex-direction: column;

        & > ul,
        & > form {
            width: 100%;
        }

        & > form {
            margin-top: 80px;
            padding: 0;
        }
    }
`;

export const Title = styled.h2`
    position: relative;

    padding-bottom: 2em;

    font-family: ${fonts.orbitron};
    font-size: 50px;
    text-align: center;

    color: ${colors.fullWhite};

    &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 48%;

        width: 2em;
        height: 8px;

        background: ${colors.orange};

        transform: translateX(-50%);
    }

    & .orange {
        color: ${colors.orange};
    }
`;

export const DataList = styled.ul`
    position: relative;
    z-index: 20;

    display: flex;
    flex-direction: column;
    width: 46%;

    list-style: none;
`;

export const Form = styled.form`
    position: relative;
    z-index: 20;

    display: flex;
    flex-direction: column;

    width: 54%;
    padding-left: 40px;

    font-family: ${fonts.orbitron};
    font-size: 14px;
    color: ${colors.fullWhite};

    & > div > input,
    & > div > textarea {
        order: 20;
        padding: 1em;
        /* border-radius: 6px; */

        font-family: Arial, sans-serif;

        background: ${colors.gray};
        color: ${colors.fullWhite};
        outline: none;
        border: 2px solid ${colors.gray};

        resize: none;

        transition-property: border;
        transition-duration: 0.5s;
    }

    & > div > label {
        transition-property: color;
        transition-duration: 0.5s;
    }

    & > div > input:hover,
    & > div > input:focus,
    & > div > textarea:hover,
    & > div > textarea:focus {
        border: 2px solid ${colors.orange};
    }

    & > div > input:hover + label,
    & > div > input:focus + label,
    & > div > textarea:hover + label,
    & > div > textarea:focus + label {
        color: ${colors.orange};
    }
`;

export const InputLabel = styled.label`
    order: 10;

    padding-top: 1.4em;
    padding-bottom: 0.8em;

    font-weight: 700;

    &.first {
        padding-top: 0;
        padding-bottom: 0.8em;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    &:nth-of-type(3) {
        flex-grow: 2;
    }

    & > textarea {
        height: 100%;
    }

    @media (max-width: 800px) {
        &:nth-of-type(3) {
            height: 250px;
        }
    }
`;

export const SubmitBtn = styled.input`
    margin-top: 1em;
    padding: 0.6em 1em;
    /* border-radius: 6px; */

    font-weight: 700;
    letter-spacing: 2px;

    color: ${colors.fullWhite};
    background: ${colors.orange};
    outline: none;
    border: 2px solid ${colors.orange};

    cursor: pointer;

    transition-property: background, color;
    transition-duration: 0.5s;

    &:hover,
    &:focus {
        color: ${colors.orange};
        background: rgba(0, 0, 0, 0);
    }
`;
