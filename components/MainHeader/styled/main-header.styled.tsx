import styled from "styled-components";
import fonts from "../../../consts/fonts";
import colors from "../../../consts/colors";

export const Header = styled.header`
    position: fixed;
    top: 20px;
    left: 0;
    z-index: 1000;

    width: 100%;

    transition-property: top, background;
    transition-duration: 0.5s;

    &.scrolled {
        top: 0;
        background: rgba(0, 0, 0, 0.6);
    }
`;

export const MainHeaderCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 96%;
    max-width: 1400px;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
`;

export const MainHeaderLogoLink = styled.a``;

export const MainHeaderLogoImg = styled.img`
    height: 50px;
`;

export const MainHeaderNav = styled.nav`
    @media (max-width: 800px) {
        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;

        width: 100%;
        height: 0;

        background: ${colors.darkGray};

        overflow: hidden;

        transition-property: height;
        transition-duration: 0.5s;

        &.opened {
            height: 100vh;
            overflow-y: auto;
        }
    }
`;

export const CloseMenuBtnArea = styled.div`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        justify-content: center;

        width: 100%;
        padding: 30px 20px;
    }
`;

export const MainHeaderList = styled.ul`
    display: flex;
    list-style: none;

    @media (max-width: 800px) {
        flex-direction: column;
        flex-grow: 2;

        min-height: 400px;
        padding: 0 20px;
    }
`;

export const MenuLogoArea = styled.div`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        justify-content: center;

        width: 100%;
        padding: 30px 20px;
    }
`;

export const MenuLogo = styled.img`
    width: 70%;
    max-width: 300px;
`;

export const MainHeaderItem = styled.li`
    padding: 0;
    margin: 0;
`;

export const MainHeaderLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    padding: 0 0.8em;

    font-family: ${fonts.orbitron};
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;

    color: ${colors.fullWhite};

    transition-property: color;
    transition-duration: 0.5s;

    &:hover,
    &:focus {
        color: ${colors.orange};
    }

    @media (max-width: 800px) {
        justify-content: flex-start;

        height: auto;
        padding: 1em 0.3em;

        font-size: 24px;
        text-align: left;

        opacity: 0;

        &.show {
            opacity: 1;

            transition-property: opacity, color;
            transition-duration: 3s, 0.5s;
        }

        &.delay-1 {
            transition-delay: 0.3s, 0s;
        }
        &.delay-2 {
            transition-delay: 0.6s, 0s;
        }
        &.delay-3 {
            transition-delay: 0.9s, 0s;
        }
        &.delay-4 {
            transition-delay: 1.2s, 0s;
        }
    }
`;
