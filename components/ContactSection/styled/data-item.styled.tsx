import styled from "styled-components";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const ListItem = styled.li`
    display: flex;
    /* justify-content: center; */
    align-items: center;

    width: 100%;
    height: 130px;
    padding: 1.2em 0.6em;
    margin-top: 10px;
    margin-bottom: 10px;
    /* border-radius: 10px; */

    text-align: center;

    background: ${colors.gray};

    &:first-of-type {
        margin-top: 0;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const DataTypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 40%;
    min-width: 40%;

    border-right: 4px solid ${colors.orange};
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;

    color: ${colors.orange};
`;

export const DataTitle = styled.p`
    padding-top: 1em;

    font-family: ${fonts.orbitron};
    font-size: 16px;
    font-weight: 700;

    color: ${colors.fullWhite};
`;

export const DataP = styled.p`
    color: #ddd;
`;

export const DataLink = styled.a`
    width: 60%;
    min-width: 60%;
    padding: 0 1em;
    color: #ddd;

    transition-property: color;
    transition-duration: 0.5s;

    &:hover,
    &:focus {
        color: ${colors.orange};
    }
`;

export const LocationDataContainer = styled.div`
    width: 60%;
    min-width: 60%;
    padding: 0 1em;
`;
