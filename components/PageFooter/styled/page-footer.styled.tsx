import styled from "styled-components";

export const Footer = styled.footer`
    position: relative;
    /* bottom: 0; */
    display: flex;
    align-items: flex-end;

    flex-grow: 2;

    width: 100%;
    /* max-width: 1200px; */
    /* height: 300px; */

    margin-left: auto;
    margin-right: auto;
    /* height: 40vh; */

    /* background: red; */

    overflow: hidden;
`;

export const WhiteContainer = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    /* margin-bottom: -5px; */

    width: 100%;
    /* height: 300px; */
    padding: 2rem;

    background: #fff;
`;

export const FooterWhiteImage = styled.img`
    width: 100%;
`;

export const Logo = styled.img`
    /* position: absolute;

    top: 50%;
    left: 50%; */

    width: 150%;
    max-width: 1080px;

    /* transform: translateX(-50%); */
    /* transform: translateX(-50%) translateY(-50%); */
`;
