import {
    Footer,
    FooterWhiteImage,
    Logo,
    WhiteContainer,
} from "./styled/page-footer.styled";

export default function PageFooter() {
    return (
        <Footer>
            <WhiteContainer>
                {/* <FooterWhiteImage src="/img/footer-white.svg" /> */}
                <Logo src="/img/footer-logo.svg" />
            </WhiteContainer>
        </Footer>
    );
}
