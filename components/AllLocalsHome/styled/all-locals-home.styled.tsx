import styled from "styled-components";
import colors from "../../../consts/colors";

export const Section = styled.section`
    display: flex;
    justify-content: center;

    width: 92%;
    max-width: 1200px;
    margin-top: 6vw;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1200px) {
        margin-top: 82px;
    }
`;

export const LocalsLink = styled.a`
    width: 100%;

    &:hover > svg > path.background,
    &:focus > svg > path.background {
        fill: ${colors.orange};
        d: path(
            "m 744.48,50.004 c 76.413,30.2702 104.28352,65.09837 109.27879,120.38851 6.13474,59.23619 -39.54845,178.16735 -134.0394,145.07996 -142.26619,-38.03457 -306.24107,75.93899 -391.01907,82.48599 -84.94,6.624 -81.95569,-65.1758 -183.65618,-117.19043 C 42.099207,249.48257 14.129,224.462 1.74198,171.316 -10.4842,118.247 27.153435,72.199763 130.09618,38.516195 244.46867,12.600861 357.64982,-1.6143955 449.01922,45.616286 554.23183,121.19271 668.066,19.7338 744.48,50.004 Z"
        );
    }
`;

export const SvgImage = styled.svg`
    width: 100%;

    transition-property: transform;
    transition-duration: 0.5s;

    & > path {
        transition-property: fill, d;
        transition-duration: 0.5s;
    }
`;
