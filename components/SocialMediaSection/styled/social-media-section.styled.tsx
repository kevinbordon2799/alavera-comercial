import styled from "styled-components";
import { Container1200Center } from "../../../styled/Container1200Center";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const Section = styled.section`
    position: relative;
    z-index: 20;

    background: ${colors.darkGray};
`;

export const SectionContainer = styled(Container1200Center)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    height: 400px;

    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;

    font-family: ${fonts.orbitron};
    color: ${colors.fullWhite};

    @media (max-width: 800px) {
        height: auto;
    }
`;

export const SocialMediaListDiv = styled.div`
    display: flex;
    flex-direction: column;

    width: 44%;
    padding-left: 40px;

    @media (max-width: 800px) {
        width: 100%;
        padding: 60px 0;
    }
`;

export const SocialMediaTitle = styled.h3`
    padding-bottom: 1em;

    font-size: 30px;
    font-weight: 700;

    text-align: center;
`;

export const SocialMediaList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    flex-grow: 2;

    list-style: none;
`;

export const LocationMapDiv = styled.div`
    position: relative;

    width: 56%;
    /* border-radius: 20px; */
    /* padding: 20px; */

    overflow: hidden;

    @media (max-width: 800px) {
        width: 100%;
        height: 50vh;
        max-height: 350px;
    }
`;

export const SocialMediaListItem = styled.li`
    flex-grow: 2;
`;

export const SocialMediaListLink = styled.a`
    --font-size: 30px;

    position: relative;

    display: flex;
    align-items: center;

    height: 100%;
    padding: 1em;
    /* border-radius: 20px; */

    font-size: var(--font-size);

    cursor: pointer;
    overflow: hidden;

    transition-property: background, color;
    transition-duration: 0.5s;

    @media (max-width: 900px) {
        --font-size: 24px;
    }

    @media (max-width: 450px) {
        --font-size: 22px;
    }
`;

export const FacebookLink = styled(SocialMediaListLink)`
    background: ${colors.facebook};

    &:hover,
    &:focus {
        background: ${colors.fullWhite};
        color: ${colors.facebook};
    }
`;

export const InstagramLink = styled(SocialMediaListLink)`
    background: ${colors.instagram};

    &:hover,
    &:focus {
        background: ${colors.fullWhite};
        color: ${colors.instagram};
    }
`;

export const SocialMediaIconContainer = styled.div`
    display: flex;
    align-items: center;

    margin-right: 0.2em;

    font-size: calc(var(--font-size) * 2.2);
`;

export const SocialMediaText = styled.p``;
