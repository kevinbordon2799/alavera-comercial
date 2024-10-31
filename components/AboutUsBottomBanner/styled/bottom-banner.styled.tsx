import styled from "styled-components";
import fonts from "../../../consts/fonts";

export const Section = styled.section`
    position: relative;

    display: flex;

    width: 100%;
    height: 600px;
    margin-top: 80px;
    /* margin-bottom: 80px; */

    /* background: yellow; */

    /* &.shapedividers_com-7166 {
        overflow: hidden;
        position: relative;
    }
    &.shapedividers_com-7166::before {
        content: "";
        font-family: "shape divider from ShapeDividers.com";
        position: absolute;
        z-index: 3;
        pointer-events: none;
        background-repeat: no-repeat;
        bottom: -0.1vw;
        left: -0.1vw;
        right: -0.1vw;
        top: -0.1vw;
        background-size: 100% 90px;
        background-position: 50% 0%;
        background-image: url('data:image/svg+xml;charset=utf8, <svg preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000.4 84"><g fill="%23ffffff"><path d="M1937 49V11l1-1 18-10h29l15 9v41l-30 18-33-19z" opacity=".5"/><path d="M1867 30V0h59v30l-29 17-30-17z"/><path d="M1716 60V11l2-1 9-5 9-5h44l16 9 2 1 2 1v49l-42 24-42-24zM1844 44v20l17 10 17-10V44l-17-10-17 10z" opacity=".75"/><path d="M1811 59v13l11 6 10-6V59l-10-6-11 6z"/><path d="M1796 32V0h59v32l-30 17-25-15-4-2z" opacity=".5"/><path d="M1814 9V0h59v9l-3 1-3 2-12 7-11 6-27-15-3-1zM1902 50v19l16 9 16-9V50l-16-10-16 10zM1661 43V5l8-5h50l8 5v38l-11 6-22 13-33-19z"/><path d="M1591 24V0h58v24l-29 17-29-17z" opacity=".5"/><path d="M1431 54V5l6-3 3-2h66l5 3 4 2v49l-42 24-36-21-6-3zM1567 38v20l17 10 18-10V38l-18-10-17 10zM1535 53v13l10 6 11-6V53l-11-6-10 6z"/><path d="M1504 28V0h64v28l-32 18-27-16-5-2z"/><path d="M1538 3V0h58v3l-5 3-8 4-5 3-11 6-16-9-13-7z"/><path d="M1625 44v19l17 9 16-9V44l-16-10-17 10z" opacity=".5"/><path d="M1163 43V5l8-5h50l8 5v38l-33 19-33-19zM1323 38v20l-17 10-17-10V38l17-10 17 10z"/><path d="M1356 53v13l-11 6-11-6V53l11-6 11 6z" opacity=".5"/><path d="M1455 67v11l-10 6-9-6V67l9-5 10 5z" opacity=".75"/><path d="M1312 26V0h59v26l-4 2-26 15-29-17z"/><path d="M1294 3V0h58v3l-13 7-16 9-11-6-5-3-8-4-5-3z"/><path d="M1209 3V0h59v3l-13 7-16 9-11-6-6-3-7-4-6-3z" opacity=".5"/><path d="M1265 44v19l-16 9-17-9V44l17-10 16 10z"/><path d="M1083 47V9l16-9h34l16 9v38l-33 19-33-19z" opacity=".75"/><path d="M1013 29V0h58v29l-29 17-29-17z"/><path d="M862 58V10l10-6 7-4h49l13 7 4 3v48l-41 24-42-24z" opacity=".5"/><path d="M989 42v20l17 10 18-10V42l-18-10-17 10zM1143 60v15l13 8 13-8V60l-13-8-13 8z" opacity=".75"/><path d="M1133 0h38l-17 10-2 1-2-1-17-10zM1708 8V0h38v8l-3 2-16 9-16-9-3-2zM1642 8V0h38v8l-3 2-16 9-16-9-3-2zM1774 0h39l-17 10-3 1-2-1-17-10zM1919 0h39l-17 10-3 1-2-1-17-10zM1061 0h38l-17 10-2 1-2-1-17-10zM920 9V0h38v9l-2 1-17 10-17-10-2-1zM853 0h39l-17 10-3 1-2-1-17-10zM359 0h38l-17 10-2 1-2-1-17-10zM278 17V0h39v17l-20 11-19-11zM206 7V0h39v7l-6 3-14 8-8-5-5-3-6-3zM956 58v12l11 7 11-7V58l-11-6-11 6z"/><path d="M941 30V0h59v30l-29 17-26-14-4-3z"/><path d="M960 7V0h58v7l-5 3-13 8-11 6-24-14-5-3z"/><path d="M1047 48v19l17 10 16-10V48l-16-9-17 9z" opacity=".5"/><path d="M806 41V3l6-3h55l5 3v38l-10 6-23 13-33-19z"/><path d="M736 23V0h59v23l-29 17-30-17zM585 52V4l6-3 1-1h71l2 1 4 3v48l-42 24-36-21-6-3zM713 36v20l17 10 17-10V36l-17-10-17 10z" opacity=".5"/><path d="M680 52v12l11 7 11-7V52l-11-6-11 6zM665 24V0h59v24l-30 17-25-15-4-2z"/><path d="M683 1V0h59v1l-6 3-10 6-2 2-11 6-14-8-16-9zM778 1V0h59v1l-6 3-10 6-2 2-11 6-14-8-16-9z"/><path d="M771 42v19l16 10 16-10V42l-16-9-16 9z" opacity=".75"/><path d="M309 41V3l5-3h55l6 3v38l-33 19-33-19z" opacity=".5"/><path d="M386 23V0h59v23l-29 17-30-17zM512 52V4l4-3 3-1h71l1 1 5 3v48l-5 3-37 21-42-24z"/><path d="M469 36v20l-18 10-17-10V36l17-10 18 10z" opacity=".75"/><path d="M501 52v12l-11 7-10-7V52l10-6 11 6z" opacity=".5"/><path d="M600 66v11l-9 5-10-5V66l10-6 9 6z"/><path d="M458 24V0h58v24l-4 2-25 15-29-17z" opacity=".75"/><path d="M439 1V0h59v1l-16 9-13 8-11-6-3-2-10-6-6-3z" opacity=".75"/><path d="M410 42v19l-16 10-16-10V42l16-9 16 9z" opacity=".5"/><path d="M228 43V5l9-5h49l8 5v38l-33 19-33-19z"/><path d="M158 24V0h59v24l-29 17-30-17z" opacity=".5"/><path d="M13 54V5l9-5h65l5 3 4 2v49L55 78 13 54zM135 38v20l17 10 17-10V38l-17-10-17 10z"/><path d="M102 54v12l11 6 11-6V54l-11-7-11 7zM3 68v11l10 5 9-5V68l-9-6-10 6z" opacity=".5"/><path d="M87 26V0h59v26l-30 17-25-15-4-2z" opacity=".75"/><path d="M105 3V0h59v3l-6 3-7 4-5 3-11 7-17-10-13-7zM0 9V0h42l-4 5-4 5-9 11-12-6-7-3-3-2-3-1z"/><path d="M193 44v19l16 9 16-9V44l-16-9-16 9z" opacity=".75"/><path d="M292 55v15l12 7 13-7V55l-13-7-12 7z"/><path d="M1367 54V5l4-2 5-3h65l4 2 6 3v49l-6 3-36 21-42-24z" opacity=".75"/><path d="M1998 10l2 1V0h-20l18 10z"/><path d="M1241 24V0h58v24l-29 17-29-17z" opacity=".5"/></g></svg>');
    } */
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export const ImageFilter = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.6);
`;

export const Hashtag = styled.h2`
    position: absolute;

    top: 50%;
    left: 50%;

    font-family: ${fonts.orbitron};
    font-size: 90px;
    font-weight: 700;

    color: #fff;

    transform: translateX(-50%) translateY(-50%);
`;

export const Separator = styled.img`
    position: absolute;

    width: 100%;
`;
